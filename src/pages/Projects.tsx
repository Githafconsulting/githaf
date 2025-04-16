import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Globe, Smartphone, Cpu, Music, TrendingUp, Building, BarChart2, Bot } from 'lucide-react';

// Project data
const projects = [
  {
    id: 1,
    title: 'SDL PKB Knowledge Base',
    category: 'web',
    description: 'A comprehensive knowledge base platform with extensive documentation and search capabilities.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    url: 'https://www.sdlpkb.co.uk',
    icon: <Globe className="h-5 w-5 text-muted-foreground" />,
  },
  {
    id: 2,
    title: 'Personal artist webpage',
    category: 'web',
    description: 'A creative digital showcase for an artist\'s portfolio and online presence.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    url: 'https://personal-artist-portfolio.lovable.app/',
    icon: <Globe className="h-5 w-5 text-muted-foreground" />,
  },
  {
    id: 3,
    title: 'Musicians Management System',
    category: 'web',
    description: 'A comprehensive musicians management system for studios and agencies.',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    url: 'https://melody-vibes-studio.lovable.app/',
    icon: <Music className="h-5 w-5 text-muted-foreground" />,
  },
  {
    id: 4,
    title: 'Leads Generating SaaS',
    category: 'mobile',
    description: 'A powerful application that helps businesses generate and track high-quality leads.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    url: 'https://lead-beacon-insights.lovable.app/',
    icon: <TrendingUp className="h-5 w-5 text-muted-foreground" />,
  },
  {
    id: 5,
    title: 'African Real Estate Digital Market',
    category: 'mobile',
    description: 'A digital marketplace connecting buyers and sellers in the African real estate market.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    url: 'https://africasestate-connect.lovable.app/',
    icon: <Building className="h-5 w-5 text-muted-foreground" />,
  },
  {
    id: 6,
    title: 'AI Trading Software',
    category: 'ai',
    description: 'An AI-powered tool that analyzes market trends and provides trading recommendations.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    url: 'https://trade-flow-navigator-pro.lovable.app/',
    icon: <BarChart2 className="h-5 w-5 text-muted-foreground" />,
  },
  {
    id: 7,
    title: 'AI Agent SaaS',
    category: 'ai',
    description: 'A versatile AI agent platform that provides autonomous solutions for businesses.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    url: 'https://agent-genesis-platform.lovable.app/',
    icon: <Bot className="h-5 w-5 text-muted-foreground" />,
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
                    {project.icon}
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
