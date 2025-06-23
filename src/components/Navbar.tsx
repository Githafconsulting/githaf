
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { Separator } from '@/components/ui/separator';
import DesktopNavigation from './navbar/DesktopNavigation';
import MobileNavigation from './navbar/MobileNavigation';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
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
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-slate-900/95 backdrop-blur-lg border-b border-slate-700/50' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center gap-3 font-bold text-xl md:text-2xl group"
            >
              <Logo size="md" className="flex-shrink-0 group-hover:scale-105 transition-transform duration-300" />
              <span className="text-white group-hover:text-slate-300 transition-colors duration-300">
                Githaf Consulting
              </span>
            </Link>
            
            {/* Desktop Navigation */}
            <DesktopNavigation scrollToSection={scrollToSection} />
            
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-all duration-300"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Light divider */}
        <Separator className="bg-slate-700/30" />
      </nav>
      
      {/* Mobile Navigation */}
      {isMobile && (
        <MobileNavigation 
          isMenuOpen={isMenuOpen}
          closeMenu={closeMenu}
          scrollToSection={scrollToSection}
        />
      )}
    </>
  );
};

export default Navbar;
