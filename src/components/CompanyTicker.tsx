
import React, { useEffect, useState } from 'react';

const companies = [
  {
    id: 1,
    name: 'Al Ghurair',
    logo: '/lovable-uploads/agi.png', 
  },
  {
    id: 2,
    name: 'SABB',
    logo: '/lovable-uploads/Sab.png',
  },
  {
    id: 3,
    name: 'PayPoint',
    logo: '/lovable-uploads/Paypoint.png',
  },
  {
    id: 4,
    name: 'RBS',
    logo: '/lovable-uploads/d8034ade-7ea0-4adb-8185-69fb27ea73d7.png',
  },
  {
    id: 5,
    name: 'Moody\'s Analytics',
    logo: '/lovable-uploads/541a3365-ab2c-4295-a94a-21668bf28641.png',
  },
  {
    id: 6,
    name: 'HSBC',
    logo: '/lovable-uploads/HSBC.png',
  }, 
  {
    id: 7,
    name: 'LUUP',
    logo: '/lovable-uploads/LUUP.png',
  },
];

const CompanyTicker: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Preload all images
  useEffect(() => {
    const imagePromises = companies.map((company) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(company.name);
        img.onerror = () => resolve(company.name); // Still resolve on error to prevent infinite loading
        img.src = company.logo;
      });
    });

    Promise.all(imagePromises).then(() => {
      setIsLoaded(true);
    });
  }, []);

  // Create company logo/name display component
  const CompanyLogo = ({ company }: { company: typeof companies[0] }) => {
    return (
      <div className="ticker-item flex-shrink-0">
        <div className="h-20 w-32 flex items-center justify-center mx-2">
          <img 
            src={company.logo} 
            alt={`${company.name} logo`}
            className="h-12 w-auto max-w-[120px] object-contain"
            loading="eager"
            style={{ imageRendering: 'crisp-edges' }}
          />
        </div>
      </div>
    );
  };

  return (
    <section className="py-12 bg-slate-50 overflow-hidden" aria-label="Clients">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-8 text-slate-800">Our <span className="text-purple-600">Clients</span></h2>
        
        <div className="relative">
          {/* Gradient overlays for smooth edge fade */}
          <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>
          
          {/* Only show the ticker once content is loaded to prevent flickering */}
          <div 
            className={`ticker-track flex items-center gap-4 transition-opacity duration-500 ${isLoaded ? 'animate-marquee opacity-100' : 'opacity-0'}`}
            style={{ willChange: 'transform' }}
          >
            {/* First set of logos */}
            {companies.map((company) => (
              <CompanyLogo key={`first-${company.id}`} company={company} />
            ))}
            
            {/* Duplicate companies for seamless looping */}
            {companies.map((company) => (
              <CompanyLogo key={`second-${company.id}`} company={company} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyTicker;
