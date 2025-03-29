
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
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
                { name: 'Home', path: '/' },
                { name: 'About', path: '/#about' },
                { name: 'Services', path: '/#services' },
                { name: 'Contact', path: '/#contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path}
                    className="text-white/70 hover:text-white transition-colors flex items-center"
                  >
                    <ArrowRight size={14} className="mr-2" />
                    {item.name}
                  </Link>
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
                  <Link 
                    to="/#services"
                    className="text-white/70 hover:text-white transition-colors flex items-center"
                  >
                    <ArrowRight size={14} className="mr-2" />
                    {item}
                  </Link>
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
              <p>
                <a href="tel:+971562078508" className="hover:text-white transition-colors">
                  +971 562078508
                </a>
              </p>
              <p>
                <a href="mailto:gravitasitconsulting@gmail.com" className="hover:text-white transition-colors">
                  gravitasitconsulting@gmail.com
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-white/20 text-center text-white/70 text-sm">
          <p>© {currentYear} Githaf Consulting. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
