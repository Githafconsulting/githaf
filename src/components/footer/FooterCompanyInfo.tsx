
import React from 'react';

const FooterCompanyInfo: React.FC = () => {
  return (
    <div className="enhanced-card p-6">
      <h3 className="text-xl font-display font-bold mb-4 gradient-text">Githaf Consulting</h3>
      <p className="text-white/80 mb-6 leading-relaxed">
        Preparing and transforming businesses through innovative AI and digital solutions.
      </p>
      <div className="glass rounded-lg p-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 bg-gradient-to-r from-[#6b2c91] to-[#16213e] rounded-full animate-pulse"></div>
          <span className="text-white/70 text-sm">Ready to transform your business?</span>
        </div>
      </div>
    </div>
  );
};

export default FooterCompanyInfo;
