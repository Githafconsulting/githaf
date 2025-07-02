
import React from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from './types';
import Button from '../Button';
import { Separator } from '@/components/ui/separator';
import SocialIcons from './SocialIcons';

interface DesktopNavigationProps {
  scrollToSection: (sectionId: string, event: React.MouseEvent) => void;
}

const DesktopNavigation: React.FC<DesktopNavigationProps> = ({ scrollToSection }) => {
  return (
    <div className="hidden lg:flex lg:items-center lg:gap-8">
      {/* Menu Links */}
      <div className="flex items-center gap-1">
        {navLinks.map((link) => {
          // Handle blog link separately as it goes to a different page
          if (link.name === 'Blog') {
            return (
              <Link
                key={link.name}
                to={link.path}
                className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
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
              }}
              className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
            >
              {link.name}
            </a>
          );
        })}
      </div>

      <Separator orientation="vertical" className="h-6 bg-slate-600" />

      {/* Social Media Icons */}
      <SocialIcons size="sm" />

      <Separator orientation="vertical" className="h-6 bg-slate-600" />

      {/* Contact Button */}
      <button 
        onClick={(e) => scrollToSection('contact', e)}
        className="px-4 py-2 text-sm font-medium bg-purple-600 text-white hover:bg-purple-700 rounded-lg transition-all duration-300"
      >
        Get Free Consultation
      </button>
    </div>
  );
};

export default DesktopNavigation;
