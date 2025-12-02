import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import DevicePhoneMobileIcon from '@heroicons/react/24/outline/DevicePhoneMobileIcon';
import { AtSymbolIcon, Bars4Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function ContactPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
              <Link to="/contact" className="text-sm font-medium text-orange-600 transition-colors whitespace-nowrap cursor-pointer">
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
                  className="block text-base font-medium text-orange-600 hover:text-emerald-600 transition-colors cursor-pointer"
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
              Get in <strong className="text-orange-600">Touch</strong>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Have questions or need assistance? Our team is here to help you 24/7. Reach out to us and we'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Contact Information
              </h2>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gradient-to-br from-orange-500 to-red-600 rounded-lg">
                    <i className="ri-phone-line text-xl text-white"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
                    <a href="tel:8446607600" className="text-base text-gray-600 hover:text-orange-600 transition-colors cursor-pointer">
                      (844) 660-7600
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Available 24/7</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gradient-to-br from-orange-500 to-red-600 rounded-lg">
                    <i className="ri-mail-line text-xl text-white"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                    <a href="mailto:info@firekirinxyz.app" className="text-base text-gray-600 hover:text-orange-600 transition-colors cursor-pointer">
                      info@firekirinxyz.app
                    </a>
                    <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gradient-to-br from-orange-500 to-red-600 rounded-lg">
                    <i className="ri-time-line text-xl text-white"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Support Hours</h3>
                    <p className="text-base text-gray-600">24/7 Customer Support</p>
                    <p className="text-sm text-gray-500 mt-1">Always here to help you</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Need Immediate Help?</h3>
                <p className="text-sm text-gray-600 mb-6">
                  For urgent matters or immediate assistance, please call our 24/7 support line. Our team is always ready to help you with any questions or concerns.
                </p>
                <a 
                  href="tel:8446607600" 
                  className="inline-block px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white text-sm font-semibold rounded-full hover:from-orange-600 hover:to-red-700 transition-all whitespace-nowrap cursor-pointer"
                >
                  Call Now
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-gradient-to-br from-gray-50 to-orange-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Send Us a Message
                </h2>

                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-sm text-green-800 flex items-center gap-2">
                      <i className="ri-check-line text-lg"></i>
                      Thank you for contacting us! We'll get back to you soon.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-900 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-900 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      maxLength={500}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm resize-none"
                      placeholder="How can we help you?"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      {formData.message.length}/500 characters
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white text-base font-semibold rounded-full hover:from-orange-600 hover:to-red-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
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
