
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
    <div className="flex justify-center mb-8 overflow-x-auto pb-2">
      <div className="inline-flex bg-black/30 backdrop-blur-md p-2 rounded-2xl border border-white/10 shadow-lg">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`px-4 py-3 md:px-6 md:py-3 text-sm md:text-base font-semibold rounded-xl transition-all duration-300 whitespace-nowrap relative overflow-hidden group
              ${activeCategory === category.id 
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg transform scale-105' 
                : 'text-slate-300 hover:text-white hover:bg-white/10'}`}
          >
            {activeCategory === category.id && (
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl blur-sm"></div>
            )}
            <span className="relative z-10">{category.name}</span>
            {activeCategory !== category.id && (
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/10 group-hover:to-pink-600/10 rounded-xl transition-all duration-300"></div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategorySelector;
