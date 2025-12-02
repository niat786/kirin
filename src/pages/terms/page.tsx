import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { DevicePhoneMobileIcon, AtSymbolIcon, Bars4Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function TermsPage() {
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
                src="/images/Fire-Kirin-PNG-Logo-transparent.webp" 
                alt="Fire Kirin XYZ"                title="Fire Kirin XYZ app logo"  
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
              <Link to="/download" className="text-sm font-medium text-gray-900 hover:text-orange-600 transition-colors whitespace-nowrap cursor-pointer">
                Download
              </Link>
              <Link to="/contact" className="text-sm font-medium text-gray-900 hover:text-orange-600 transition-colors whitespace-nowrap cursor-pointer">
                Contact
              </Link>
            </div>

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
               
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Terms of Service
            </h1>
            <p className="text-base text-gray-600">
              Last Updated: January 15, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              These Terms of Service ("Terms") govern your access to and use of Fire Kirin XYZ's sweepstakes gaming platform, including our website, mobile applications, and related services (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Eligibility</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              To use our Services, you must:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="text-gray-600">Be at least 18 years of age or the legal age of majority in your jurisdiction</li>
              <li className="text-gray-600">Have the legal capacity to enter into a binding agreement</li>
              <li className="text-gray-600">Not be prohibited from using our Services under applicable laws</li>
              <li className="text-gray-600">Reside in a jurisdiction where sweepstakes gaming is legal</li>
              <li className="text-gray-600">Provide accurate and complete registration information</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Account Registration and Security</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              When you create an account with us, you agree to:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="text-gray-600">Provide accurate, current, and complete information</li>
              <li className="text-gray-600">Maintain and promptly update your account information</li>
              <li className="text-gray-600">Keep your password secure and confidential</li>
              <li className="text-gray-600">Notify us immediately of any unauthorized access to your account</li>
              <li className="text-gray-600">Accept responsibility for all activities that occur under your account</li>
              <li className="text-gray-600">Not share your account with others or create multiple accounts</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Use of Services</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Permitted Use</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              You may use our Services for lawful purposes and in accordance with these Terms. You agree to use the Services only for personal, non-commercial entertainment purposes.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Prohibited Activities</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              You agree not to:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="text-gray-600">Use the Services for any illegal or unauthorized purpose</li>
              <li className="text-gray-600">Violate any applicable laws or regulations</li>
              <li className="text-gray-600">Engage in fraudulent activities or money laundering</li>
              <li className="text-gray-600">Use bots, scripts, or automated tools to access the Services</li>
              <li className="text-gray-600">Attempt to gain unauthorized access to our systems or networks</li>
              <li className="text-gray-600">Interfere with or disrupt the Services or servers</li>
              <li className="text-gray-600">Harass, abuse, or harm other users</li>
              <li className="text-gray-600">Reverse engineer or attempt to extract source code</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Game Rules and Fair Play</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              All games on our platform are governed by specific rules and regulations. You agree to:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="text-gray-600">Play fairly and in accordance with game rules</li>
              <li className="text-gray-600">Not exploit bugs, glitches, or errors in the games</li>
              <li className="text-gray-600">Not collude with other players to gain unfair advantages</li>
              <li className="text-gray-600">Accept that game outcomes are determined by random number generators</li>
              <li className="text-gray-600">Understand that past results do not guarantee future outcomes</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Payments and Transactions</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              When making transactions on our platform:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="text-gray-600">All payments are processed securely through approved payment providers</li>
              <li className="text-gray-600">You are responsible for any fees charged by your payment provider</li>
              <li className="text-gray-600">Transactions are final and non-refundable except as required by law</li>
              <li className="text-gray-600">We reserve the right to refuse or cancel transactions</li>
              <li className="text-gray-600">You must use legitimate payment methods in your own name</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Intellectual Property Rights</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              All content, features, and functionality of our Services, including but not limited to text, graphics, logos, images, software, and game designs, are owned by Fire Kirin XYZ or our licensors and are protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, or create derivative works without our express written permission.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Disclaimers and Limitations of Liability</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Our Services are provided "as is" and "as available" without warranties of any kind. We do not guarantee that:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="text-gray-600">The Services will be uninterrupted, secure, or error-free</li>
              <li className="text-gray-600">Results obtained from using the Services will be accurate or reliable</li>
              <li className="text-gray-600">Any defects or errors will be corrected</li>
            </ul>
            <p className="text-gray-600 mb-6 leading-relaxed">
              To the maximum extent permitted by law, Fire Kirin XYZ shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Termination</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We reserve the right to suspend or terminate your account and access to the Services at any time, with or without notice, for any reason, including violation of these Terms. Upon termination, your right to use the Services will immediately cease.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Changes to Terms</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We may modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page and updating the "Last Updated" date. Your continued use of the Services after such changes constitutes your acceptance of the new Terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Governing Law</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles. Any disputes arising from these Terms or your use of the Services shall be resolved through binding arbitration.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Contact Information</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              If you have any questions about these Terms, please contact us:
            </p>
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6">
              <ul className="space-y-2">
                <li className="text-gray-600">
                  <strong>Email:</strong> <a href="mailto:info@firekirinxyz.app" className="text-orange-600 hover:text-orange-700 cursor-pointer">info@firekirinxyz.app</a>
                </li>
                <li className="text-gray-600">
                  <strong>Phone:</strong> <a href="tel:8446607600" className="text-orange-600 hover:text-orange-700 cursor-pointer">(844) 660-7600</a>
                </li>
              </ul>
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
                alt="Fire Kirin XYZ"                title="Fire Kirin XYZ app logo"  
                className="h-16 w-auto"
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
