
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
      image: '/lovable-uploads/ffd11f5f-f408-47e0-9730-d74217cf46f3.png',
      title: 'Tradewin',
      category: 'Trading Strategy Platform'
    },
    {
      id: 2,
      image: '/lovable-uploads/7a9c3c84-f7ef-474c-8dc0-81846fd3398c.png',
      title: 'Bank Operations Dashboard',
      category: 'Banking & Financial Services'
    },
    {
      id: 3,
      image: '/lovable-uploads/eb10794a-36a4-4458-bf89-641fa04be4a7.png',
      title: 'SDLPKB',
      category: 'Home Improvement Services'
    },
    {
      id: 4,
      image: '/lovable-uploads/a4bf1f91-4fca-47d9-b8b2-ffdef7fbaa65.png',
      title: 'DemainAI',
      category: 'AI Innovation Leaders'
    },
    {
      id: 5,
      image: '/lovable-uploads/d8d102f7-5b7f-44b6-a92e-ed0bcac18041.png',
      title: 'Currency Circle',
      category: 'Financial Technology Platform'
    },
    {
      id: 6,
      image: '/lovable-uploads/ac112eca-3268-45b0-8567-9b3fa6b973b1.png',
      title: 'Developer Village Academy',
      category: 'Education & Learning Platform'
    },
    {
      id: 7,
      image: '/lovable-uploads/7176a88e-1757-4e34-bce1-f9ccc7f9aaee.png',
      title: 'LuxeSkincare',
      category: 'Beauty & E-commerce'
    },
    {
      id: 8,
      image: '/lovable-uploads/23f9a4ef-e7c8-4ad4-bf9e-72f9091b4fdb.png',
      title: 'Elite Estates',
      category: 'Real Estate Marketplace'
    },
    {
      id: 9,
      image: '/lovable-uploads/4c97491c-993f-4aa6-8254-dca718b74d3e.png',
      title: 'SDLPKB Home Services',
      category: 'Professional Home Services'
    },
    {
      id: 10,
      image: '/lovable-uploads/83185f2a-43fa-4005-84f3-804d59379219.png',
      title: 'Lead Beacon',
      category: 'Marketing & Analytics Platform'
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
          {/* Main Image Container - Show full images without cropping */}
          <div className="relative w-full h-[22rem] md:h-[26rem] lg:h-[30rem] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-100 to-gray-200">
            <img 
              src={projects[currentProject].image} 
              alt={projects[currentProject].title}
              className="w-full h-full object-contain transition-opacity duration-700"
            />
            
            {/* Project Info Overlay - Enhanced gradient with website background colors */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 via-slate-800/90 to-transparent h-2/5 p-4 md:p-6 flex flex-col justify-end">
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
