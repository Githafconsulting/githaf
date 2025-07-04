
import React from 'react';

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
      <h4 className="text-xl font-semibold mb-6 text-white">{title}</h4>
      <div className="space-y-3">
        {links.map((item) => (
          <a 
            key={item.name}
            href={item.path}
            onClick={(e) => item.id && scrollToSection(item.id, e)}
            className="block text-gray-300 hover:text-white transition-colors duration-300"
          >
            <span className="font-medium">{item.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default FooterLinks;
