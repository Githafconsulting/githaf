
import React from 'react';

const companies = [
  {
    id: 1,
    name: 'HSBC',
    logo: '/lovable-uploads/231ef831-e20d-478b-9138-dada4cb70a77.png',
  },
  {
    id: 2,
    name: 'Royal Bank of Scotland',
    logo: '/lovable-uploads/32ca709a-b666-41dc-a5bb-aa539477800c.png',
  },
  {
    id: 3,
    name: 'LuupFX',
    logo: '/lovable-uploads/a8677b99-fa88-4401-97cf-e8409faa645a.png',
  },
  {
    id: 4,
    name: 'PayPoint',
    logo: '/lovable-uploads/d9d7e005-339a-4d0f-837e-e66055b8d5c1.png',
  },
  {
    id: 5,
    name: 'SAB',
    logo: '/lovable-uploads/695a2823-ea21-41c3-989a-aa34e9306aad.png',
  },
  {
    id: 6,
    name: 'Al Ghurair',
    logo: '/lovable-uploads/c3325f33-66ce-4975-ba17-e8c1524d56ff.png',
  },
  {
    id: 7,
    name: 'RBS',
    logo: '/lovable-uploads/32ca709a-b666-41dc-a5bb-aa539477800c.png',
  },
];

const CompanyTicker: React.FC = () => {
  return (
    <section className="py-8 bg-[#F2FCE2]/50 overflow-hidden">
      <div className="container mx-auto px-4">
        <h3 className="text-center mb-6 text-2xl">Successfully delivered for leading companies</h3>
        
        <div className="relative">
          {/* Gradient overlays for smooth edge fade */}
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#F2FCE2]/50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#F2FCE2]/50 to-transparent z-10"></div>
          
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
