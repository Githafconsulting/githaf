
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';
import { useIsMobile } from '@/hooks/use-mobile';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/#services' },
  { name: 'About', path: '/#about' },
  { name: 'Contact', path: '/#contact' },
];

const lightBackgroundPages = [
  '/web-development',
  '/website-audit',
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();
  
  const hasLightBackground = lightBackgroundPages.includes(location.pathname);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: string, event: React.MouseEvent) => {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'glass border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Enhanced Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-3 font-bold text-2xl md:text-3xl group"
          >
            <Logo size="md" className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
            <span className="gradient-text group-hover:text-white transition-all duration-300">
              Githaf Consulting
            </span>
          </Link>
          
          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => {
                  if (link.path.startsWith('/#')) {
                    scrollToSection(link.path.substring(2), e);
                  }
                }}
                className="px-4 py-2 text-sm font-semibold text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 relative group"
              >
                {link.name}
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#6b2c91] to-[#16213e] transition-all duration-300 group-hover:w-full group-hover:left-0"></div>
              </a>
            ))}
          </div>
          
          {/* Enhanced Mobile Menu Button */}
          <button
            className="md:hidden p-3 text-white hover:bg-white/10 rounded-lg transition-all duration-300"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Enhanced Mobile Navigation */}
      {isMobile && isMenuOpen && (
        <div className="md:hidden glass border-t border-white/10">
          <div className="container mx-auto px-4 py-6 flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => {
                  if (link.path.startsWith('/#')) {
                    scrollToSection(link.path.substring(2), e);
                  }
                  closeMenu();
                }}
                className="px-4 py-3 font-semibold text-white hover:bg-white/10 rounded-lg transition-all duration-300 text-center"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
