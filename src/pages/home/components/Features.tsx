import { 
  PuzzlePieceIcon,
  DevicePhoneMobileIcon,
  ShieldCheckIcon,
  TrophyIcon
} from "@heroicons/react/24/outline";

export default function Features() {
  const features = [
    {
      icon: PuzzlePieceIcon,
      title: 'Variety of Games',
      description: 'From fast-paced fish games to exciting slots and strategic keno, Fire Kirin has something for everyone to enjoy and win big.'
    },
    {
      icon: DevicePhoneMobileIcon,
      title: 'Play Anywhere',
      description: 'Whether you prefer playing online from your computer or on the go with our app, Fire Kirin provides seamless access to your favorite games.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'User-Friendly Experience',
      description: 'Our platform is designed with you in mind, offering easy navigation, secure transactions, and top-notch customer support available 24/7.'
    },
    {
      icon: TrophyIcon,
      title: 'Win Big Rewards',
      description: 'Compete with players worldwide, test your luck and skills, and earn amazing rewards with our generous sweepstakes and jackpots.'
    }
  ];
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Exactly is <strong className="text-orange-600">Fire Kirin</strong>?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Fire Kirin is one of the hottest sweepstakes gaming platforms in the world, offering an engaging and interactive experience to game-loving individuals due to its wide range of various games.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-red-50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-orange-500 to-red-600 rounded-xl mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
