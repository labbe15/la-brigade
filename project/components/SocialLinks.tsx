import { Instagram, Music, Mail, Globe } from 'lucide-react';

const socialLinks = [
  {
    name: 'Instagram',
    url: 'https://instagram.com/labrigade_official',
    icon: Instagram,
    color: 'hover:text-pink-500'
  },
  {
    name: 'SoundCloud',
    url: 'https://soundcloud.com/labrigade',
    icon: Music,
    color: 'hover:text-orange-500'
  },
  {
    name: 'Email',
    url: 'mailto:contact@labrigade.fr',
    icon: Mail,
    color: 'hover:text-blue-500'
  },
  {
    name: 'Website',
    url: 'https://labrigade.fr',
    icon: Globe,
    color: 'hover:text-green-500'
  }
];

export default function SocialLinks() {
  return (
    <div className="flex space-x-4">
      {socialLinks.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 rounded-lg transition-all duration-300 text-gray-400 ${link.color}`}
            aria-label={link.name}
          >
            <Icon className="w-5 h-5" />
          </a>
        );
      })}
    </div>
  );
}