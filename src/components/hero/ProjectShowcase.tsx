
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
      image: '/project-screenshots/trading-strategy.jpg',
      title: 'Trading Strategy Platform',
      category: 'Financial Analytics & Trading'
    },
    {
      id: 2,
      image: '/project-screenshots/bank-ops.jpg',
      title: 'Bank Operations Dashboard',
      category: 'Banking & Financial Services'
    },
    {
      id: 3,
      image: '/project-screenshots/pocket-pharmacy.jpg',
      title: 'Pocket Pharmacy',
      category: 'Healthcare & E-commerce'
    },
    {
      id: 4,
      image: '/project-screenshots/lead-beacon.jpg',
      title: 'Lead Beacon',
      category: 'Marketing & Analytics Platform'
    },
    {
      id: 5,
      image: '/project-screenshots/agent-genesis.jpg',
      title: 'Agent Genesis',
      category: 'AI Agent Creation Platform'
    },
    {
      id: 6,
      image: '/project-screenshots/africas-estate-hub.jpg',
      title: 'Africas Estate Hub',
      category: 'Real Estate Marketplace'
    },
    {
      id: 7,
      image: '/project-screenshots/digital-roadmap-studio.jpg',
      title: 'Digital Roadmap Studio',
      category: 'Business Strategy & Planning'
    },
    {
      id: 8,
      image: '/project-screenshots/streaming-platform-africa.jpg',
      title: 'Streaming Platform Africa',
      category: 'Media & Entertainment'
    },
    {
      id: 9,
      image: '/lovable-uploads/bef70640-914a-4488-b5e4-11fb224be0d4.png',
      title: 'WeCare',
      category: 'Property Maintenance Services'
    },
    {
      id: 10,
      image: '/lovable-uploads/0bcc5122-64f0-4d53-bd52-e65ad96598c9.png',
      title: 'SDLPKB',
      category: 'Home Improvement Services'
    },
    {
      id: 11,
      image: '/project-screenshots/demain-ai.jpg',
      title: 'Demain AI',
      category: 'AI-Powered Business Solutions'
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
