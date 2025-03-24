
import React from 'react';

const companies = [
  {
    id: 1,
    name: 'Al Ghurair',
    logo: '/lovable-uploads/d246c202-fb81-4e58-97c1-eb6d5daf7fcd.png',
  },
  {
    id: 2,
    name: 'HSBC',
    logo: '/lovable-uploads/91979d71-d4f0-4e41-9257-ca9f9dedb627.png',
  },
  {
    id: 3,
    name: 'Moody\'s Analytics',
    logo: '/lovable-uploads/c359da7c-103f-4724-b144-559561f9d892.png',
  },
  {
    id: 4,
    name: 'RBS',
    logo: '/lovable-uploads/4f33ade9-2c85-4b95-b1d7-4e7399575ab1.png',
  },
  {
    id: 5,
    name: 'PayPoint',
    logo: '/lovable-uploads/e6466ff8-72d7-4e0f-9039-a33337cfe95a.png',
  },
  {
    id: 6,
    name: 'SABB',
    logo: '/lovable-uploads/7e4a1c78-3be9-4a71-8539-49234501db66.png',
  },
  {
    id: 7,
    name: 'LuupFX',
    logo: '/lovable-uploads/d6a463ed-2fc9-46fe-9246-b235e28e67dc.png',
  },
];

const CompanyTicker: React.FC = () => {
  return (
    <section className="py-10 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <h3 className="text-center mb-8 text-2xl font-medium">Clients</h3>
        
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
                  className="h-14 sm:h-16 w-auto object-contain"
                />
              </div>
            ))}
            {/* Duplicate companies for seamless looping */}
            {companies.map((company) => (
              <div key={`dup-${company.id}`} className="ticker-item flex-shrink-0">
                <img 
                  src={company.logo} 
                  alt={company.name} 
                  className="h-14 sm:h-16 w-auto object-contain"
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
