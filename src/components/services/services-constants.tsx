
import { 
  Smartphone, 
  Code, 
  CreditCard, 
  Bot, 
  Workflow,
  Globe,
  Briefcase,
  ClipboardList,
  GraduationCap
} from 'lucide-react';
import React from 'react';
import { ServiceCategory } from './services-types';

// Category colors for styling
export const categoryColors = {
  'all': '#9b87f5',
  'tech': '#D7707E',
  'transformation': '#25A385',
  'ai': '#4682B4',
  'marketing': '#E86EAD',
};

// Service background colors
export const serviceColors = {
  1: 'bg-[#E5DEFF]/80', // AI Agents
  2: 'bg-[#E5DEFF]/60', // Automated Workflows
  3: 'bg-[#D3E4FD]/80', // Website Development
  4: 'bg-[#D3E4FD]/70', // Mobile App Development
  5: 'bg-[#D3E4FD]/50', // Payments & Fintech
  6: 'bg-[#F2FCE2]/70', // Digital Marketing
  7: 'bg-[#FFDEE2]/40', // Enterprise Agility
  8: 'bg-[#FFDEE2]/30', // Programme Governance
  9: 'bg-[#FFDEE2]/20', // Training & Courses
};

// Category definitions
export const categories = [
  { id: 'all' as ServiceCategory, name: 'All Services', color: 'bg-[#9b87f5]/30' },
  { id: 'ai' as ServiceCategory, name: 'AI Services', color: 'bg-[#E5DEFF]/30' },
  { id: 'tech' as ServiceCategory, name: 'Technology Services', color: 'bg-[#D3E4FD]/30' },
  { id: 'transformation' as ServiceCategory, name: 'Transformation Services', color: 'bg-[#FDE1D3]/30' },
  { id: 'marketing' as ServiceCategory, name: 'Digital Marketing', color: 'bg-[#F2FCE2]/30' },
];

// Service definitions with icons and descriptions
export const services = [
  {
    id: 1,
    title: 'AI Agents',
    description: 'We Implement AI agents to automate repetitive tasks, streamline your business processes and keep your business running 247; such as chatbots, lead generation, customer service and voice AI agents, personal assistants, data analytics, social media manager and much more.',
    icon: <Bot className="w-8 h-8 text-primary" />,
    category: 'ai' as ServiceCategory,
    path: null,
  },
  {
    id: 2,
    title: 'Automated Workflows',
    description: 'Leverage AI to automate workflows, reduce manual tasks, and improve business process efficiency, freeing up resources for growth.',
    icon: <Workflow className="w-8 h-8 text-primary" />,
    category: 'ai' as ServiceCategory,
    path: null,
  },
  {
    id: 3,
    title: 'Website Development',
    description: 'Powered with AI - High-performance, responsive websites designed to enhance your online presence, engage customers, and drive business growth.',
    icon: <Code className="w-8 h-8 text-primary" />,
    category: 'tech' as ServiceCategory,
    path: '/web-development',
  },
  {
    id: 4,
    title: 'Mobile App Development',
    description: 'Powered with AI - Custom mobile apps tailored to your business needs, ensuring efficiency, engagement, and seamless user experiences across platforms.',
    icon: <Smartphone className="w-8 h-8 text-primary" />,
    category: 'tech' as ServiceCategory,
    path: null,
  },
  {
    id: 5,
    title: 'Payments & Fintech Solutions',
    description: 'Secure, scalable payment systems and fintech solutions to streamline transactions, improve user experience, and foster financial innovation.',
    icon: <CreditCard className="w-8 h-8 text-primary" />,
    category: 'tech' as ServiceCategory,
    path: null,
  },
  {
    id: 6,
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing solutions including SEO, social media advertising, PPC campaigns, content marketing, and analytics to boost your online presence and drive conversions.',
    icon: <Globe className="w-8 h-8 text-primary" />,
    category: 'marketing' as ServiceCategory,
    path: null,
  },
  {
    id: 7,
    title: 'Enterprise Agility',
    description: 'Agile methodologies and effective program management to drive faster decision-making and business adaptation in rapidly changing environments.',
    icon: <Briefcase className="w-8 h-8 text-primary" />,
    category: 'transformation' as ServiceCategory,
    path: null,
  },
  {
    id: 8,
    title: 'Programme Governance & Management',
    description: 'Expert governance and management for complex programs, ensuring alignment with business objectives, risk mitigation, and successful delivery.',
    icon: <ClipboardList className="w-8 h-8 text-primary" />,
    category: 'transformation' as ServiceCategory,
    path: null,
  },
  {
    id: 9,
    title: 'Training & Courses',
    description: 'Courses on Enterprise Agility, Programme Management and Governance, Software Engineering, Data Engineering, and Leveraging AI for Automation.',
    icon: <GraduationCap className="w-8 h-8 text-primary" />,
    category: 'transformation' as ServiceCategory,
    path: null,
  },
];
