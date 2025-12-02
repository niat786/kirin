import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import DevicePhoneMobileIcon from '@heroicons/react/24/outline/DevicePhoneMobileIcon';
import AtSymbolIcon from '@heroicons/react/24/outline/AtSymbolIcon';
import { XMarkIcon, Bars4Icon } from '@heroicons/react/24/outline';


export default function DownloadPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    "name": "Fire Kirin App",
    "operatingSystem": "Android, iOS",
    "applicationCategory": "GameApplication",
    "url": "https://firekirinxyz.app/download",
    "image": "https://firekirinxyz.app/images/Fire-Kirin-PNG-Logo-transparent.webp",
    "description":
      "Download Fire Kirin App for Android and iOS devices. Enjoy skill-based fish arcade games and sweepstakes gaming on the go with fast login and smooth gameplay.",
    "downloadUrl": "https://firekirinxyz.app/download",
    "offers": [
      {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "category": "Download",
        "description":
          "Free mobile app download for Android and iOS."
      }
    ],
    "publisher": {
      "@type": "Organization",
      "name": "Fire Kirin XYZ",
      "url": "https://firekirinxyz.app",
      "logo": "https://firekirinxyz.app/images/Fire-Kirin-PNG-Logo-transparent.webp"
    },
    "operatingSystems": [
      {
        "@type": "SoftwareApplication",
        "name": "Android Version",
        "downloadUrl": "http://play.firekirin.in/web_mobile/firekirin_pc/"
      },
      {
        "@type": "SoftwareApplication",
        "name": "iOS Version",
        "downloadUrl": "http://play.firekirin.in/web_mobile/firekirin_pc/"
      }
    ],
    "sameAs": [
      "https://playfk.com",
      "https://firekirinxyz.app"
    ]
  };

  return (
    <>
   

    <div className="min-h-screen bg-white">
       <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white shadow-md'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center">
              <img 
                src="/images/Fire-Kirin-PNG-Logo-transparent.webp" 
                alt="Fire Kirin XYZ" 
                title="Fire Kirin XYZ" 
                className="h-16 w-auto"
              />
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-sm font-medium text-gray-900 hover:text-orange-600 transition-colors whitespace-nowrap cursor-pointer">
                Home
              </Link>
              <Link to="/about" className="text-sm font-medium text-gray-900 hover:text-orange-600 transition-colors whitespace-nowrap cursor-pointer">
                About
              </Link>
              <Link to="/download" className="text-sm font-medium text-orange-600 transition-colors whitespace-nowrap cursor-pointer">
                Download
              </Link>
              <Link to="/contact" className="text-sm font-medium text-gray-900 hover:text-orange-600 transition-colors whitespace-nowrap cursor-pointer">
                Contact
              </Link>
              <a 
                href="tel:8446607600" 
                className="text-sm flex font-medium text-gray-900 hover:text-orange-600 transition-colors whitespace-nowrap cursor-pointer"
              >
                <DevicePhoneMobileIcon className='w-4 h-4 mr-1'/>(844) 660-7600
              </a>
            </div>

            <a 
              href="https://playfk.com" 
              target="_blank" 
              rel="nofollow noopener noreferrer"
              className="hidden md:block px-6 py-2.5 bg-gradient-to-r from-orange-500 to-red-600 text-white text-sm font-medium rounded-full hover:from-orange-600 hover:to-red-700 transition-all whitespace-nowrap cursor-pointer"
            >
              Play Now
            </a>
            {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`md:hidden w-10 h-10 flex items-center justify-center rounded-lg transition-colors cursor-pointer ${isScrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-gray-800 hover:bg-white/10'}`}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <XMarkIcon className="w-6 h-6" />
                ) : (
                  <Bars4Icon className="w-6 h-6" />
                )}
              </button>
          </div>
        {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-4 py-6 space-y-4">
                <Link 
                  to="/" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-base font-medium text-gray-900 hover:text-emerald-600 transition-colors cursor-pointer"
                >
                  Home
                </Link>
                <Link 
                  to="/about" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-base font-medium text-gray-900 hover:text-emerald-600 transition-colors cursor-pointer"
                >
                  About
                </Link>
                <Link 
                  to="/download" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-base font-medium text-orange-600 hover:text-emerald-600 transition-colors cursor-pointer"
                >
                  Download
                </Link>
                <Link 
                  to="/contact" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-base font-medium text-gray-900 hover:text-emerald-600 transition-colors cursor-pointer"
                >
                  Contact
                </Link>
                <a 
                  href="tel:8446607600" 
                  className=" flex text-base font-medium text-gray-900 hover:text-emerald-600 transition-colors cursor-pointer"
                >
                <DevicePhoneMobileIcon className="w-5 h-5 mr-1" />(844) 660-7600
                  
                </a>
                
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Download <strong className="text-orange-600">Fire Kirin</strong>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get the Fire Kirin app on your Android or iOS device and enjoy the hottest sweepstakes games anywhere, anytime. Start playing and winning today.
            </p>
          </div>
        </div>
      </section>

      {/* Download Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Android */}
            <div className="group">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300">
                <div className="flex justify-center mb-8">
                  <div className="w-32 h-32 flex items-center justify-center bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl group-hover:scale-110 transition-transform shadow-lg">
                     <svg fill='#fff' className='w-20' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M420.5 253.9a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm-265.1 0a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm273.7-96.5l47.9-83c.8-1.1 1.3-2.4 1.5-3.8s.2-2.7-.1-4.1-.9-2.6-1.7-3.7-1.8-2-3-2.7-2.5-1.1-3.9-1.3-2.7 0-4 .4-2.5 1.1-3.6 1.9-1.9 2-2.5 3.2l-48.5 84.1c-38.8-17.4-80.8-26.4-123.3-26.4s-84.5 9-123.3 26.4L116.2 64.4c-.6-1.2-1.5-2.3-2.5-3.2s-2.3-1.5-3.6-1.9-2.7-.5-4-.4-2.7 .6-3.9 1.3-2.2 1.6-3 2.7-1.4 2.4-1.7 3.7-.3 2.7-.1 4.1 .8 2.6 1.5 3.8l47.9 83C64.5 202.2 8.2 285.5 0 384l576 0c-8.2-98.5-64.5-181.8-146.9-226.6z"/></svg>
                  </div>
                </div>
                
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
                  Download for Android
                </h2>
                <p className="text-base text-gray-600 text-center mb-8">
                  Compatible with Android 5.0 and above. Enjoy seamless gameplay with optimized performance on all Android devices.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <i className="ri-check-line text-green-600 text-xl mt-1"></i>
                    <span className="text-sm text-gray-600">Easy installation process</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <i className="ri-check-line text-green-600 text-xl mt-1"></i>
                    <span className="text-sm text-gray-600">Optimized for all screen sizes</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <i className="ri-check-line text-green-600 text-xl mt-1"></i>
                    <span className="text-sm text-gray-600">Regular updates with new games</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <i className="ri-check-line text-green-600 text-xl mt-1"></i>
                    <span className="text-sm text-gray-600">Secure and safe to use</span>
                  </div>
                </div>

                <a 
                  href="http://tititi.xyz/firekirin2/android/firekirin.apk" 
                
                  className="block w-full px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-base font-semibold rounded-full hover:from-green-600 hover:to-emerald-700 transition-all text-center shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
                >
                  Download APK
                </a>
              </div>
            </div>

            {/* iOS */}
            <div className="group">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300">
                <div className="flex justify-center mb-8">
                  <div className="w-32 h-32 flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-900 rounded-3xl group-hover:scale-110 transition-transform shadow-lg">
                    <svg fill='#fff' className='w-16' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M319.1 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7-55.8 .9-115.1 44.5-115.1 133.2 0 26.2 4.8 53.3 14.4 81.2 12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zM262.5 104.5c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>

                  </div>
                </div>
                
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
                  Download for iOS
                </h2>
                <p className="text-base text-gray-600 text-center mb-8">
                  Compatible with iOS 12.0 and above. Experience stunning graphics and smooth performance on iPhone and iPad.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <i className="ri-check-line text-gray-700 text-xl mt-1"></i>
                    <span className="text-sm text-gray-600">Optimized for iPhone and iPad</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <i className="ri-check-line text-gray-700 text-xl mt-1"></i>
                    <span className="text-sm text-gray-600">Retina display support</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <i className="ri-check-line text-gray-700 text-xl mt-1"></i>
                    <span className="text-sm text-gray-600">Touch ID and Face ID support</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <i className="ri-check-line text-gray-700 text-xl mt-1"></i>
                    <span className="text-sm text-gray-600">Automatic updates</span>
                  </div>
                </div>

                <a 
                  href="http://start.firekirin.xyz:8580/firekirin.html" 
                  target="_blank" 
                  className="block w-full px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-900 text-white text-base font-semibold rounded-full hover:from-gray-800 hover:to-black transition-all text-center shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
                >
                  Download App
                </a>
              </div>
            </div>
          </div>

          {/* Play Online */}
          <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Or Play Online Without Downloading
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              No download required. Play Fire Kirin directly in your browser with instant access to all games.
            </p>
            <a 
              href="https://playfk.com/login" 
              target="_blank" 
              className="inline-block px-8 py-4 bg-white text-orange-600 text-base font-semibold rounded-full hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
            >
              Play Online Now
            </a>
          </div>
        </div>
      </section>

      {/* Installation Guide */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How to Install
            </h2>
            <p className="text-lg text-gray-600">
              Follow these simple steps to install Fire Kirin on your device
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Android Steps */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <i className="ri-android-line text-green-600 text-2xl"></i>
                Android Installation
              </h3>
              <ol className="space-y-4">
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-green-100 text-green-600 rounded-full font-semibold text-sm">1</span>
                  <span className="text-sm text-gray-600 pt-1">Click the download button above</span>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-green-100 text-green-600 rounded-full font-semibold text-sm">2</span>
                  <span className="text-sm text-gray-600 pt-1">Allow installation from unknown sources in settings</span>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-green-100 text-green-600 rounded-full font-semibold text-sm">3</span>
                  <span className="text-sm text-gray-600 pt-1">Open the downloaded APK file</span>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-green-100 text-green-600 rounded-full font-semibold text-sm">4</span>
                  <span className="text-sm text-gray-600 pt-1">Follow the installation prompts</span>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-green-100 text-green-600 rounded-full font-semibold text-sm">5</span>
                  <span className="text-sm text-gray-600 pt-1">Launch the app and start playing</span>
                </li>
              </ol>
            </div>

            {/* iOS Steps */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <i className="ri-apple-line text-gray-700 text-2xl"></i>
                iOS Installation
              </h3>
              <ol className="space-y-4">
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gray-100 text-gray-700 rounded-full font-semibold text-sm">1</span>
                  <span className="text-sm text-gray-600 pt-1">Click the download button above</span>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gray-100 text-gray-700 rounded-full font-semibold text-sm">2</span>
                  <span className="text-sm text-gray-600 pt-1">Trust the developer profile in Settings</span>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gray-100 text-gray-700 rounded-full font-semibold text-sm">3</span>
                  <span className="text-sm text-gray-600 pt-1">Return to home screen and tap the app icon</span>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gray-100 text-gray-700 rounded-full font-semibold text-sm">4</span>
                  <span className="text-sm text-gray-600 pt-1">Allow necessary permissions</span>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gray-100 text-gray-700 rounded-full font-semibold text-sm">5</span>
                  <span className="text-sm text-gray-600 pt-1">Launch the app and start playing</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Is Fire Kirin free to download?</h4>
              <p className="text-sm text-gray-600">Yes, Fire Kirin is completely free to download and install on both Android and iOS devices.</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">What devices are supported?</h4>
              <p className="text-sm text-gray-600">Fire Kirin supports Android devices running Android 5.0 or higher, and iOS devices running iOS 12.0 or higher.</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Do I need an account to play?</h4>
              <p className="text-sm text-gray-600">Yes, you need to create a free Fire Kirin account to access all games and features. The registration process is quick and easy.</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Is my data secure?</h4>
              <p className="text-sm text-gray-600">Absolutely. We use advanced encryption technology to protect your personal information and ensure secure transactions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <img 
                src="/images/Fire-Kirin-PNG-Logo-transparent.webp" 
                alt="Fire Kirin XYZ" 
                title="Fire Kirin XYZ" 
                className="h-16 w-auto mb-4"
              />
              <p className="text-sm text-gray-600">
                The ultimate fish games and slots sweepstakes platform
              </p>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-sm text-gray-600 hover:text-orange-600 transition-colors cursor-pointer">Home</Link></li>
                <li><Link to="/about" className="text-sm text-gray-600 hover:text-orange-600 transition-colors cursor-pointer">About</Link></li>
                <li><Link to="/download" className="text-sm text-gray-600 hover:text-orange-600 transition-colors cursor-pointer">Download</Link></li>
                <li><Link to="/contact" className="text-sm text-gray-600 hover:text-orange-600 transition-colors cursor-pointer">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link to="/privacy" className="text-sm text-gray-600 hover:text-orange-600 transition-colors cursor-pointer">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-sm text-gray-600 hover:text-orange-600 transition-colors cursor-pointer">Terms of Service</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-sm flex text-gray-600">
                  <DevicePhoneMobileIcon className='w-4 h-4 mr-1'/>(844) 660-7600
                </li>
                <li className="text-sm flex text-gray-600">
                  <AtSymbolIcon className='w-4 h-4 mr-1' />info@firekirinxyz.app
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Fire Kirin XYZ. All Rights Reserved. | <a href="/" className="hover:text-emerald-600 transition-colors cursor-pointer text-green-700">Fire Kirin</a>
            </p>
          </div>
        </div>
      </footer>
    </div>

    </>
  );
}
