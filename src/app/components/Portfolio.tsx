interface PortfolioItem {
  liveUrl?: string;
  githubUrl?: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
}

export function Portfolio() {
  const portfolioItems: PortfolioItem[] = [
    {
      liveUrl: 'note-frontend-ashy.vercel.app',
      githubUrl: 'github.com/ZephyrDeen/note',
      title: 'GeoNote - 3D Travel Journal',
      description: 'A spatial note-taking app that lets you pin your thoughts to locations on an interactive 3D globe.',
      image: '/geonote.jpg',
      tech: ['React', 'Three.js', 'Express.js', 'PostgreSQL', 'Prisma']
    },
    {
      githubUrl: 'github.com/ZephyrDeen/RentWeb',
      title: 'RentWeb - Property Management System',
      description: 'A modern full-stack property management system with smart ticket management, Stripe payments, and dual-layer caching (React Query + Redis).',
      image: 'https://images.unsplash.com/photo-1555421689-d68471e189f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Redis', 'Stripe']
    }
  ];

  return (
    <section id="portfolio" className="mb-12">
      <h1 className="text-3xl md:text-4xl mb-2">Creative Showcase</h1>
      <div className="w-16 h-1 bg-white mb-10"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {portfolioItems.map((item, index) => (
          <div
            key={index}
            className="bg-[#0a0a0a] rounded-lg overflow-hidden group hover:ring-2 hover:ring-gray-700 transition-all"
          >
            <div className="aspect-video overflow-hidden bg-gray-900">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-5">
              {/* Links */}
              <div className="flex flex-wrap gap-2 mb-3">
                {item.liveUrl && (
                  <a
                    href={`https://${item.liveUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    🌐 Live Demo
                  </a>
                )}
                {item.githubUrl && (
                  <a
                    href={`https://${item.githubUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-gray-400 hover:text-white transition-colors"
                  >
                    ⭐ GitHub
                  </a>
                )}
              </div>

              <h3 className="text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-3">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-[#1a1a1a] text-xs rounded text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
