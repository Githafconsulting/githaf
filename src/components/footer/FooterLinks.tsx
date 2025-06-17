
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface LinkItem {
  name: string;
  path: string;
  id: string | null;
}

interface FooterLinksProps {
  title: string;
  links: LinkItem[];
  scrollToSection: (sectionId: string, event: React.MouseEvent) => void;
}

const FooterLinks: React.FC<FooterLinksProps> = ({ title, links, scrollToSection }) => {
  return (
    <div className="enhanced-card p-6">
      <h4 className="text-lg font-semibold mb-4 text-white">{title}</h4>
      <ul className="space-y-3">
        {links.map((item) => (
          <li key={item.name}>
            <a 
              href={item.path}
              onClick={(e) => item.id && scrollToSection(item.id, e)}
              className="glass rounded-lg p-3 text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300 flex items-center group"
            >
              <ArrowRight size={14} className="mr-3 group-hover:translate-x-1 transition-transform duration-300" />
              <span className="font-medium">{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
