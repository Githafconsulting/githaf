
import { Project, FilterOption } from './portfolio-types';

export const projectTypeFilters: FilterOption[] = [
  { value: 'all', label: 'All Projects' },
  { value: 'website', label: 'Websites' },
  { value: 'mobile', label: 'Mobile Apps' },
];

export const categoryFilters: FilterOption[] = [
  { value: 'all', label: 'All Categories' },
  { value: 'ecommerce', label: 'E-commerce' },
  { value: 'business', label: 'Business & Corporate' },
  { value: 'media', label: 'Media & Entertainment' },
  { value: 'realestate', label: 'Real Estate' },
  { value: 'education', label: 'Education' },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'SDLPKB',
    description: 'Bathrooms, Kitchens, Painting & Decorating Experts',
    type: 'website',
    category: 'business',
    image: '/lovable-uploads/0bcc5122-64f0-4d53-bd52-e65ad96598c9.png',
    url: 'https://sdlpkb.co.uk',
    technologies: [],
  },
  {
    id: 2,
    title: 'E-commerce Platform',
    description: 'Full-featured online store with payment integration and inventory management.',
    type: 'website',
    category: 'ecommerce',
    image: '/placeholder.svg',
    technologies: ['React', 'Node.js', 'Stripe'],
  },
  {
    id: 3,
    title: 'Property Management App',
    description: 'Mobile application for real estate agents to manage properties and client relationships.',
    type: 'mobile',
    category: 'realestate',
    image: '/placeholder.svg',
    technologies: ['React Native', 'Firebase'],
  },
  {
    id: 4,
    title: 'Learning Management System',
    description: 'Educational platform with course management and student progress tracking.',
    type: 'website',
    category: 'education',
    image: '/placeholder.svg',
    technologies: ['React', 'TypeScript', 'PostgreSQL'],
  },
  {
    id: 5,
    title: 'Streaming Platform',
    description: 'Video streaming application with content management and user subscriptions.',
    type: 'website',
    category: 'media',
    image: '/placeholder.svg',
    technologies: ['React', 'Video.js', 'AWS'],
  },
  {
    id: 6,
    title: 'Restaurant Ordering App',
    description: 'Mobile app for food ordering with real-time tracking and payment processing.',
    type: 'mobile',
    category: 'ecommerce',
    image: '/placeholder.svg',
    technologies: ['React Native', 'Redux', 'PayPal'],
  },
];
