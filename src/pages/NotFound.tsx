export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-6 bg-[#0a0a0a]">
      <h1 className="text-7xl md:text-8xl font-extrabold text-emerald-500 drop-shadow-lg">
        404
      </h1>

      <h2 className="mt-6 text-3xl md:text-4xl font-semibold text-white">
        Page Not Found
      </h2>

      <p className="mt-4 text-lg md:text-xl text-gray-400 max-w-xl">
        The page you're looking for doesn't exist or has been moved.  
        But you can still download Fire Kirin or log in to your account below.
      </p>

      <div className="flex flex-col md:flex-row gap-4 mt-10">
        <a
          href="/download"
          className="px-6 py-3 rounded-lg text-lg font-semibold bg-gradient-to-tr from-emerald-600 to-emerald-700 hover:bg-emerald-700 text-white transition-all"
        >
          Download Fire Kirin
        </a>

        
      </div>

      <a
        href="/"
        className="mt-8 text-gray-400 hover:text-gray-200 text-sm transition-all underline"
      >
        Go Back to Home
      </a>
    </div>
  );
}