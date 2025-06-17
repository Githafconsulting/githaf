
import React from 'react';

const FooterCopyright: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="pt-8 mt-8 border-t border-white/10">
      <div className="enhanced-card p-6 text-center">
        <p className="text-gray-300 text-sm mb-3">© {currentYear} Githaf Consulting. All rights reserved.</p>
        <div className="flex justify-center gap-6 text-sm">
          <a href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors hover:underline">
            Privacy Policy
          </a>
          <span className="text-gray-500">•</span>
          <a href="/terms-of-service" className="text-gray-300 hover:text-white transition-colors hover:underline">
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterCopyright;
