
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
    logo: '/lovable-uploads/paypoint.png',
  },
  {
    id: 4,
    name: 'RBS',
    logo: '/lovable-uploads/RBS.png',
  },
  {
    id: 5,
    name: 'Moody\'s Analytics',
    logo: '/lovable-uploads/Moodys.png',
  },
  {
    id: 6,
    name: 'HSBC',
    logo: '/lovable-uploads/hsbc.jpeg.jpg',
  }, 
  {
    id: 7,
    name: 'LUUP',
    logo: '/lovable-uploads/LUUP.png',
  },
];

const CompanyTicker: React.FC = () => {
  // Track loading state
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [imagesErrored, setImagesErrored] = useState(0);
  const [imageStatuses, setImageStatuses] = useState<Record<number, boolean>>({});
  
  // Fix incorrect image paths if needed
  const getFixedImagePath = (path: string) => {
    // Check if the path includes "lovable-uploads" but doesn't have correct casing
    if (path.toLowerCase().includes('paypoint.png')) {
      return '/lovable-uploads/Paypoint.png';
    }
    if (path.toLowerCase().includes('moodys.png')) {
      return '/lovable-uploads/Moodys .png'; // Note the space after Moodys
    }
    return path;
  };

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
    const fixedImagePath = getFixedImagePath(company.logo);
    
    return (
      <div key={key} className="ticker-item flex-shrink-0">
        <div className="h-16 w-32 flex items-center justify-center">
          {!showFallback ? (
            <img 
              src={fixedImagePath} 
              alt={`${company.name} logo`}
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
