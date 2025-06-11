
import React from 'react';
import { ProjectType, ProjectCategory } from './portfolio-types';
import { projectTypes, projectCategories } from './portfolio-constants';

interface PortfolioFiltersProps {
  selectedType: ProjectType | 'all';
  selectedCategory: ProjectCategory | 'all';
  onTypeChange: (type: ProjectType | 'all') => void;
  onCategoryChange: (category: ProjectCategory | 'all') => void;
}

const PortfolioFilters: React.FC<PortfolioFiltersProps> = ({
  selectedType,
  selectedCategory,
  onTypeChange,
  onCategoryChange,
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8">
      {/* Type Filter */}
      <div className="flex-1">
        <label className="block text-sm font-medium mb-2">Project Type</label>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onTypeChange('all')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedType === 'all'
                ? 'bg-[#9b87f5] text-white'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            All Types
          </button>
          {projectTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => onTypeChange(type.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedType === type.id
                  ? 'bg-[#9b87f5] text-white'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {type.label}
            </button>
          ))}
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex-1">
        <label className="block text-sm font-medium mb-2">Category</label>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onCategoryChange('all')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedCategory === 'all'
                ? 'bg-[#9b87f5] text-white'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            All Categories
          </button>
          {projectCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-[#9b87f5] text-white'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioFilters;
