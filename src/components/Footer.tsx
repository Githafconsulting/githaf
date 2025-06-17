
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
      {/* Blended background - seamless continuation */}
      <div className="absolute inset-0 -z-10">
        {/* Base black background */}
        <div className="w-full h-full bg-black"></div>
        
        {/* White dotted pattern overlay - matching other sections */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        ></div>
        
        {/* Subtle gradient overlay for footer distinction */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Company info section - full width */}
        <div className="reveal mb-16">
          <FooterCompanyInfo />
        </div>
        
        {/* Links and Services in horizontal layout */}
        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          <div className="reveal flex-1">
            <FooterLinks 
              title="Quick Links" 
              links={quickLinks} 
              scrollToSection={scrollToSection} 
            />
          </div>
          
          <div className="reveal flex-1">
            <FooterServices scrollToSection={scrollToSection} />
          </div>
        </div>
        
        {/* Contact section - full width */}
        <div className="reveal mb-12">
          <FooterContactInfo />
        </div>
        
        <FooterCopyright />
      </div>
      
      <FooterStyles />
    </footer>
  );
};

export default Footer;
