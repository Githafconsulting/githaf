
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
      image: '/lovable-uploads/8d538f19-921b-41a0-8e7c-412f51aa2116.png',
      title: 'DemainAI',
      category: 'AI Innovation Leaders'
    },
    {
      id: 2,
      image: '/lovable-uploads/2d4633c8-cede-4d1d-a288-5661c9282565.png',
      title: 'Bank Operations Dashboard',
      category: 'Banking & Financial Services'
    },
    {
      id: 3,
      image: '/lovable-uploads/293dd8c8-9546-4df6-a6e2-3fac172508e6.png',
      title: 'SDLPKB',
      category: 'Home Improvement Services'
    },
    {
      id: 4,
      image: '/lovable-uploads/0d42a799-2285-4ee6-b20e-d701a3fe86ce.png',
      title: 'Melody Tribe',
      category: 'Music Streaming Platform'
    },
    {
      id: 5,
      image: '/lovable-uploads/4d47ee1d-8f3a-405d-abc5-d9dc546a29dc.png',
      title: 'AI Consulting Dashboard',
      category: 'Lean AI Consulting Platform'
    },
    {
      id: 6,
      image: '/lovable-uploads/a53d1cc7-2a21-4072-a3d4-e51319ade912.png',
      title: 'Africas Estate Hub',
      category: 'Real Estate Marketplace'
    },
    {
      id: 7,
      image: '/lovable-uploads/39580bc9-d2fd-46ed-b121-96cb157ea2bc.png',
      title: 'Agent Genesis',
      category: 'AI Agent Creation Platform'
    },
    {
      id: 8,
      image: '/lovable-uploads/9499e01e-2e99-4f5f-ade3-a595c762b516.png',
      title: 'Lead Beacon',
      category: 'Marketing & Analytics Platform'
    },
    {
      id: 9,
      image: '/lovable-uploads/3f82ba5e-b98c-46ae-97de-68dcd84707f7.png',
      title: 'Pocket Pharmacy',
      category: 'Healthcare & E-commerce'
    },
    {
      id: 10,
      image: '/lovable-uploads/d14a6097-0ac8-49e7-b11c-893b01d39d11.png',
      title: 'Tradewin',
      category: 'Trading Strategy Platform'
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
          {/* Main Image Container - Optimized for full image display */}
          <div className="relative w-full h-[20rem] md:h-[24rem] lg:h-[28rem] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-900 to-gray-800">
            <img 
              src={projects[currentProject].image} 
              alt={projects[currentProject].title}
              className="w-full h-full object-cover object-top transition-opacity duration-700"
            />
            
            {/* Project Info Overlay - Repositioned to bottom with better spacing */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent p-4 md:p-6">
              <h4 className="text-white font-semibold text-base md:text-lg lg:text-xl mb-1 md:mb-2 transform transition-all duration-300 leading-tight">
                {projects[currentProject].title}
              </h4>
              <p className="text-gray-300 text-xs md:text-sm lg:text-base">
                {projects[currentProject].category}
              </p>
            </div>
            
            <ProjectNavigation onPrevious={prevProject} onNext={nextProject} />
          </div>
        </div>

        {/* Dot Indicators - Reduced spacing for better mobile view */}
        <div className="flex justify-center mt-4 md:mt-6 space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentProject(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentProject 
                  ? 'bg-purple-400 w-6 md:w-8' 
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
