
import React, { useState, useMemo } from 'react';
import Layout from '@/components/Layout';
import PortfolioFilters from '@/components/portfolio/PortfolioFilters';
import ProjectCard from '@/components/portfolio/ProjectCard';
import { projects } from '@/components/portfolio/portfolio-constants';
import { ProjectType, ProjectCategory } from '@/components/portfolio/portfolio-types';

const WebDevelopment: React.FC = () => {
  const [selectedType, setSelectedType] = useState<ProjectType>('all');
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const typeMatch = selectedType === 'all' || project.type === selectedType;
      const categoryMatch = selectedCategory === 'all' || project.category === selectedCategory;
      return typeMatch && categoryMatch;
    });
  }, [selectedType, selectedCategory]);

  return (
    <Layout 
      title="Website & Mobile App Development Portfolio - Githaf Consulting"
      description="Explore our portfolio of custom websites, web apps, and mobile applications across various industries including e-commerce, business, education, and more."
    >
      <div className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-8 reveal">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Website, Web App & Mobile Development Portfolio
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our collection of custom websites, web applications, and mobile apps designed to drive business growth and enhance user experiences.
            </p>
          </div>

          {/* Filters */}
          <div className="reveal">
            <PortfolioFilters
              selectedType={selectedType}
              selectedCategory={selectedCategory}
              onTypeChange={setSelectedType}
              onCategoryChange={setSelectedCategory}
            />
          </div>

          {/* Results Count */}
          <div className="mb-6 reveal">
            <p className="text-sm text-muted-foreground">
              Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12 reveal">
              <p className="text-muted-foreground">
                No projects found matching your current filters.
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default WebDevelopment;
