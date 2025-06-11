
import { PortfolioProject, ProjectType, ProjectCategory } from './portfolio-types';

export const projectTypes: { id: ProjectType; label: string }[] = [
  { id: 'website', label: 'Websites' },
  { id: 'mobile-app', label: 'Mobile Apps' },
];

export const projectCategories: { id: ProjectCategory; label: string }[] = [
  { id: 'ecommerce', label: 'E-commerce' },
  { id: 'business-corporate', label: 'Business & Corporate' },
  { id: 'media-entertainment', label: 'Media & Entertainment' },
  { id: 'real-estate', label: 'Real Estate' },
  { id: 'education', label: 'Education' },
];

export const portfolioProjects: PortfolioProject[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'Modern e-commerce solution with AI-powered recommendations and seamless checkout experience.',
    image: '/lovable-uploads/eb57cce0-361d-48a6-8739-b1206472d9cb.png',
    type: 'website',
    category: 'ecommerce',
    technologies: ['React', 'Node.js', 'Stripe', 'AI/ML'],
    url: 'https://example.com',
    featured: true,
  },
  {
    id: '2',
    title: 'Corporate Website',
    description: 'Professional corporate website with CMS integration and responsive design.',
    image: '/lovable-uploads/eb57cce0-361d-48a6-8739-b1206472d9cb.png',
    type: 'website',
    category: 'business-corporate',
    technologies: ['React', 'TypeScript', 'CMS'],
    featured: true,
  },
  {
    id: '3',
    title: 'Streaming Mobile App',
    description: 'Mobile streaming application with real-time content delivery and social features.',
    image: '/lovable-uploads/eb57cce0-361d-48a6-8739-b1206472d9cb.png',
    type: 'mobile-app',
    category: 'media-entertainment',
    technologies: ['React Native', 'WebRTC', 'Firebase'],
  },
  {
    id: '4',
    title: 'Real Estate Portal',
    description: 'Comprehensive real estate platform with property listings and virtual tours.',
    image: '/lovable-uploads/eb57cce0-361d-48a6-8739-b1206472d9cb.png',
    type: 'website',
    category: 'real-estate',
    technologies: ['React', 'Maps API', '3D Tours'],
  },
  {
    id: '5',
    title: 'Educational App',
    description: 'Interactive learning mobile application with gamification and progress tracking.',
    image: '/lovable-uploads/eb57cce0-361d-48a6-8739-b1206472d9cb.png',
    type: 'mobile-app',
    category: 'education',
    technologies: ['React Native', 'Gamification', 'Analytics'],
  },
  {
    id: '6',
    title: 'Business Dashboard',
    description: 'Analytics dashboard for business intelligence and data visualization.',
    image: '/lovable-uploads/eb57cce0-361d-48a6-8739-b1206472d9cb.png',
    type: 'website',
    category: 'business-corporate',
    technologies: ['React', 'D3.js', 'API Integration'],
  },
];
