export default function Games() {
  const games = [
    {
      title: 'Baby Octopus Fish Game',
      image: '/images/games/Baby-Octopus-Fish-Game.webp',
      category: 'Fish Game'
    },
    {
      title: 'Crab King 2 Fish Game',
      image: '/images/games/Fire-Kirin-Fish-Game-Crab-King-2.webp',
      category: 'Fish Game'
    },
    {
      title: 'Arc Of Templar',
      image: '/images/games/Fire-Kirin-Fish-Game-Arc-Of-Templar.webp',
      category: 'Fish Game'
    },
    {
      title: 'Fire Kirin 2',
      image: '/images/games/Fish-Game-Fire-Kirin-2.webp',
      category: 'Fish Game'
    },
    {
      title: 'Eagle Eyes',
      image: '/images/games/Eagle-Eyes-Fish-Game.webp',
      category: 'Fish Game'
    },
    {
      title: 'Ocean Monster',
      image: '/images/games/Ocean-Monsters-Fish-Game.webp',
      category: 'Fish Game'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Check Out the <strong className="text-orange-600">Hottest Fire Kirin Games</strong>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Check out our range of exciting fish and thrilling slots games which include diverse features, graphics, and some great rewards.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {games.map((game, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >
              <div className="aspect-[4/3] w-full h-full overflow-hidden">
                <img 
                  src={game.image}
                  alt={game.title}
                  title={game.title}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 bg-orange-500 text-white text-xs font-medium rounded-full mb-2">
                    {game.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {game.title}
                  </h3>
                  <a 
                    href="https://playfk.com" 
                    target="_blank" 
                    rel="nofollow noopener noreferrer"
                    className="inline-flex items-center text-white text-sm font-medium hover:text-orange-400 transition-colors"
                  >
                    Play Now <i className="ri-arrow-right-line ml-1"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="https://playfk.com" 
            target="_blank" 
            rel="nofollow noopener noreferrer"
            className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white text-base font-semibold rounded-full hover:from-orange-600 hover:to-red-700 transition-all shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
          >
            View All Games
          </a>
        </div>
      </div>
    </section>
  );
}
