import EventCard from '@/components/EventCard';
import { Calendar, MapPin, Clock } from 'lucide-react';

const events = [
  {
    id: 1,
    title: "Warehouse Sessions #12",
    date: "2025-02-15",
    time: "23:00",
    location: "Warehouse 404, Paris",
    description: "Une soirée techno industrielle dans un cadre authentique. Line-up exceptionnel avec des artistes de la scène berlinoise.",
    image: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=800",
    lineup: ["Max Richter", "Anna V", "Tech Noir"],
    price: "20€"
  },
  {
    id: 2,
    title: "Underground Vibes",
    date: "2025-03-02",
    time: "22:30",
    location: "Club Basement, Lyon",
    description: "Exploration des sonorités les plus profondes de la techno. Une nuit dédiée aux puristes du genre.",
    image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800",
    lineup: ["Dark Matter", "Pulse", "Echo Chamber"],
    price: "15€"
  },
  {
    id: 3,
    title: "Berlin Connection",
    date: "2025-03-20",
    time: "23:30",
    location: "Factory Club, Marseille",
    description: "Invités spéciaux directement de Berlin pour une nuit inoubliable. L'esprit de Berghain à Marseille.",
    image: "https://images.pexels.com/photos/2406949/pexels-photo-2406949.jpeg?auto=compress&cs=tinysrgb&w=800",
    lineup: ["Klaus Weber", "Techno Berlin", "La Brigade"],
    price: "25€"
  },
  {
    id: 4,
    title: "Spring Rave 2025",
    date: "2025-04-05",
    time: "20:00",
    location: "Outdoor Location, Toulouse",
    description: "Premier événement outdoor de l'année. Festival d'une journée avec multiple scènes et artistes internationaux.",
    image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800",
    lineup: ["International Artists", "Local Heroes", "Surprise Acts"],
    price: "35€"
  }
];

export default function Events() {
  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Header */}
      <section className="py-16 px-4 bg-gradient-to-b from-zinc-950 to-black">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Prochains Événements
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez notre programmation et réservez votre place pour les soirées 
            les plus intenses de la scène électronique française.
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
          
          {/* Load More */}
          <div className="text-center mt-16">
            <button className="px-8 py-4 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 rounded-lg transition-colors">
              Charger plus d'événements
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 px-4 bg-zinc-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ne ratez aucun événement
          </h2>
          <p className="text-gray-300 mb-8">
            Inscrivez-vous à notre newsletter pour être informé en avant-première 
            de nos prochaines soirées.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Votre email"
              className="flex-1 px-4 py-3 bg-black border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-black rounded-lg transition-colors btn-glow">
              S'inscrire
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}