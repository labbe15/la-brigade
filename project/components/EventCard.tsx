import { Calendar, MapPin, Clock, Users, Music, Ticket } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  lineup: string[];
  price: string;
}

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('fr-FR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  return (
    <div className="bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-700 transition-all duration-300 group">
      <div className="lg:flex">
        {/* Image */}
        <div className="lg:w-1/3">
          <div className="relative h-64 lg:h-full">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <span className="inline-block bg-orange-500 text-black px-3 py-1 rounded-full text-sm font-medium">
                {event.price}
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="lg:w-2/3 p-6 lg:p-8">
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-3 group-hover:text-orange-400 transition-colors">
                {event.title}
              </h3>
              
              <div className="flex flex-wrap gap-4 text-gray-400 mb-4">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{formatDate(event.date)}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{event.time}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{event.location}</span>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                {event.description}
              </p>
            </div>

            {/* Lineup */}
            <div className="mb-6">
              <div className="flex items-center space-x-2 mb-3">
                <Music className="w-4 h-4 text-orange-500" />
                <h4 className="font-semibold">Line-up</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {event.lineup.map((artist, index) => (
                  <span
                    key={index}
                    className="bg-zinc-800 text-gray-300 px-3 py-1 rounded-full text-sm"
                  >
                    {artist}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 mt-auto">
              <Button className="bg-orange-500 hover:bg-orange-600 text-black flex-1 btn-glow">
                <Ticket className="w-4 h-4 mr-2" />
                Réserver
              </Button>
              <Button variant="outline" className="border-zinc-700 hover:bg-zinc-800 flex-1">
                Plus d'infos
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}