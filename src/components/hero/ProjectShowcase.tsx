
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
      image: '/lovable-uploads/d06adf3b-725e-400c-add4-5ceea41cd819.png',
      title: 'AI Agent Banking Platform',
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
      image: '/lovable-uploads/e58aca5c-abe4-45e0-9cc0-cbefd5db9229.png',
      title: 'DemainAI',
      category: 'AI Innovation Leaders'
    },
    {
      id: 5,
      image: '/lovable-uploads/dc6d9177-e37f-4035-adb1-1aceaadfc17d.png',
      title: 'P2P Fintech App',
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
      image: '/lovable-uploads/d2d0727b-5064-4e4b-b61b-8c90e076d55d.png',
      title: 'AI Chatbots for Customer Service',
      category: 'AI & Automation'
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
          {/* Main Image Container - Reduced height to minimize white space */}
          <div className="relative w-full h-[18rem] md:h-[22rem] lg:h-[25rem] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-100 to-gray-200">
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
