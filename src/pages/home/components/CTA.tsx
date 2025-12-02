import { Link } from 'react-router-dom';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-500 to-red-600 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Ready to Start Winning?
        </h2>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          Join thousands of players who are already enjoying Fire Kirin's exciting games and winning big rewards every day.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            to="/download" 
            className="px-8 py-4 bg-white text-orange-600 text-base font-semibold rounded-full hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
          >
            Get Free Account
          </Link>
          <Link 
            to="/contact" 
            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white text-base font-semibold rounded-full hover:bg-white/20 transition-all border-2 border-white/30 whitespace-nowrap cursor-pointer"
          >
            Contact Us
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">50+</div>
            <div className="text-sm text-white/80">Games Available</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">100K+</div>
            <div className="text-sm text-white/80">Active Players</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-sm text-white/80">Customer Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}
