import ContactForm from '@/components/ContactForm';
import SocialLinks from '@/components/SocialLinks';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Header */}
      <section className="py-16 px-4 bg-gradient-to-b from-zinc-950 to-black">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Contact
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Une question, une proposition, ou envie de rejoindre l'aventure ? 
            Contactez-nous et rejoignez la Brigade.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Restons connectés</h2>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-orange-500 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-300">contact@labrigade.fr</p>
                    <p className="text-gray-300">booking@labrigade.fr</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-orange-500 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Localisation</h3>
                    <p className="text-gray-300">Basé en France</p>
                    <p className="text-gray-300">Événements dans toute l'Europe</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-orange-500 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Booking</h3>
                    <p className="text-gray-300">+33 1 23 45 67 89</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-semibold mb-6">Suivez-nous</h3>
                <SocialLinks />
              </div>

              {/* Business Hours */}
              <div className="mt-12 p-6 bg-zinc-950 rounded-lg border border-zinc-800">
                <h3 className="text-xl font-semibold mb-4">Disponibilités</h3>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>Lundi - Vendredi</span>
                    <span>10h - 18h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Weekend</span>
                    <span>Sur rendez-vous</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Événements</span>
                    <span>22h - 6h</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}