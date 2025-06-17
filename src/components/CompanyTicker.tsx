
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
  const [imagesLoaded, setImagesLoaded] = useState(0);
  
  // Only show the ticker once all images have loaded or errored
  useEffect(() => {
    if (imagesLoaded >= companies.length) {
      setIsLoaded(true);
    }
  }, [imagesLoaded]);

  const handleImageLoad = (companyName: string) => {
    console.log(`Successfully loaded image for ${companyName}`);
    setImagesLoaded(prev => prev + 1);
  };

  const handleImageError = (companyName: string, e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.error(`Failed to load image for ${companyName}`);
    setImagesLoaded(prev => prev + 1); // Still count errors as "loaded" for display purposes
  };

  // Create company logo/name display component
  const CompanyLogo = ({ company }: { company: typeof companies[0] }) => {
    return (
      <div className="ticker-item flex-shrink-0">
        <div className="h-20 w-40 flex items-center justify-center px-4">
          <img 
            src={company.logo} 
            alt={`${company.name} logo`}
            className="h-12 w-auto max-w-full object-contain filter brightness-75 contrast-125"
            loading="eager"
            onLoad={() => handleImageLoad(company.name)}
            onError={(e) => handleImageError(company.name, e)}
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
            className={`ticker-track flex items-center gap-8 ${isLoaded ? 'animate-marquee' : 'opacity-0'}`}
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
