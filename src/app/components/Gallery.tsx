import { useState } from 'react';
import { X } from 'lucide-react';

interface GalleryItem {
  id: number;
  title: string;
  category: 'volunteer' | 'competition';
  image: string;
  description: string;
  date?: string;
  organization?: string;
}

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [filter, setFilter] = useState<'all' | 'volunteer' | 'competition'>('all');

  // Your actual gallery items with real experiences
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: 'South Pacific ICPC Programming Contest',
      category: 'competition',
      image: '/IMG_2626 2.jpg',
      description: 'Participated in South Pacific ICPC Preliminary Contest (Level B) at UNSW Sydney, competing in algorithmic problem-solving and teamwork challenges',
      date: 'Aug 2024',
      organization: 'ICPC - UNSW Sydney'
    },
    {
      id: 2,
      title: 'FoodHub Volunteer',
      category: 'volunteer',
      image: '/IMG_7911.JPG',
      description: 'Volunteered at FoodHub to support community food distribution and help families in need',
      date: '2024',
      organization: 'FoodHub Sydney'
    },
    {
      id: 3,
      title: 'FoodHub Community Service',
      category: 'volunteer',
      image: '/IMG_7920 2.jpg',
      description: 'Continued volunteer work at FoodHub, organizing food packages and assisting community members',
      date: '2024',
      organization: 'FoodHub Sydney'
    },
    {
      id: 4,
      title: 'Sydney New Year\'s Eve Fireworks Volunteer',
      category: 'volunteer',
      image: '/IMG_7916.jpg',
      description: 'Volunteered at Sydney\'s iconic New Year\'s Eve fireworks celebration, assisting with crowd management and event coordination',
      date: 'Dec 2023 - Jan 2024',
      organization: 'City of Sydney'
    },
    {
      id: 5,
      title: 'UNSW Choir - International Student Reward Night',
      category: 'volunteer',
      image: '/IMG_7915.PNG',
      description: 'Performed with UNSW Choir at Study NSW International Student Reward Night celebration',
      date: '2024',
      organization: 'Study NSW & UNSW'
    }
  ];

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <section id="gallery" className="mb-12">
      <h1 className="text-3xl md:text-4xl mb-2">Pixels & Passion</h1>
      <div className="w-16 h-1 bg-white mb-6"></div>
      <p className="text-gray-400 mb-10">A visual journey through my volunteer work and competition achievements</p>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 mb-8">
        <button
          onClick={() => setFilter('all')}
          className={`px-5 py-2 rounded-lg transition-all ${
            filter === 'all'
              ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30'
              : 'bg-[#1a1a1a] text-gray-400 hover:bg-[#252525] hover:text-white'
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter('volunteer')}
          className={`px-5 py-2 rounded-lg transition-all ${
            filter === 'volunteer'
              ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30'
              : 'bg-[#1a1a1a] text-gray-400 hover:bg-[#252525] hover:text-white'
          }`}
        >
          Volunteer Work
        </button>
        <button
          onClick={() => setFilter('competition')}
          className={`px-5 py-2 rounded-lg transition-all ${
            filter === 'competition'
              ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30'
              : 'bg-[#1a1a1a] text-gray-400 hover:bg-[#252525] hover:text-white'
          }`}
        >
          Competitions
        </button>
      </div>

      {/* Gallery Grid - Masonry Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            onClick={() => setSelectedImage(item)}
            className={`relative group cursor-pointer overflow-hidden rounded-xl bg-[#1a1a1a] border border-gray-800 hover:border-cyan-500 transition-all duration-300 ${
              index % 5 === 0 ? 'md:row-span-2' : 'md:row-span-1'
            }`}
          >
            {/* Image */}
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                {/* Category Badge */}
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 ${
                  item.category === 'volunteer' 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                    : 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                }`}>
                  {item.category === 'volunteer' ? '🤝 Volunteer' : '🏆 Competition'}
                </span>
                
                <h3 className="text-white font-medium text-lg mb-1">{item.title}</h3>
                <p className="text-gray-300 text-sm mb-2">{item.description}</p>
                
                {item.date && (
                  <p className="text-cyan-400 text-xs">{item.date} • {item.organization}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <div 
            className="max-w-4xl w-full bg-[#1a1a1a] rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <div className="aspect-video w-full overflow-hidden bg-black">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Details */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${
                    selectedImage.category === 'volunteer' 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                      : 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                  }`}>
                    {selectedImage.category === 'volunteer' ? '🤝 Volunteer Work' : '🏆 Competition'}
                  </span>
                  <h2 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h2>
                  <p className="text-gray-400">{selectedImage.description}</p>
                </div>
              </div>

              {(selectedImage.date || selectedImage.organization) && (
                <div className="border-t border-gray-800 pt-4 flex flex-wrap gap-4 text-sm">
                  {selectedImage.date && (
                    <div>
                      <span className="text-gray-500">Date:</span>
                      <span className="text-cyan-400 ml-2">{selectedImage.date}</span>
                    </div>
                  )}
                  {selectedImage.organization && (
                    <div>
                      <span className="text-gray-500">Organization:</span>
                      <span className="text-white ml-2">{selectedImage.organization}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
