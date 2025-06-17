
import React, { useState, useEffect } from 'react';
import ProjectNavigation from './ProjectNavigation';
import ProjectThumbnails from './ProjectThumbnails';

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
      image: '/lovable-uploads/95c0b58a-299d-4749-bf37-535f705baa55.png',
      title: 'Sonique Entertainment',
      category: 'Event Management Platform'
    },
    {
      id: 2,
      image: '/lovable-uploads/707b6497-f40c-4fdb-89b1-f97452893fd8.png',
      title: 'PSK Services',
      category: 'Event Solutions Website'
    },
    {
      id: 3,
      image: '/lovable-uploads/01ecc33f-6209-44b5-ba0d-96f196827673.png',
      title: 'Crypto Dashboard',
      category: 'Financial Analytics Platform'
    },
    {
      id: 4,
      image: '/lovable-uploads/3702ad0e-6b99-4327-966f-bdb71cad69e8.png',
      title: 'Currency Circle',
      category: 'Digital Currency Platform'
    },
    {
      id: 5,
      image: '/lovable-uploads/e7cfce29-ae85-4532-94e7-f12401eb962a.png',
      title: 'Coihues Guide',
      category: 'Travel & Tourism Platform'
    },
    {
      id: 6,
      image: '/lovable-uploads/e67c1669-69e5-4ef0-8182-12f0439e2e59.png',
      title: 'AI Presentations',
      category: 'AI-Powered Design Tool'
    },
    {
      id: 7,
      image: '/lovable-uploads/3cb4d59c-52f9-4794-a4d6-0e6b4a612bc8.png',
      title: 'Banking Dashboard',
      category: 'Financial Management System'
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

  const handleProjectSelect = (index: number) => {
    setCurrentProject(index);
  };

  return (
    <div className={`opacity-0 transform translate-y-8 transition-all duration-1000 delay-800 ease-out ${isVisible ? 'opacity-100 translate-y-0' : ''}`}>
      <div className="relative perspective-1000">
        {/* Main Tilted Window Display */}
        <div className="relative w-full h-80 md:h-96">
          <div 
            className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-700 ease-in-out"
            style={{
              transformStyle: 'preserve-3d',
              transform: 'rotateY(-15deg) rotateX(5deg)',
              clipPath: 'polygon(0 0, 85% 0, 70% 100%, 0 100%)',
              background: 'linear-gradient(135deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.1) 100%)'
            }}
          >
            <img 
              src={projects[currentProject].image} 
              alt={projects[currentProject].title}
              className="w-full h-full object-cover"
              style={{
                transform: 'scale(1.2) translateX(-10%)',
                filter: 'brightness(0.9)'
              }}
            />
            
            {/* Project Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6">
              <h4 className="text-white font-semibold text-xl mb-2">{projects[currentProject].title}</h4>
              <p className="text-gray-300 text-sm">{projects[currentProject].category}</p>
            </div>
          </div>
          
          <ProjectNavigation onPrevious={prevProject} onNext={nextProject} />
        </div>

        <ProjectThumbnails 
          projects={projects}
          currentProject={currentProject}
          onProjectSelect={handleProjectSelect}
        />
      </div>
    </div>
  );
};

export default ProjectShowcase;
