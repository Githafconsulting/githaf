
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
    <div>
      <h4 className="text-lg font-semibold mb-4 text-white">{title}</h4>
      <ul className="space-y-3">
        {links.map((item) => (
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
  );
};

export default FooterLinks;
