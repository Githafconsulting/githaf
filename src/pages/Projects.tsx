
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Globe, Smartphone, Cpu } from 'lucide-react';

// Project data
const projects = [
  {
    id: 1,
    title: 'SDL PKB Knowledge Base',
    category: 'web',
    description: 'A comprehensive knowledge base platform with extensive documentation and search capabilities.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    url: 'https://www.sdlpkb.co.uk',
  },
  {
    id: 2,
    title: 'Debra Debs Fashion',
    category: 'web',
    description: 'An elegant e-commerce platform featuring the latest fashion collections.',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    url: 'https://www.debradebs.com',
  },
  {
    id: 3,
    title: 'Musicians Management System',
    category: 'web',
    description: 'A comprehensive musicians management system for studios and agencies.',
    image: '/placeholder.svg',
    url: 'https://melody-vibes-studio.lovable.app/',
  },
  {
    id: 4,
    title: 'Leads Generating SaaS',
    category: 'mobile',
    description: 'A powerful application that helps businesses generate and track high-quality leads.',
    image: '/placeholder.svg',
    url: 'https://lead-beacon-insights.lovable.app/',
  },
  {
    id: 5,
    title: 'African Real Estate Digital Market',
    category: 'mobile',
    description: 'A digital marketplace connecting buyers and sellers in the African real estate market.',
    image: '/placeholder.svg',
    url: 'https://africasestate-connect.lovable.app/',
  },
  {
    id: 6,
    title: 'AI Trading Software',
    category: 'ai',
    description: 'An AI-powered tool that analyzes market trends and provides trading recommendations.',
    image: '/placeholder.svg',
    url: 'https://trade-flow-navigator-pro.lovable.app/',
  },
  {
    id: 7,
    title: 'AI Agent SaaS',
    category: 'ai',
    description: 'A versatile AI agent platform that provides autonomous solutions for businesses.',
    image: '/placeholder.svg',
    url: 'https://agent-genesis-platform.lovable.app/',
  },
];

// Category icon mappings
const categoryIcons = {
  all: <Briefcase className="h-5 w-5" />,
  web: <Globe className="h-5 w-5" />,
  mobile: <Smartphone className="h-5 w-5" />,
  ai: <Cpu className="h-5 w-5" />,
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Filter projects based on active category
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <Layout 
      title="Projects | Githaf Consulting"
      description="Explore our diverse portfolio of web applications, mobile apps, and AI solutions."
    >
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of innovative web applications, mobile apps, and AI solutions tailored for businesses.
          </p>
        </div>
        
        {/* Category Filter Tabs */}
        <div className="flex justify-center mb-12">
          <Tabs 
            defaultValue="all" 
            value={activeCategory} 
            onValueChange={setActiveCategory}
            className="w-full max-w-md"
          >
            <TabsList className="grid grid-cols-4 w-full">
              <TabsTrigger value="all" className="flex items-center gap-1">
                {categoryIcons.all} All
              </TabsTrigger>
              <TabsTrigger value="web" className="flex items-center gap-1">
                {categoryIcons.web} Web
              </TabsTrigger>
              <TabsTrigger value="mobile" className="flex items-center gap-1">
                {categoryIcons.mobile} Mobile
              </TabsTrigger>
              <TabsTrigger value="ai" className="flex items-center gap-1">
                {categoryIcons.ai} AI
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <a 
              href={project.url} 
              target="_blank" 
              rel="noopener noreferrer"
              key={project.id}
              className="block group"
            >
              <Card className="overflow-hidden border border-border/40 group-hover:border-primary/50 transition-colors h-full flex flex-col">
                <div className="aspect-video relative overflow-hidden bg-muted">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    {project.category === 'web' && <Globe className="h-5 w-5 text-muted-foreground" />}
                    {project.category === 'mobile' && <Smartphone className="h-5 w-5 text-muted-foreground" />}
                    {project.category === 'ai' && <Cpu className="h-5 w-5 text-muted-foreground" />}
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardFooter className="mt-auto border-t bg-muted/50">
                  <span className="text-sm font-medium text-primary">
                    View Project →
                  </span>
                </CardFooter>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
