
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
    <footer className="relative py-20 overflow-hidden rounded-t-3xl">
      {/* Enhanced Background with dark navy/charcoal color - matching AI adoption section */}
      <div className="absolute inset-0 -z-10 rounded-t-3xl">
        <div className="w-full h-full bg-gradient-to-b from-slate-900 via-gray-900 to-slate-800 rounded-t-3xl"></div>
        <div className="absolute inset-0 bg-[#1a1a2e] opacity-80 rounded-t-3xl"></div>
        <div 
          className="absolute inset-0 opacity-20 rounded-t-3xl"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(139,92,246,0.1) 1.5px, transparent 1.5px)`,
            backgroundSize: '40px 40px'
          }}
        ></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Company Section */}
        <div className="reveal mb-16">
          <FooterCompanyInfo />
        </div>
        
        {/* Three Column Layout for Links, Services, and Contact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="reveal">
            <FooterLinks 
              title="Quick Links" 
              links={quickLinks} 
              scrollToSection={scrollToSection} 
            />
          </div>
          
          <div className="reveal">
            <FooterServices scrollToSection={scrollToSection} />
          </div>
          
          <div className="reveal">
            <FooterContactInfo />
          </div>
        </div>
        
        <FooterCopyright />
      </div>
      
      <FooterStyles />
    </footer>
  );
};

export default Footer;
