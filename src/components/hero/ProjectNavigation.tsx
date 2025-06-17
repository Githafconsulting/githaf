
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectNavigationProps {
  onPrevious: () => void;
  onNext: () => void;
}

const ProjectNavigation: React.FC<ProjectNavigationProps> = ({ onPrevious, onNext }) => {
  return (
    <>
      <button 
        onClick={onPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-sm z-20"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      
      <button 
        onClick={onNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-sm z-20"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
    </>
  );
};

export default ProjectNavigation;
