
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#5022b8] pt-16 pb-8 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company info */}
          <div>
            <h3 className="text-xl font-display font-bold mb-4 text-white">Githaf Consulting</h3>
            <p className="text-white/80 mb-6">
              Transforming businesses through innovative AI and digital solutions and strategic consulting.
            </p>
          </div>
          
          {/* Quick links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Case Studies', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-white/70 hover:text-white transition-colors flex items-center"
                  >
                    <ArrowRight size={14} className="mr-2" />
                    {item}
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
                'AI Integration', 
                'Digital Strategy', 
                'Technology Implementation', 
                'Data Analytics', 
                'Process Optimization'
              ].map((item) => (
                <li key={item}>
                  <a 
                    href="#services"
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
              <p className="mt-4">
                <a href="tel:+447530551944" className="hover:text-white transition-colors">
                  +44 7530551944
                </a>
              </p>
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
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
