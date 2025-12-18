import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { compile } from "tailwindcss";

const projectRoot = process.cwd();
const nodeModulesRoot = path.join(projectRoot, "node_modules");

async function listFilesRecursive(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    // Skip node_modules for speed
    if (entry.name === "node_modules") continue;
    if (entry.name.startsWith(".")) continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await listFilesRecursive(fullPath)));
    else files.push(fullPath);
  }
  return files;
}

function extractCandidatesFromHtml(html) {
  const candidates = [];

  // class="..." and class='...'
  const classAttrRe = /\bclass\s*=\s*("([^"]*)"|'([^']*)')/gms;
  let m;
  while ((m = classAttrRe.exec(html)) !== null) {
    const raw = m[2] ?? m[3] ?? "";
    for (const token of raw.split(/\s+/g)) {
      if (!token) continue;
      candidates.push(token.trim());
    }
  }

  return candidates;
}

async function main() {
  const inputCssPath = path.join(projectRoot, "css", "input.css");
  const outputCssPath = path.join(projectRoot, "css", "tailwind.css");

  const inputCss = await fs.readFile(inputCssPath, "utf8");

  const allFiles = await listFilesRecursive(projectRoot);
  const htmlFiles = allFiles.filter((f) => f.toLowerCase().endsWith(".html"));

  const candidatesSet = new Set();
  for (const file of htmlFiles) {
    const html = await fs.readFile(file, "utf8");
    for (const c of extractCandidatesFromHtml(html)) candidatesSet.add(c);
  }

  // Ensure JS-toggled class exists even if missing in markup
  candidatesSet.add("hidden");

  const candidates = Array.from(candidatesSet);

  const compiler = await compile(inputCss, {
    base: projectRoot,
    from: inputCssPath,
    loadStylesheet: async (id, base) => {
      let resolved;

      // Tailwind v4 uses `@import "tailwindcss";`
      if (id === "tailwindcss") {
        resolved = path.join(nodeModulesRoot, "tailwindcss", "index.css");
      } else if (id.startsWith(".") || id.startsWith("/")) {
        resolved = path.resolve(base, id);
      } else {
        // Basic node_modules resolution for CSS files
        resolved = path.join(nodeModulesRoot, id);
      }

      const content = await fs.readFile(resolved, "utf8");
      return {
        path: resolved,
        base: path.dirname(resolved),
        content,
      };
    },
    loadModule: async (id, base) => {
      const resolved = id.startsWith(".") || id.startsWith("/")
        ? path.resolve(base, id)
        : path.join(nodeModulesRoot, id);

      const url = pathToFileURL(resolved).href;
      const imported = await import(url);
      const mod = imported?.default ?? imported;

      return {
        path: resolved,
        base: path.dirname(resolved),
        module: mod,
      };
    },
  });

  const css = compiler.build(candidates);
  await fs.writeFile(outputCssPath, css, "utf8");
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});


