import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import DevicePhoneMobileIcon from '@heroicons/react/24/outline/DevicePhoneMobileIcon';
import AtSymbolIcon from '@heroicons/react/24/outline/AtSymbolIcon';
import { XMarkIcon, Bars4Icon } from '@heroicons/react/24/outline';

export default function AboutPage() {
  const [isScrolled, setIsScrolled] = useState(false);
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white shadow-md'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center">
              <img 
                src="https://firekirin.com/wp-content/uploads/2023/12/Fire-Kirin-PNG-Logo-transparent.png" 
                alt="Fire Kirin XYZ" 
                className="h-16 w-auto"
              />
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-sm font-medium text-gray-900 hover:text-orange-600 transition-colors whitespace-nowrap cursor-pointer">
                Home
              </Link>
              <Link to="/about" className="text-sm font-medium text-orange-600  transition-colors whitespace-nowrap cursor-pointer">
                About
              </Link>
              <Link to="/download" className="text-sm font-medium text-gray-900 hover:text-orange-600 transition-colors whitespace-nowrap cursor-pointer">
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

            <Link 
              to="/download" 
              className="hidden md:block px-6 py-2.5 bg-gradient-to-r from-orange-500 to-red-600 text-white text-sm font-medium rounded-full hover:from-orange-600 hover:to-red-700 transition-all whitespace-nowrap cursor-pointer"
            >
              Get Started
            </Link>
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
                  className="block text-base font-medium text-gray-900 hover:text-emerald-600 transition-colors cursor-pointer"
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
                <Link 
                  to="/download" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white text-base font-medium rounded-full hover:from-emerald-600 hover:to-green-700 transition-all text-center whitespace-nowrap cursor-pointer"
                >
                  Get Started
                </Link>
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
              About <strong className="text-orange-600">Fire Kirin XYZ</strong>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the story behind one of the world's hottest sweepstakes gaming platforms and learn what makes Fire Kirin the ultimate choice for gaming enthusiasts.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Fire Kirin is one of the world's hottest sweepstakes gaming platforms, offering a thrilling and immersive experience for gaming enthusiasts worldwide. With a diverse selection of games including fish games, slots, and keno, Fire Kirin promises endless entertainment and the chance to win big rewards.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-12">What We Offer</h3>
            <div className="space-y-6 mb-12">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-orange-500 to-red-600 rounded-lg">
                    <i className="ri-gamepad-line text-xl text-white"></i>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Variety of Games</h4>
                  <p className="text-gray-600">
                    From the fast-paced action of fish games to the excitement of slots and the strategic challenge of keno, Fire Kirin has something for everyone. Our extensive game library is constantly updated with new and exciting titles.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-orange-500 to-red-600 rounded-lg">
                    <i className="ri-smartphone-line text-xl text-white"></i>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Play Anywhere</h4>
                  <p className="text-gray-600">
                    Whether you prefer playing online from your computer or on the go with our mobile app, Fire Kirin provides seamless access to your favorite games. Our platform is optimized for all devices.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-orange-500 to-red-600 rounded-lg">
                    <i className="ri-shield-check-line text-xl text-white"></i>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">User-Friendly Experience</h4>
                  <p className="text-gray-600">
                    Our platform is designed with you in mind, offering easy navigation, secure transactions, and top-notch customer support available 24/7 to assist you with any questions or concerns.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-12">Our Mission</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At Fire Kirin XYZ, our mission is to provide the most exciting and rewarding sweepstakes gaming experience available. We are committed to offering a safe, fair, and entertaining platform where players can enjoy their favorite games and have the opportunity to win amazing prizes.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-12">Why Choose Fire Kirin?</h3>
            <ul className="space-y-3 mb-12">
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-orange-600 text-xl mt-1"></i>
                <span className="text-gray-600">Wide selection of high-quality fish games, slots, and keno games</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-orange-600 text-xl mt-1"></i>
                <span className="text-gray-600">Secure and reliable platform with advanced encryption technology</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-orange-600 text-xl mt-1"></i>
                <span className="text-gray-600">24/7 customer support to assist you whenever you need help</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-orange-600 text-xl mt-1"></i>
                <span className="text-gray-600">Regular promotions and bonuses to maximize your winning potential</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-orange-600 text-xl mt-1"></i>
                <span className="text-gray-600">Easy-to-use interface designed for players of all experience levels</span>
              </li>
            </ul>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Us Today</h3>
              <p className="text-gray-600 mb-6">
                Experience the excitement of Fire Kirin and discover why thousands of players choose us as their preferred sweepstakes gaming platform. Create your free account today and start your winning journey.
              </p>
              <Link 
                to="/download" 
                className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white text-base font-semibold rounded-full hover:from-orange-600 hover:to-red-700 transition-all shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
              >
                Get Started Now
              </Link>
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
                src="https://firekirin.com/wp-content/uploads/2023/12/Fire-Kirin-PNG-Logo-transparent.png" 
                alt="Fire Kirin XYZ" 
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
                  <AtSymbolIcon className='w-4 h-4 mr-1'/>info@firekirinxyz.app
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
  );
}
