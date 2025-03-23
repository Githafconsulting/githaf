
import React from 'react';

const companies = [
  {
    id: 1,
    name: 'HSBC',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/HSBC_logo_%282018%29.svg/1200px-HSBC_logo_%282018%29.svg.png',
  },
  {
    id: 2,
    name: 'Royal Bank of Scotland',
    logo: 'https://logos-world.net/wp-content/uploads/2021/02/Royal-Bank-of-Scotland-Logo.png',
  },
  {
    id: 3,
    name: 'LuupFX',
    logo: 'https://assets-global.website-files.com/60792fe0ef5e296ef9ad9e6a/612f3851b2701e5a7ef14a27_luupfx-logo.svg',
  },
  {
    id: 4,
    name: 'Paypoint',
    logo: 'https://seeklogo.com/images/P/paypoint-logo-95C891229A-seeklogo.com.png',
  },
];

const CompanyTicker: React.FC = () => {
  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <h3 className="text-center mb-8 text-2xl">Trusted By Leading Companies</h3>
        
        <div className="relative">
          {/* Gradient overlays for smooth edge fade */}
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10"></div>
          
          {/* Ticker - first instance */}
          <div className="ticker-track flex items-center space-x-16 animate-marquee">
            {companies.map((company) => (
              <div key={company.id} className="ticker-item flex-shrink-0">
                <img 
                  src={company.logo} 
                  alt={company.name} 
                  className="h-12 sm:h-14 w-auto object-contain"
                />
              </div>
            ))}
            {/* Duplicate companies for seamless looping */}
            {companies.map((company) => (
              <div key={`dup-${company.id}`} className="ticker-item flex-shrink-0">
                <img 
                  src={company.logo} 
                  alt={company.name} 
                  className="h-12 sm:h-14 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyTicker;
