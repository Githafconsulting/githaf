
import React from 'react';

interface Project {
  id: number;
  image: string;
  title: string;
  category: string;
}

interface ProjectThumbnailsProps {
  projects: Project[];
  currentProject: number;
  onProjectSelect: (index: number) => void;
}

const ProjectThumbnails: React.FC<ProjectThumbnailsProps> = ({ 
  projects, 
  currentProject, 
  onProjectSelect 
}) => {
  return (
    <>
      {/* Project Thumbnails */}
      <div className="flex justify-center mt-8 space-x-3 overflow-x-auto pb-2">
        {projects.map((project, index) => (
          <button
            key={project.id}
            onClick={() => onProjectSelect(index)}
            className={`flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden transition-all duration-300 ${
              index === currentProject 
                ? 'ring-2 ring-purple-400 scale-110' 
                : 'opacity-60 hover:opacity-100'
            }`}
          >
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => onProjectSelect(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              index === currentProject 
                ? 'bg-purple-400 w-6' 
                : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectThumbnails;
