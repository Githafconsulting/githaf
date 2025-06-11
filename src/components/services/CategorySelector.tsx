
import React from 'react';
import { categories } from './services-constants';
import { ServiceCategory } from './services-types';

interface CategorySelectorProps {
  activeCategory: ServiceCategory;
  onCategoryChange: (categoryId: ServiceCategory) => void;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({
  activeCategory,
  onCategoryChange
}) => {
  return (
    <div className="flex justify-center mb-6 overflow-x-auto pb-2">
      <div className="inline-flex bg-secondary/50 p-1 rounded-full">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`px-2 py-1 md:px-3 md:py-1.5 text-xs sm:text-sm font-medium rounded-full transition-all whitespace-nowrap
              ${activeCategory === category.id 
                ? 'bg-white text-foreground shadow-sm' 
                : 'text-foreground/80 hover:text-foreground'}`}
            style={{
              backgroundColor: activeCategory === category.id ? 'white' : 'transparent'
            }}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategorySelector;
