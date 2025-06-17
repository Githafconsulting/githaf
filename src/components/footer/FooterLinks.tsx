
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
    <div className="text-center lg:text-left">
      <h4 className="text-xl font-semibold mb-6 text-white">{title}</h4>
      <div className="flex flex-wrap justify-center lg:justify-start gap-4">
        {links.map((item) => (
          <a 
            key={item.name}
            href={item.path}
            onClick={(e) => item.id && scrollToSection(item.id, e)}
            className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 border border-white/10 group"
          >
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
            <span className="font-medium">{item.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default FooterLinks;
