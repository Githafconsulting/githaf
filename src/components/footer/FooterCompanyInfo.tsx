
import React from 'react';

const FooterCompanyInfo: React.FC = () => {
  return (
    <div className="text-center max-w-4xl mx-auto">
      <h3 className="text-3xl md:text-4xl font-display font-bold mb-6 text-white">Githaf Consulting</h3>
      <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed max-w-2xl mx-auto">
        Preparing and transforming businesses through innovative AI and digital solutions.
      </p>
      <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10">
        <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-green-500 rounded-full animate-pulse"></div>
        <span className="text-gray-300 font-medium">Ready to transform your business?</span>
      </div>
    </div>
  );
};

export default FooterCompanyInfo;
