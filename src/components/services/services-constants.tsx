import { 
  Smartphone, 
  Code, 
  CreditCard, 
  Bot, 
  Globe,
  Briefcase,
  ClipboardList,
  GraduationCap,
  Rocket,
  Database
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
  3: 'bg-[#D3E4FD]/80', // Website Development
  4: 'bg-[#D3E4FD]/70', // Mobile App Development
  5: 'bg-[#D3E4FD]/50', // Payments & Fintech
  6: 'bg-[#F2FCE2]/70', // Digital Marketing
  7: 'bg-[#FFDEE2]/40', // Enterprise Agility
  8: 'bg-[#FFDEE2]/30', // Programme Governance
  9: 'bg-[#FFDEE2]/20', // Training & Courses
  10: 'bg-[#E5DEFF]/70', // AI SaaS Products
  11: 'bg-[#E5DEFF]/50', // Tailor-made Solutions
};

// Category definitions
export const categories = [
  { id: 'all' as ServiceCategory, name: 'All Services', color: 'bg-[#9b87f5]/30' },
  { id: 'ai' as ServiceCategory, name: 'AI Solutions', color: 'bg-[#E5DEFF]/30' },
  { id: 'tech' as ServiceCategory, name: 'Digital Solutions', color: 'bg-[#D3E4FD]/30' },
  { id: 'transformation' as ServiceCategory, name: 'Transformation Consulting', color: 'bg-[#FDE1D3]/30' },
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
    description: 'Strategic consulting for fintech innovation and digital transformation. We help financial institutions modernize systems, optimize customer journeys, and implement secure, scalable payment solutions.',
    icon: <CreditCard className="w-8 h-8 text-primary" />,
    category: 'tech' as ServiceCategory,
    path: null,
  },
  {
    id: 6,
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing services including Facebook & Google Ads, SEO optimization, email marketing campaigns, conversion-focused funnel building, and in-depth analytics to drive growth and maximize ROI.',
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
  {
    id: 10,
    title: 'AI SaaS Products',
    description: 'Ready-to-deploy AI software solutions that help businesses scale operations, automate processes, and gain competitive advantages with minimal setup and implementation time.',
    icon: <Rocket className="w-8 h-8 text-primary" />,
    category: 'ai' as ServiceCategory,
    path: null,
  },
  {
    id: 11,
    title: 'Tailor-made Solutions',
    description: 'Custom-built AI and digital solutions designed specifically to address your unique business challenges and requirements, creating maximum impact for your organization.',
    icon: <Database className="w-8 h-8 text-primary" />,
    category: 'ai' as ServiceCategory,
    path: null,
  },
];
