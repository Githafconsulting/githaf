import React, { useState, useEffect } from 'react';
import ProjectNavigation from './ProjectNavigation';

interface Project {
  id: number;
  image: string;
  title: string;
  category: string;
}

interface ProjectShowcaseProps {
  isVisible: boolean;
}

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ isVisible }) => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects: Project[] = [
    {
      id: 1,
      image: '/lovable-uploads/c776d86e-8d7b-401e-a57a-8b2e92ded1b0.png',
      title: 'Agent Genesis',
      category: 'AI Agent Creation Platform'
    },
    {
      id: 2,
      image: '/lovable-uploads/f03e6649-06cb-48ad-9a43-c1470f147991.png',
      title: 'Pocket Pharmacy',
      category: 'Healthcare & E-commerce'
    },
    {
      id: 3,
      image: '/lovable-uploads/bef70640-914a-4488-b5e4-11fb224be0d4.png',
      title: 'WeCare',
      category: 'Property Maintenance Services'
    },
    {
      id: 4,
      image: '/lovable-uploads/0bcc5122-64f0-4d53-bd52-e65ad96598c9.png',
      title: 'SDLPKB',
      category: 'Home Improvement Services'
    },
    {
      id: 5,
      image: '/lovable-uploads/fb9dc802-a6df-4e9d-8526-46abd52d5d37.png',
      title: 'Africas Estate Hub',
      category: 'Real Estate Marketplace'
    },
    {
      id: 6,
      image: '/lovable-uploads/607a85ac-5434-4124-99ce-c5d104d31821.png',
      title: 'Elite Estates',
      category: 'AI-Powered Real Estate Platform'
    },
    {
      id: 7,
      image: '/lovable-uploads/4140db43-1bf6-4494-9568-9aed7ebcf16d.png',
      title: 'Melody Tribe',
      category: 'Music Streaming Platform'
    },
    {
      id: 8,
      image: '/lovable-uploads/04920204-a50e-4d5c-86bb-db3f605cd8cb.png',
      title: 'Future Village',
      category: 'Learning Management System'
    },
    {
      id: 9,
      image: '/lovable-uploads/3f7c100f-ba5d-46bf-bd28-d8dff9a07bce.png',
      title: 'DAMAC Academy',
      category: 'Sports & Fitness Training'
    },
    {
      id: 10,
      image: '/lovable-uploads/04e6e7be-4e73-49f2-94b2-f8a6c1334616.png',
      title: 'LuxeSkincare',
      category: 'Luxury E-commerce Platform'
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [projects.length]);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className={`opacity-0 transform translate-y-8 transition-all duration-1000 delay-800 ease-out ${isVisible ? 'opacity-100 translate-y-0' : ''}`}>
      <div className="relative">
        {/* Main Project Display */}
        <div className="relative">
          {/* Main Image Container */}
          <div className="relative w-full h-96 md:h-[28rem] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-900 to-gray-800">
            <img 
              src={projects[currentProject].image} 
              alt={projects[currentProject].title}
              className="w-full h-full object-cover transition-opacity duration-700"
            />
            
            {/* Project Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/75 to-transparent p-6 md:p-8">
              <h4 className="text-white font-semibold text-lg md:text-xl mb-2 transform transition-all duration-300 leading-tight">
                {projects[currentProject].title}
              </h4>
              <p className="text-gray-300 text-sm md:text-base">
                {projects[currentProject].category}
              </p>
            </div>
            
            <ProjectNavigation onPrevious={prevProject} onNext={nextProject} />
          </div>
        </div>

        {/* Simple Dot Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentProject(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentProject 
                  ? 'bg-purple-400 w-8' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
