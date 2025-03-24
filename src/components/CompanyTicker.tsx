
import React, { useEffect, useState } from 'react';

const companies = [
  {
    id: 1,
    name: 'Al Ghurair',
    logo: '/lovable-uploads/7c874dd2-2839-4ccc-b351-bd5cb000b4f8.png',
  },
  {
    id: 2,
    name: 'SABB',
    logo: '/lovable-uploads/7110493e-eb9e-4bb9-89b9-b472c1fed90c.png',
  },
  {
    id: 3,
    name: 'PayPoint',
    logo: '/lovable-uploads/2abf8e4b-445e-45db-a169-1b1bf48a80f1.png',
  },
  {
    id: 4,
    name: 'RBS',
    logo: '/lovable-uploads/f634365e-bac3-45cf-b24d-ffe0942da999.png',
  },
  {
    id: 5,
    name: 'Moody\'s Analytics',
    logo: '/lovable-uploads/77ec07fe-550f-4e78-a595-153055987da2.png',
  },
  {
    id: 6,
    name: 'HSBC',
    logo: '/lovable-uploads/56b2d8ee-6c1f-40db-9af3-6dc95dd880f7.png',
  },
  {
    id: 7,
    name: 'LuupFX',
    logo: '/lovable-uploads/ee62c6c3-4404-43d1-94c2-d74ecb019e88.png',
  },
];

const CompanyTicker: React.FC = () => {
  // Track loading state
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [imagesErrored, setImagesErrored] = useState(0);
  const [imageStatuses, setImageStatuses] = useState<Record<number, boolean>>({});

  useEffect(() => {
    // Log loading stats for debugging
    if (imagesLoaded > 0 || imagesErrored > 0) {
      console.log(`Images loaded: ${imagesLoaded}, Images with errors: ${imagesErrored}`);
    }
  }, [imagesLoaded, imagesErrored]);

  const handleImageLoad = (companyId: number, companyName: string) => {
    console.log(`Successfully loaded image for ${companyName}`);
    setImagesLoaded(prev => prev + 1);
    setImageStatuses(prev => ({...prev, [companyId]: true}));
  };

  const handleImageError = (companyId: number, companyName: string, e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.error(`Failed to load image for ${companyName}:`, e);
    setImagesErrored(prev => prev + 1);
    setImageStatuses(prev => ({...prev, [companyId]: false}));
  };

  // Create company logo/name display component
  const CompanyLogo = ({ company, isDuplicate = false }: { company: typeof companies[0], isDuplicate?: boolean }) => {
    const key = isDuplicate ? `dup-${company.id}` : `${company.id}`;
    const showFallback = imageStatuses[company.id] === false;
    
    return (
      <div key={key} className="ticker-item flex-shrink-0">
        <div className="h-16 w-32 flex items-center justify-center">
          {!showFallback ? (
            <img 
              src={company.logo} 
              alt={`${company.name} - Trusted client of Githaf Consulting`} 
              className="h-12 w-auto max-w-full object-contain"
              loading="eager"
              onLoad={() => handleImageLoad(company.id, company.name)}
              onError={(e) => handleImageError(company.id, company.name, e)}
            />
          ) : (
            <div className="bg-gray-100 h-12 w-12 rounded-full flex items-center justify-center text-lg font-semibold">
              {company.name.charAt(0)}
            </div>
          )}
        </div>
        <p className="text-xs text-center mt-2 text-gray-600">{company.name}</p>
      </div>
    );
  };

  return (
    <section className="py-10 bg-white overflow-hidden" aria-label="Our Trusted Clients">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-8 text-3xl sm:text-4xl font-semibold" id="clients">Our Trusted Clients</h2>
        
        <div className="relative">
          {/* Gradient overlays for smooth edge fade */}
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10"></div>
          
          {/* Ticker - first instance */}
          <div className="ticker-track flex items-center space-x-16 animate-marquee">
            {companies.map((company) => (
              <CompanyLogo key={company.id} company={company} />
            ))}
            
            {/* Duplicate companies for seamless looping */}
            {companies.map((company) => (
              <CompanyLogo key={`dup-${company.id}`} company={company} isDuplicate={true} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyTicker;
