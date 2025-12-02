import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import DevicePhoneMobileIcon from '@heroicons/react/24/outline/DevicePhoneMobileIcon';
import AtSymbolIcon from '@heroicons/react/24/outline/AtSymbolIcon';
import { XMarkIcon, Bars4Icon } from '@heroicons/react/24/outline';

export default function PrivacyPage() {
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
              Privacy Policy
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Fire Kirin XYZ ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our sweepstakes gaming platform, including our website and mobile applications.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Information We Collect</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We may collect personal information that you provide to us, including:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="text-gray-600">Name and contact information (email address, phone number)</li>
              <li className="text-gray-600">Account credentials (username and password)</li>
              <li className="text-gray-600">Payment information for transactions</li>
              <li className="text-gray-600">Date of birth and identification information for age verification</li>
              <li className="text-gray-600">Communication preferences and customer support interactions</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Automatically Collected Information</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              When you access our platform, we automatically collect certain information, including:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="text-gray-600">Device information (device type, operating system, unique device identifiers)</li>
              <li className="text-gray-600">Usage data (game play history, session duration, features used)</li>
              <li className="text-gray-600">IP address and location information</li>
              <li className="text-gray-600">Browser type and version</li>
              <li className="text-gray-600">Cookies and similar tracking technologies</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">How We Use Your Information</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We use the information we collect for various purposes, including:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="text-gray-600">Providing and maintaining our gaming platform and services</li>
              <li className="text-gray-600">Processing transactions and managing your account</li>
              <li className="text-gray-600">Verifying your identity and age for compliance purposes</li>
              <li className="text-gray-600">Improving our games, features, and user experience</li>
              <li className="text-gray-600">Sending you updates, promotions, and marketing communications</li>
              <li className="text-gray-600">Providing customer support and responding to inquiries</li>
              <li className="text-gray-600">Detecting and preventing fraud, abuse, and security issues</li>
              <li className="text-gray-600">Complying with legal obligations and enforcing our terms</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Information Sharing and Disclosure</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We may share your information in the following circumstances:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="text-gray-600"><strong>Service Providers:</strong> With third-party vendors who perform services on our behalf</li>
              <li className="text-gray-600"><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
              <li className="text-gray-600"><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              <li className="text-gray-600"><strong>With Your Consent:</strong> When you explicitly agree to share your information</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Data Security</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption, secure servers, and regular security assessments. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Your Privacy Rights</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Depending on your location, you may have certain rights regarding your personal information:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="text-gray-600">Access and receive a copy of your personal information</li>
              <li className="text-gray-600">Request correction of inaccurate or incomplete information</li>
              <li className="text-gray-600">Request deletion of your personal information</li>
              <li className="text-gray-600">Object to or restrict certain processing of your information</li>
              <li className="text-gray-600">Withdraw consent where processing is based on consent</li>
              <li className="text-gray-600">Data portability rights</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Cookies and Tracking Technologies</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We use cookies and similar tracking technologies to enhance your experience on our platform. You can control cookie settings through your browser preferences. However, disabling cookies may affect the functionality of certain features.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Children's Privacy</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child, we will take steps to delete such information promptly.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Changes to This Privacy Policy</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically for any changes.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Contact Us</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              If you have any questions about this Privacy Policy or our privacy practices, please contact us:
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
