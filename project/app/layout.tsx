import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'La Brigade - Collectif Musique Électronique',
  description: 'La Brigade, collectif français de musique électronique inspiré de la scène techno berlinoise. Découvrez nos événements, galerie et rejoignez la communauté.',
  keywords: 'techno, électronique, Berlin, collectif, musique, événements, DJ, rave',
  openGraph: {
    title: 'La Brigade - Collectif Musique Électronique',
    description: 'L\'énergie brute de la nuit. Collectif français inspiré de la scène techno berlinoise.',
    type: 'website',
    locale: 'fr_FR',
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MusicGroup",
              "name": "La Brigade",
              "genre": "Electronic/Techno",
              "description": "Collectif français de musique électronique inspiré de la scène techno berlinoise",
              "foundingLocation": "France"
            })
          }}
        />
      </head>
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}