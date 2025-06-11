
import React, { useState, useMemo } from 'react';
import Layout from '@/components/Layout';
import PortfolioFilters from '@/components/portfolio/PortfolioFilters';
import ProjectCard from '@/components/portfolio/ProjectCard';
import { portfolioProjects } from '@/components/portfolio/portfolio-constants';
import { ProjectType, ProjectCategory } from '@/components/portfolio/portfolio-types';

const Portfolio = () => {
  const [selectedType, setSelectedType] = useState<ProjectType | 'all'>('all');
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | 'all'>('all');

  const filteredProjects = useMemo(() => {
    return portfolioProjects.filter((project) => {
      const typeMatch = selectedType === 'all' || project.type === selectedType;
      const categoryMatch = selectedCategory === 'all' || project.category === selectedCategory;
      return typeMatch && categoryMatch;
    });
  }, [selectedType, selectedCategory]);

  return (
    <Layout
      title="Portfolio - Githaf Consulting | Web Development & Mobile App Projects"
      description="Explore our portfolio of web development and mobile app projects across various industries including e-commerce, corporate, education, and more."
    >
      <div className="pt-20 pb-16 bg-background">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Portfolio</h1>
            <p className="text-lg text-muted-foreground">
              Discover our comprehensive collection of web development and mobile app projects, 
              showcasing innovative solutions across diverse industries.
            </p>
          </div>

          {/* Filters */}
          <PortfolioFilters
            selectedType={selectedType}
            selectedCategory={selectedCategory}
            onTypeChange={setSelectedType}
            onCategoryChange={setSelectedCategory}
          />

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-muted-foreground">
              Showing {filteredProjects.length} of {portfolioProjects.length} projects
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No projects found</h3>
              <p className="text-muted-foreground">
                Try adjusting your filters to see more projects.
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Portfolio;
