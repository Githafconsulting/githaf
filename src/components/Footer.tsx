
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  // Function to handle smooth scrolling to section
  const scrollToSection = (sectionId: string, event: React.MouseEvent) => {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <footer className="bg-[#1A1F2C] pt-16 pb-8 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company info */}
          <div>
            <h3 className="text-xl font-display font-bold mb-4 text-[#ea33f7]">Githaf Consulting</h3>
            <p className="text-white/80 mb-6">
              Preparing and transforming businesses through innovative AI and digital solutions.
            </p>
          </div>
          
          {/* Quick links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/', id: null },
                { name: 'About', path: '/#about', id: 'about' },
                { name: 'Services', path: '/#services', id: 'services' },
                { name: 'Contact', path: '/#contact', id: 'contact' }
              ].map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.path}
                    onClick={(e) => item.id && scrollToSection(item.id, e)}
                    className="text-white/70 hover:text-white transition-colors flex items-center"
                  >
                    <ArrowRight size={14} className="mr-2" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Our Services</h4>
            <ul className="space-y-3">
              {[
                'AI Agents', 
                'Website Development', 
                'Mobile App Development', 
                'Payments & Fintech Solutions', 
                'Automated Workflow'
              ].map((item) => (
                <li key={item}>
                  <a 
                    href="/#services"
                    onClick={(e) => scrollToSection('services', e)}
                    className="text-white/70 hover:text-white transition-colors flex items-center"
                  >
                    <ArrowRight size={14} className="mr-2" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
            <address className="not-italic text-white/80 space-y-3">
              <p>Kirby Le Soken, UK</p>
              <p>Damac Hills 2, UAE</p>
              <p className="select-none">
                UK: <span className="user-select-none">+447530551944</span>
              </p>
              <p className="select-none">
                UAE: <span className="user-select-none">+971562078508</span>
              </p>
              <p>
                <a href="mailto:info@githafconsulting.com" className="hover:text-white transition-colors">
                  info@githafconsulting.com
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-white/20 text-center text-white/70 text-sm">
          <p>© {currentYear} Githaf Consulting. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
