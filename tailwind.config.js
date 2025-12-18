module.exports = {
  content: ["./*.html", "./**/*.html", "./js/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
        ],
      },
      colors: {
        brand: {
          DEFAULT: "#10b981", // emerald-500
          dark: "#059669", // emerald-600
        },
      },
      boxShadow: {
        premium: "0 20px 60px -30px rgba(2, 6, 23, 0.35)",
        glow: "0 20px 60px -30px rgba(16, 185, 129, 0.55)",
      },
    },
  },
  plugins: [],
}
