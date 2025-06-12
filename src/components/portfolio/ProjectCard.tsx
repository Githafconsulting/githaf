
import React from 'react';
import { ExternalLink, Smartphone, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Project } from './portfolio-types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const TypeIcon = project.type === 'mobile' ? Smartphone : Globe;
  const hasViewableProject = project.lovableUrl || project.url;

  return (
    <div className="bg-background rounded-lg shadow-sm border hover:shadow-md transition-shadow">
      <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
        {hasViewableProject ? (
          <Link 
            to={`/project/${project.id}`}
            className="block w-full h-full"
          >
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
            />
          </Link>
        ) : (
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
        )}
      </div>
      
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <TypeIcon className="w-4 h-4 text-primary" />
          <span className="text-xs text-muted-foreground capitalize">
            {project.type}
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
        
        {hasViewableProject && (
          <Link 
            to={`/project/${project.id}`}
            className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
          >
            <ExternalLink className="w-3 h-3" />
            View Project
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
