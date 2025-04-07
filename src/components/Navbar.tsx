import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';
import { useIsMobile } from '@/hooks/use-mobile';
import { Menu, X, Calendar, Briefcase, Calculator } from 'lucide-react';
import Logo from './Logo';

// Navbar links configuration
const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/#services' },
  { name: 'Projects', path: '/projects' },
  { name: 'Custom Quote', path: '/custom-quote-generator' },
  { name: 'About', path: '/#about' },
  { name: 'Contact', path: '/#contact' },
];

// Pages with light backgrounds that need dark text
const lightBackgroundPages = [
  '/web-development',
  '/website-audit',
  '/custom-quote-generator',
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();
  
  // Check if current page has a light background
  const hasLightBackground = lightBackgroundPages.includes(location.pathname);
  
  // Handle scroll event to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Close mobile menu when clicking a link
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Function to handle smooth scrolling to section
  const scrollToSection = (sectionId: string, event: React.MouseEvent) => {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    }
  };

  // Determine text color based on scroll state and page background
  const textColor = isScrolled 
    ? 'text-foreground' 
    : hasLightBackground 
      ? 'text-foreground' 
      : 'text-white';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo with company name */}
          <Link 
            to="/" 
            className="flex items-center gap-2 font-bold text-3xl"
          >
            <Logo size="md" className="flex-shrink-0" />
            <span style={{ color: '#ea33f7' }}>Githaf Consulting</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => {
                  if (link.path.startsWith('/#')) {
                    scrollToSection(link.path.substring(2), e);
                  }
                }}
                className={`px-4 py-2 text-sm font-bold hover:opacity-80 transition-colors ${textColor}`}
              >
                {link.name}
              </a>
            ))}
            
            <Link to="/booking" className="ml-2">
              <Button variant="primary" size="sm" icon={<Calendar className="h-4 w-4" />}>
                Book a Consultation
              </Button>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 focus:outline-none transition-colors ${
              isScrolled || hasLightBackground ? 'text-foreground' : 'text-muted-foreground'
            }`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMobile && isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b shadow-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-2">
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
                className="px-4 py-3 font-bold hover:bg-accent/50 rounded-md transition-colors text-foreground"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 pb-1">
              <Link to="/booking" onClick={closeMenu} className="block w-full">
                <Button variant="primary" className="w-full" icon={<Calendar className="h-4 w-4" />}>
                  Book a Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
