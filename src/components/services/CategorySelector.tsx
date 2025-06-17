
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
    <div className="flex justify-center mb-8">
      <div className="overflow-x-auto pb-2 max-w-full">
        <div className="inline-flex bg-slate-900/50 backdrop-blur-xl p-3 rounded-3xl border border-white/10 shadow-xl min-w-max">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`relative px-6 py-4 text-sm md:text-base font-semibold rounded-2xl transition-all duration-300 whitespace-nowrap overflow-hidden group mx-1
                ${activeCategory === category.id 
                  ? 'text-white' 
                  : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
            >
              {/* Active background */}
              {activeCategory === category.id && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-sm"></div>
                </>
              )}
              
              {/* Hover effect for inactive buttons */}
              {activeCategory !== category.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/10 group-hover:to-pink-600/10 rounded-2xl transition-all duration-300"></div>
              )}
              
              <span className="relative z-10">{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySelector;
