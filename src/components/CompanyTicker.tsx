
import React from 'react';

const companies = [
  {
    id: 1,
    name: 'Al Ghurair',
    logo: '/lovable-uploads/a0073076-68b3-4aa7-971d-908a73a47896.png',
  },
  {
    id: 2,
    name: 'SABB',
    logo: '/lovable-uploads/10241d5d-627c-4ad9-a525-3b18f15e0045.png',
  },
  {
    id: 3,
    name: 'PayPoint',
    logo: '/lovable-uploads/8e610932-bda3-42e5-af36-3fb36f7b9c65.png',
  },
  {
    id: 4,
    name: 'RBS',
    logo: '/lovable-uploads/7d47048c-fc5b-497b-8bd5-d4a039365fe1.png',
  },
  {
    id: 5,
    name: 'Moody\'s Analytics',
    logo: '/lovable-uploads/2088550a-02e3-4100-a1b0-145847a1c7ad.png',
  },
  {
    id: 6,
    name: 'HSBC',
    logo: '/lovable-uploads/92b598ed-8d68-4494-8551-7efd930a511e.png',
  },
  {
    id: 7,
    name: 'LuupFX',
    logo: '/lovable-uploads/2fab4ce2-fedf-4aae-84a4-26edb77fbde8.png',
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
          <div className="ticker-track flex items-center space-x-16 animate-rtl-marquee">
            {companies.map((company) => (
              <div key={company.id} className="ticker-item flex-shrink-0">
                <div className="h-14 sm:h-16 w-auto flex items-center justify-center">
                  <img 
                    src={company.logo} 
                    alt={company.name} 
                    className="h-full w-auto object-contain"
                    loading="eager"
                    onLoad={(e) => {
                      console.log(`Successfully loaded image for ${company.name}`);
                      const imgElement = e.target as HTMLImageElement;
                      imgElement.style.display = 'block';
                    }}
                    onError={(e) => {
                      console.error(`Failed to load image for ${company.name}:`, e);
                      const imgElement = e.target as HTMLImageElement;
                      imgElement.style.display = 'none';
                    }}
                  />
                </div>
                <p className="text-xs text-center mt-2 text-gray-600">{company.name}</p>
              </div>
            ))}
            {/* Duplicate companies for seamless looping */}
            {companies.map((company) => (
              <div key={`dup-${company.id}`} className="ticker-item flex-shrink-0">
                <div className="h-14 sm:h-16 w-auto flex items-center justify-center">
                  <img 
                    src={company.logo} 
                    alt={company.name} 
                    className="h-full w-auto object-contain"
                    loading="eager"
                    onLoad={(e) => {
                      console.log(`Successfully loaded image for ${company.name}`);
                      const imgElement = e.target as HTMLImageElement;
                      imgElement.style.display = 'block';
                    }}
                    onError={(e) => {
                      console.error(`Failed to load image for ${company.name}:`, e);
                      const imgElement = e.target as HTMLImageElement;
                      imgElement.style.display = 'none';
                    }}
                  />
                </div>
                <p className="text-xs text-center mt-2 text-gray-600">{company.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyTicker;
