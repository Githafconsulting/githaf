
import React from 'react';

const FooterCopyright: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="pt-8 mt-8 border-t border-white/20 text-center text-white/70 text-sm">
      <p>© {currentYear} Githaf Consulting. All rights reserved.</p>
      <div className="mt-2 space-x-4">
        <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
        <span>•</span>
        <a href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</a>
      </div>
    </div>
  );
};

export default FooterCopyright;
