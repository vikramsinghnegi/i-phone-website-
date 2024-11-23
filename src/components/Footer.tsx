import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const footerLinks = {
  shop: ['iPhone', 'Mac', 'iPad', 'Apple Watch'],
  services: ['Apple Music', 'Apple TV+', 'Apple Fitness+', 'iCloud'],
  company: ['Newsroom', 'Careers', 'Investors', 'Ethics'],
  support: ['Help Center', 'Contact Us', 'Community', 'Status']
};

export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-gray-900 font-semibold uppercase mb-4">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-900 transition"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm mb-4 md:mb-0">
              © 2024 Apple Inc. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <SocialLink icon={Facebook} />
              <SocialLink icon={Twitter} />
              <SocialLink icon={Instagram} />
              <SocialLink icon={Youtube} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ icon: Icon }: { icon: React.ElementType }) {
  return (
    <a
      href="#"
      className="text-gray-600 hover:text-gray-900 transition"
    >
      <Icon size={20} />
    </a>
  );
}