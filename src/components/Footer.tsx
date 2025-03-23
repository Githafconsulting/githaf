
import React from 'react';
import { ArrowRight, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company info */}
          <div>
            <h3 className="text-xl font-display font-bold mb-4">TechTransform</h3>
            <p className="text-muted-foreground mb-6">
              Transforming businesses through innovative digital solutions and strategic consulting.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={16} />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Case Studies', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center"
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
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-3">
              {[
                'Digital Strategy', 
                'Technology Implementation', 
                'Data Analytics', 
                'Digital Marketing', 
                'Process Optimization'
              ].map((item) => (
                <li key={item}>
                  <a 
                    href="#services"
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center"
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
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <address className="not-italic text-muted-foreground space-y-3">
              <p>123 Innovation Street</p>
              <p>San Francisco, CA 94103</p>
              <p>United States</p>
              <p className="mt-4">
                <a href="tel:+15551234567" className="hover:text-primary transition-colors">
                  +1 (555) 123-4567
                </a>
              </p>
              <p>
                <a href="mailto:info@techtransform.com" className="hover:text-primary transition-colors">
                  info@techtransform.com
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-border/50 text-center text-muted-foreground text-sm">
          <p>© {currentYear} TechTransform. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
