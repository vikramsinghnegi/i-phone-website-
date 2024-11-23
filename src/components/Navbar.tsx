import { Menu, Search, ShoppingBag } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-12 md:h-16">
          <div className="flex items-center">
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu size={24} />
            </button>
            <a href="/" className="text-white font-semibold text-2xl ml-4 md:ml-0">
              iPhone
            </a>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#specs">Tech Specs</NavLink>
            <NavLink href="#compare">Compare</NavLink>
            <NavLink href="#buy">Buy</NavLink>
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-white hover:text-gray-300 transition">
              <Search size={20} />
            </button>
            <button className="text-white hover:text-gray-300 transition">
              <ShoppingBag size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md">
          <div className="px-4 py-2 space-y-2">
            <MobileNavLink href="#features">Features</MobileNavLink>
            <MobileNavLink href="#specs">Tech Specs</MobileNavLink>
            <MobileNavLink href="#compare">Compare</MobileNavLink>
            <MobileNavLink href="#buy">Buy</MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a 
      href={href}
      className="text-white hover:text-gray-300 transition text-sm font-medium"
    >
      {children}
    </a>
  );
}

function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a 
      href={href}
      className="block text-white hover:text-gray-300 transition py-2 text-base font-medium"
    >
      {children}
    </a>
  );
}