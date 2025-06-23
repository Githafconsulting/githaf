
import React from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from './types';
import Button from '../Button';
import { Separator } from '@/components/ui/separator';
import SocialIcons from './SocialIcons';

interface MobileNavigationProps {
  isMenuOpen: boolean;
  closeMenu: () => void;
  scrollToSection: (sectionId: string, event: React.MouseEvent) => void;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ 
  isMenuOpen, 
  closeMenu, 
  scrollToSection 
}) => {
  if (!isMenuOpen) return null;

  return (
    <div className="fixed inset-0 z-40 lg:hidden">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={closeMenu}></div>
      <div className="fixed top-16 left-0 right-0 bg-slate-900/95 backdrop-blur-lg border-b border-slate-700/50">
        <div className="container mx-auto px-4 py-6 space-y-4">
          {/* Menu Links */}
          {navLinks.map((link) => {
            // Handle blog link separately as it goes to a different page
            if (link.name === 'Blog') {
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={closeMenu}
                  className="block px-4 py-3 font-medium text-white hover:bg-white/10 rounded-lg transition-all duration-300"
                >
                  {link.name}
                </Link>
              );
            }
            
            return (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => {
                  if (link.path.startsWith('/#')) {
                    const sectionId = link.path.substring(2);
                    const sectionMappings: { [key: string]: string } = {
                      'our-approach': 'approach'
                    };
                    const targetId = sectionMappings[sectionId] || sectionId;
                    scrollToSection(targetId, e);
                  }
                  closeMenu();
                }}
                className="block px-4 py-3 font-medium text-white hover:bg-white/10 rounded-lg transition-all duration-300"
              >
                {link.name}
              </a>
            );
          })}
          
          <Separator className="bg-slate-600" />
          
          {/* Social Links */}
          <div className="flex justify-center gap-4 py-2">
            <SocialIcons size="md" />
          </div>
          
          <Separator className="bg-slate-600" />
          
          {/* Contact Button */}
          <div className="px-4">
            <a href="#contact" onClick={closeMenu}>
              <Button variant="primary" className="w-full">
                Get Free Consultation
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;
