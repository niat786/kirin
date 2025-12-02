export default function Download() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Download <strong className="text-orange-600">Fire Kirin App</strong> Now
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            No matter whether you use an Android or Apple iOS device, you can download the Fire Kirin App and enjoy hours of exciting gaming on the hottest sweepstakes platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Android */}
          <div className="group p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 flex items-center justify-center bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl group-hover:scale-110 transition-transform">
                {/* <i className="ri-android-line text-5xl text-white"></i> */}
                <svg fill='#fff' className='w-20' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M420.5 253.9a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm-265.1 0a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm273.7-96.5l47.9-83c.8-1.1 1.3-2.4 1.5-3.8s.2-2.7-.1-4.1-.9-2.6-1.7-3.7-1.8-2-3-2.7-2.5-1.1-3.9-1.3-2.7 0-4 .4-2.5 1.1-3.6 1.9-1.9 2-2.5 3.2l-48.5 84.1c-38.8-17.4-80.8-26.4-123.3-26.4s-84.5 9-123.3 26.4L116.2 64.4c-.6-1.2-1.5-2.3-2.5-3.2s-2.3-1.5-3.6-1.9-2.7-.5-4-.4-2.7 .6-3.9 1.3-2.2 1.6-3 2.7-1.4 2.4-1.7 3.7-.3 2.7-.1 4.1 .8 2.6 1.5 3.8l47.9 83C64.5 202.2 8.2 285.5 0 384l576 0c-8.2-98.5-64.5-181.8-146.9-226.6z"/></svg>

              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
              Android
            </h3>
            <p className="text-sm text-gray-600 text-center mb-6">
              Download Fire Kirin for Android devices and enjoy playing anywhere, anytime with smooth performance.
            </p>
            <div className="space-y-3">
              <a 
                href="/download"
                className="block w-full px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm font-semibold rounded-full hover:from-green-600 hover:to-emerald-700 transition-all text-center whitespace-nowrap cursor-pointer"
              >
                Download for Android
              </a>
             
            </div>
          </div>

          {/* iOS */}
          <div className="group p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl group-hover:scale-110 transition-transform">
                <svg fill='#fff' className='w-14' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M319.1 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7-55.8 .9-115.1 44.5-115.1 133.2 0 26.2 4.8 53.3 14.4 81.2 12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zM262.5 104.5c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>

              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
              iOS
            </h3>
            <p className="text-sm text-gray-600 text-center mb-6">
              Fire Kirin - Download for iPhone and iPad with better graphics, more smooth gameplay.
            </p>
            <div className="space-y-3">
              <a 
                href="/download" 
                className="block w-full px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-900 text-white text-sm font-semibold rounded-full hover:from-gray-800 hover:to-black transition-all text-center whitespace-nowrap cursor-pointer"
              >
                Download for iOS
              </a>
              
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600 mb-4">
            Or play directly in your browser without downloading
          </p>
          <a 
            href="https://playfk.com" 
            target="_blank" 
            rel="nofollow noopener noreferrer"
            className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 transition-colors cursor-pointer"
          >
            Play Online Now <i className="ri-arrow-right-line ml-2"></i>
          </a>
        </div>
      </div>
      
    </section>
  );
}




