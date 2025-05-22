
import React from 'react';

const FooterContactInfo: React.FC = () => {
  return (
    <div>
      <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
      <address className="not-italic text-white/80 space-y-3">
        <p>Presence: UAE, UK</p>
        <p>
          <a href="mailto:info@githafconsulting.com" className="hover:text-white transition-colors">
            info@githafconsulting.com
          </a>
        </p>
      </address>
    </div>
  );
};

export default FooterContactInfo;
