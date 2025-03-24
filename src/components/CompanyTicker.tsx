
import React from 'react';

const companies = [
  {
    id: 1,
    name: 'Al Ghurair',
    logo: '/lovable-uploads/1da8ace2-bf3f-4449-80cb-d92205ecdbf9.png',
  },
  {
    id: 2,
    name: 'HSBC',
    logo: '/lovable-uploads/afba669d-e77b-472d-99ff-d712029153f9.png',
  },
  {
    id: 3,
    name: 'RBS',
    logo: '/lovable-uploads/96e12eab-f0b4-476f-b1ab-b5f7bd3cfe4d.png',
  },
  {
    id: 4,
    name: 'Moody\'s Analytics',
    logo: '/lovable-uploads/f5647534-e917-4f4a-816c-521e7feb28d0.png',
  },
  {
    id: 5,
    name: 'PayPoint',
    logo: '/lovable-uploads/b74e8273-b6d5-4bf6-a32e-057794581501.png',
  },
  {
    id: 6,
    name: 'SABB',
    logo: '/lovable-uploads/7b42f154-4f32-49fe-91a1-226e3365d3e2.png',
  },
  {
    id: 7,
    name: 'LuupFX',
    logo: '/lovable-uploads/f1a887c6-f2c9-4e24-b9b3-bdae31815cc0.png',
  },
];

const CompanyTicker: React.FC = () => {
  return (
    <section className="py-8 bg-[#F2FCE2]/50 overflow-hidden">
      <div className="container mx-auto px-4">
        <h3 className="text-center mb-6 text-2xl">Clients we</h3>
        
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
