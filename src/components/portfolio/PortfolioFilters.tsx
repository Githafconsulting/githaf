
import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ProjectType, ProjectCategory } from './portfolio-types';
import { projectTypeFilters, categoryFilters } from './portfolio-constants';

interface PortfolioFiltersProps {
  selectedType: ProjectType;
  selectedCategory: ProjectCategory;
  onTypeChange: (type: ProjectType) => void;
  onCategoryChange: (category: ProjectCategory) => void;
}

const PortfolioFilters: React.FC<PortfolioFiltersProps> = ({
  selectedType,
  selectedCategory,
  onTypeChange,
  onCategoryChange,
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-8">
      <div className="flex-1">
        <label className="block text-sm font-medium mb-2">Project Type</label>
        <Select 
          value={selectedType} 
          onValueChange={(value) => onTypeChange(value as ProjectType)}
        >
          <SelectTrigger className="w-full bg-background">
            <SelectValue placeholder="Select project type" />
          </SelectTrigger>
          <SelectContent className="bg-background border shadow-md z-50">
            {projectTypeFilters.map((filter) => (
              <SelectItem key={filter.value} value={filter.value}>
                {filter.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex-1">
        <label className="block text-sm font-medium mb-2">Category</label>
        <Select 
          value={selectedCategory} 
          onValueChange={(value) => onCategoryChange(value as ProjectCategory)}
        >
          <SelectTrigger className="w-full bg-background">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent className="bg-background border shadow-md z-50">
            {categoryFilters.map((filter) => (
              <SelectItem key={filter.value} value={filter.value}>
                {filter.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default PortfolioFilters;
