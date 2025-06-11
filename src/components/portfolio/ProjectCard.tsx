
import React from 'react';
import { ExternalLink, Smartphone, Globe } from 'lucide-react';
import { PortfolioProject } from './portfolio-types';
import AnimatedCard from '../AnimatedCard';
import { useIsMobile } from '@/hooks/use-mobile';

interface ProjectCardProps {
  project: PortfolioProject;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const isMobile = useIsMobile();

  return (
    <AnimatedCard 
      className="h-full rounded-xl shadow-sm hover:shadow-md transition-all p-0 overflow-hidden group"
      intensity={isMobile ? 0 : 2}
      animate={false}
    >
      <div className="relative">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1 text-xs font-medium">
            {project.type === 'website' ? (
              <Globe size={12} />
            ) : (
              <Smartphone size={12} />
            )}
            {project.type === 'website' ? 'Website' : 'Mobile App'}
          </div>
        </div>
        {project.featured && (
          <div className="absolute top-3 right-3">
            <div className="bg-[#9b87f5] text-white px-2 py-1 rounded-full text-xs font-medium">
              Featured
            </div>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
        <p className="text-muted-foreground text-sm mb-3">{project.description}</p>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {project.technologies.map((tech) => (
            <span 
              key={tech}
              className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs"
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
            className="inline-flex items-center gap-2 text-[#9b87f5] hover:text-[#8B5CF6] text-sm font-medium transition-colors"
          >
            View Project <ExternalLink size={14} />
          </a>
        )}
      </div>
    </AnimatedCard>
  );
};

export default ProjectCard;
