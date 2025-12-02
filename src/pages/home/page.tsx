import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Games from './components/Games';
import Download from './components/Download';
import CTA from './components/CTA';
import DevicePhoneMobileIcon from '@heroicons/react/24/outline/DevicePhoneMobileIcon';
import AtSymbolIcon from '@heroicons/react/24/outline/AtSymbolIcon';
import Bars4Icon from '@heroicons/react/24/outline/Bars4Icon';
import XMarkIcon from '@heroicons/react/24/outline/XMarkIcon';

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://firekirinxyz.app/#organization",
      "name": "Fire Kirin XYZ",
      "url": "https://firekirinxyz.app/",
      "logo": "https://firekirinxyz.app/images/Fire-Kirin-PNG-Logo-transparent.webp",
      "description": "Fire Kirin XYZ is a sweepstakes gaming platform offering fish games, slots, and keno with secure access, smooth gameplay, and 24/7 support.",
      "telephone": "+1-844-660-7600",
      "email": "info@firekirinxyz.app",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+1-844-660-7600",
          "contactType": "customer support",
          "availableLanguage": [
            "en"
          ]
        }
      ],
      "sameAs": [
        "https://firekirinxyz.app"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://firekirinxyz.app/#website",
      "url": "https://firekirinxyz.app/",
      "name": "Fire Kirin XYZ",
      "publisher": {
        "@id": "https://firekirinxyz.app/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://firekirinxyz.app/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://firekirinxyz.app/#homepage",
      "url": "https://firekirinxyz.app/",
      "name": "Fire Kirin XYZ - The Ultimate Fish Games and Slots",
      "isPartOf": {
        "@id": "https://firekirinxyz.app/#website"
      },
      "about": {
        "@id": "https://firekirinxyz.app/#organization"
      },
      "description": "Download Fire Kirin XYZ for Android and iOS. Get fast, secure access with an easy login process and start playing instantly. Enjoy fish games, slots, keno, and sweepstakes gaming with 24/7 support.",
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://firekirinxyz.app/images/Fire-Kirin-PNG-Logo-transparent.webp"
      },
      "inLanguage": "en",
      "mainEntity": {
        "@id": "https://firekirinxyz.app/#games-list"
      }
    },
    {
      "@type": "ItemList",
      "@id": "https://firekirinxyz.app/#games-list",
      "name": "Fire Kirin Games",
      "description": "A collection of popular Fire Kirin fish games and slots.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Baby Octopus Fish Game"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Crab King 2 Fish Game"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Arc Of Templar"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Fire Kirin 2"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Eagle Eyes"
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Ocean Monster"
        }
      ]
    }
  ]
};

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center">
              <img 
                src="/images/Fire-Kirin-PNG-Logo-transparent.webp" 
                alt="Fire Kirin XYZ" 
                className="h-16 w-auto"
                title='Fire Kirin Logo'
              />
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className={`text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${isScrolled ? 'text-gray-900 hover:text-emerald-600' : 'text-orange-600 hover:text-emerald-400'}`}>
                Home
              </Link>
              <Link to="/about" className={`text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${isScrolled ? 'text-gray-900 hover:text-emerald-600' : 'text-white hover:text-emerald-400'}`}>
                About
              </Link>
              <Link to="/download" className={`text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${isScrolled ? 'text-gray-900 hover:text-emerald-600' : 'text-white hover:text-emerald-400'}`}>
                Download
              </Link>
              <Link to="/contact" className={`text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${isScrolled ? 'text-gray-900 hover:text-emerald-600' : 'text-white hover:text-emerald-400'}`}>
                Contact
              </Link>
              <a 
                href="tel:8446607600" 
                className={`text-sm flex font-medium transition-colors whitespace-nowrap cursor-pointer ${isScrolled ? 'text-gray-900 hover:text-emerald-600' : 'text-white hover:text-emerald-400'}`}
              >
                <DevicePhoneMobileIcon className="w-5 h-5 mr-1" />(844) 660-7600
              </a>
            </div>

            <Link 
              to="/download" 
              className="hidden md:block px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-green-600 text-white text-sm font-medium rounded-full hover:from-emerald-600 hover:to-green-700 transition-all whitespace-nowrap cursor-pointer"
            >
              Get Started
            </Link>
            {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`md:hidden w-10 h-10 flex items-center justify-center rounded-lg transition-colors cursor-pointer ${isScrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
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
            <div className="md:hidden bg-white border-t rounded-lg border-gray-200 shadow-lg">
              <div className="px-4 py-6 space-y-4">
                <Link 
                  to="/" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-base font-medium text-orange-600 hover:text-emerald-600 transition-colors cursor-pointer"
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

      {/* Main Content */}
      <main>
        <Hero />
        <Features />
        <Games />
        <Download />
        <CTA />
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-emerald-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <img 
                src="/images/Fire-Kirin-PNG-Logo-transparent.webp" 
                alt="Fire Kirin XYZ" 
                className="h-16 w-auto mb-4"
                title='Fire Kirin Logo'
              />
              <p className="text-sm text-gray-600">
                The ultimate fish games and slots sweepstakes platform
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-sm text-gray-600 hover:text-emerald-600 transition-colors cursor-pointer">Home</Link></li>
                <li><Link to="/about" className="text-sm text-gray-600 hover:text-emerald-600 transition-colors cursor-pointer">About</Link></li>
                <li><Link to="/download" className="text-sm text-gray-600 hover:text-emerald-600 transition-colors cursor-pointer">Download</Link></li>
                <li><Link to="/contact" className="text-sm text-gray-600 hover:text-emerald-600 transition-colors cursor-pointer">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link to="/privacy" className="text-sm text-gray-600 hover:text-emerald-600 transition-colors cursor-pointer">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-sm text-gray-600 hover:text-emerald-600 transition-colors cursor-pointer">Terms of Service</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-sm text-gray-600 flex">
                  <DevicePhoneMobileIcon className='w-4 h-4 mr-1'/> (844) 660-7600
                </li>
                <li className="text-sm text-gray-600 flex">
                  <AtSymbolIcon className='w-4 h-4 mr-1'/> info@firekirinxyz.app
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
