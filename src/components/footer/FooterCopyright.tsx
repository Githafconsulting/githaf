
import React from 'react';

const FooterCopyright: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="pt-8 mt-8 border-t border-white/20">
      <div className="enhanced-card p-6 text-center">
        <p className="text-white/70 text-sm mb-3">© {currentYear} Githaf Consulting. All rights reserved.</p>
        <div className="flex justify-center gap-6 text-sm">
          <a href="/privacy-policy" className="text-white/70 hover:text-white transition-colors hover:underline">
            Privacy Policy
          </a>
          <span className="text-white/30">•</span>
          <a href="/terms-of-service" className="text-white/70 hover:text-white transition-colors hover:underline">
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterCopyright;
