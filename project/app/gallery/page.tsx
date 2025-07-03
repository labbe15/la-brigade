import GalleryGrid from '@/components/GalleryGrid';

const galleryItems = [
  {
    id: 1,
    type: 'image',
    src: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Warehouse Sessions #11',
    caption: 'Warehouse Sessions #11 - Paris',
    date: '2024-12-15'
  },
  {
    id: 2,
    type: 'image',
    src: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Underground Vibes',
    caption: 'Underground Vibes - Lyon',
    date: '2024-11-28'
  },
  {
    id: 3,
    type: 'image',
    src: 'https://images.pexels.com/photos/2406949/pexels-photo-2406949.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Berlin Connection',
    caption: 'Berlin Connection - Marseille',
    date: '2024-11-10'
  },
  {
    id: 4,
    type: 'image',
    src: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Autumn Rave',
    caption: 'Autumn Rave 2024 - Toulouse',
    date: '2024-10-22'
  },
  {
    id: 5,
    type: 'image',
    src: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Dark Sessions',
    caption: 'Dark Sessions - Bordeaux',
    date: '2024-10-05'
  },
  {
    id: 6,
    type: 'image',
    src: 'https://images.pexels.com/photos/2833037/pexels-photo-2833037.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Techno Night',
    caption: 'Techno Night - Lille',
    date: '2024-09-18'
  },
  {
    id: 7,
    type: 'image',
    src: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Summer Closing',
    caption: 'Summer Closing 2024 - Nice',
    date: '2024-09-02'
  },
  {
    id: 8,
    type: 'image',
    src: 'https://images.pexels.com/photos/2240763/pexels-photo-2240763.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Industrial Sounds',
    caption: 'Industrial Sounds - Strasbourg',
    date: '2024-08-20'
  }
];

export default function Gallery() {
  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Header */}
      <section className="py-16 px-4 bg-gradient-to-b from-zinc-950 to-black">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Galerie
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Revivez l'intensité de nos événements à travers nos photos et vidéos. 
            Chaque image capture l'essence de la nuit et l'énergie de la communauté.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <GalleryGrid items={galleryItems} />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-zinc-950">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-orange-500 mb-2">50+</div>
              <p className="text-gray-400">Événements</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-500 mb-2">15</div>
              <p className="text-gray-400">Villes</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-500 mb-2">5000+</div>
              <p className="text-gray-400">Participants</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-500 mb-2">100+</div>
              <p className="text-gray-400">Artistes</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}