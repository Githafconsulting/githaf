
import React from 'react';
import FooterCompanyInfo from './footer/FooterCompanyInfo';
import FooterLinks from './footer/FooterLinks';
import FooterServices from './footer/FooterServices';
import FooterContactInfo from './footer/FooterContactInfo';
import FooterCopyright from './footer/FooterCopyright';
import FooterStyles from './footer/FooterStyles';

const Footer: React.FC = () => {
  // Function to handle smooth scrolling to section
  const scrollToSection = (sectionId: string, event: React.MouseEvent) => {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const quickLinks = [
    { name: 'Home', path: '/', id: null },
    { name: 'About', path: '/#about', id: 'about' },
    { name: 'Services', path: '/#services', id: 'services' },
    { name: 'Contact', path: '/#contact', id: 'contact' }
  ];
  
  return (
    <footer className="relative py-16 overflow-hidden">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#16213e] to-[#6b2c91]/30"></div>
      
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 glass-dark"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company info */}
          <div className="reveal">
            <FooterCompanyInfo />
          </div>
          
          {/* Quick links */}
          <div className="reveal">
            <FooterLinks 
              title="Quick Links" 
              links={quickLinks} 
              scrollToSection={scrollToSection} 
            />
          </div>
          
          {/* Services */}
          <div className="reveal">
            <FooterServices scrollToSection={scrollToSection} />
          </div>
          
          {/* Contact */}
          <div className="reveal">
            <FooterContactInfo />
          </div>
        </div>
        
        <FooterCopyright />
      </div>
      
      {/* Adding the CSS styles */}
      <FooterStyles />
    </footer>
  );
};

export default Footer;
