
import React, { useState } from 'react';
import { ExternalLink, Smartphone, Globe, Monitor, X } from 'lucide-react';
import { Project } from './portfolio-types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isImageExpanded, setIsImageExpanded] = useState(false);
  
  const TypeIcon = project.type === 'mobile' ? Smartphone : project.type === 'webapp' ? Monitor : Globe;

  const handleImageClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsImageExpanded(true);
  };

  const closeExpandedImage = () => {
    setIsImageExpanded(false);
  };

  return (
    <>
      <div className="bg-background rounded-lg shadow-sm border hover:shadow-md transition-shadow">
        <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
          {project.url ? (
            <a 
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform cursor-pointer"
                onClick={handleImageClick}
              />
            </a>
          ) : (
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover object-top cursor-pointer hover:scale-105 transition-transform"
              onClick={handleImageClick}
            />
          )}
        </div>
        
        <div className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <TypeIcon className="w-4 h-4 text-primary" />
            <span className="text-xs text-muted-foreground capitalize">
              {project.type === 'webapp' ? 'Web App' : project.type}
            </span>
          </div>
          
          <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
          <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
          
          <div className="flex flex-wrap gap-1 mb-3">
            {project.technologies.map((tech) => (
              <span 
                key={tech}
                className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          
          {project.url && (
            <a 
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
            >
              <ExternalLink className="w-3 h-3" />
              View Project
            </a>
          )}
        </div>
      </div>

      {/* Expanded Image Modal */}
      {isImageExpanded && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closeExpandedImage}
        >
          <div className="relative max-w-7xl max-h-full">
            <button
              onClick={closeExpandedImage}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <img 
              src={project.image} 
              alt={project.title}
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
