
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
    <footer className="bg-[#1A1F2C] pt-16 pb-8 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company info */}
          <FooterCompanyInfo />
          
          {/* Quick links */}
          <FooterLinks 
            title="Quick Links" 
            links={quickLinks} 
            scrollToSection={scrollToSection} 
          />
          
          {/* Services */}
          <FooterServices scrollToSection={scrollToSection} />
          
          {/* Contact */}
          <FooterContactInfo />
        </div>
        
        <FooterCopyright />
      </div>
      
      {/* Adding the CSS styles */}
      <FooterStyles />
    </footer>
  );
};

export default Footer;
