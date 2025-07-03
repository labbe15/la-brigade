import Hero from '@/components/Hero';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Calendar, Users, Music } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* About Section */}
      <section className="py-24 px-4 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                L'énergie brute de la nuit
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                La Brigade incarne l'esprit authentique de la scène techno berlinoise, 
                transplantée dans l'hexagone. Nous créons des expériences sonores 
                immersives qui transcendent les frontières entre l'art et la fête.
              </p>
              <div className="grid grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <Music className="w-8 h-8 mx-auto mb-2 text-orange-500" />
                  <p className="text-sm text-gray-400">Sons Underground</p>
                </div>
                <div className="text-center">
                  <Users className="w-8 h-8 mx-auto mb-2 text-orange-500" />
                  <p className="text-sm text-gray-400">Communauté</p>
                </div>
                <div className="text-center">
                  <Calendar className="w-8 h-8 mx-auto mb-2 text-orange-500" />
                  <p className="text-sm text-gray-400">Événements</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-orange-900/20 to-black rounded-2xl p-8 border border-zinc-800">
                <div className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 bg-orange-500/20 rounded-full flex items-center justify-center border border-orange-500/30">
                      <Music className="w-10 h-10 text-orange-500" />
                    </div>
                    <p className="text-lg font-semibold">Depuis 2020</p>
                    <p className="text-gray-400">Plus de 50 événements</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Rejoignez la communauté
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Découvrez nos prochains événements et plongez dans l'univers 
            de la techno underground française.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/events">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-black px-8 py-6 text-lg btn-glow">
                Voir les événements
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/gallery">
              <Button variant="outline" size="lg" className="border-zinc-700 text-white hover:bg-zinc-900 px-8 py-6 text-lg">
                Galerie
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}