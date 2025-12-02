
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/Fire-Kirin-Fish-and-Slot-Games.webp)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
        <p className="text-lg sm:text-xl font-bold text-emerald-400 mb-4 tracking-wide drop-shadow-lg">
          The Ultimate Fish Games and Slots
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
          Fire Kirin XYZ <br/>Download and Login <br/>For Android and iOS
        </h1>
        <p className="text-lg sm:text-xl text-white mb-8 max-w-2xl mx-auto drop-shadow-lg">
            Download Fire Kirin XYZ for Android and iOS. Get fast, secure access with an easy login process and start playing instantly
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            to="/download" 
            className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white text-base font-semibold rounded-full hover:from-emerald-600 hover:to-green-700 transition-all shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
          >
            Get Free Account
          </Link>
          <a 
            href="https://playfk.com/login" 
            target="_blank" 
            rel="nofollow noopener noreferrer"
            className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white text-base font-semibold rounded-full hover:bg-white/30 transition-all border-2 border-white/50 whitespace-nowrap cursor-pointer shadow-lg"
          >
            Play Now
          </a>
        </div>

        
      </div>
    </section>
  );
}
