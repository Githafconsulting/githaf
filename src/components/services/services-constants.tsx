import { Code, Brush, LayoutDashboard, Presentation, Mail, Settings, Bell, Tv, BarChartBig, Search, Network, Cloud, Database, Lock, Shield, CheckCircle, XCircle, AlertTriangle, Info, HelpCircle, GraduationCap, BookOpenCheck, Rocket, Users, FileCode2, Smartphone, Globe } from 'lucide-react';
import { ServiceItem, ServiceCategory } from './services-types';

export const categories: { id: ServiceCategory; label: string; color: string }[] = [
  { id: 'all', label: 'All Services', color: 'bg-[#9b87f5]/30' },
  { id: 'digital-transformation', label: 'Digital Transformation', color: 'bg-[#ea33f7]/30' },
  { id: 'ai-solutions', label: 'AI Solutions', color: 'bg-[#6f42c1]/30' },
  { id: 'business-consulting', label: 'Business Consulting', color: 'bg-[#4e2799]/30' },
];

export const serviceColors = {
  'web-development': 'bg-[#ea33f7]/30',
  'ai-consulting': 'bg-[#6f42c1]/30',
  'business-strategy': 'bg-[#4e2799]/30',
  'ux-design': 'bg-[#9b87f5]/30',
  'data-analytics': 'bg-[#ea33f7]/30',
  'cloud-solutions': 'bg-[#6f42c1]/30',
  'cybersecurity': 'bg-[#4e2799]/30',
  'marketing-automation': 'bg-[#9b87f5]/30',
  'custom-software': 'bg-[#ea33f7]/30',
  'it-infrastructure': 'bg-[#6f42c1]/30',
};

export const services: ServiceItem[] = [
  {
    id: 'web-development',
    title: 'Website & Mobile App Development',
    description: 'Custom websites and mobile applications built with modern technologies for optimal performance and user experience.',
    icon: <Code className="h-6 w-6" />,
    category: 'digital-transformation',
    path: '/portfolio',
  },
  {
    id: 'ux-design',
    title: 'UX/UI Design',
    description: 'User-centered design solutions that enhance usability and engagement for web and mobile applications.',
    icon: <Brush className="h-6 w-6" />,
    category: 'digital-transformation',
  },
  {
    id: 'ai-consulting',
    title: 'AI Consulting',
    description: 'Expert guidance on AI strategy, implementation, and integration to drive innovation and efficiency.',
    icon: <LayoutDashboard className="h-6 w-6" />,
    category: 'ai-solutions',
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics & Visualization',
    description: 'Transform raw data into actionable insights with comprehensive analytics and visualization tools.',
    icon: <BarChartBig className="h-6 w-6" />,
    category: 'ai-solutions',
  },
  {
    id: 'business-strategy',
    title: 'Business Strategy Consulting',
    description: 'Strategic planning and consulting services to align technology with business goals and achieve sustainable growth.',
    icon: <Presentation className="h-6 w-6" />,
    category: 'business-consulting',
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Solutions & Integration',
    description: 'Secure and scalable cloud solutions that enable agility, reduce costs, and improve collaboration.',
    icon: <Cloud className="h-6 w-6" />,
    category: 'digital-transformation',
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Solutions',
    description: 'Protect your business from cyber threats with robust security measures and risk management strategies.',
    icon: <Lock className="h-6 w-6" />,
    category: 'business-consulting',
  },
  {
    id: 'marketing-automation',
    title: 'Marketing Automation',
    description: 'Automate your marketing efforts to improve efficiency, personalize customer experiences, and drive revenue.',
    icon: <Mail className="h-6 w-6" />,
    category: 'ai-solutions',
  },
  {
    id: 'custom-software',
    title: 'Custom Software Development',
    description: 'Tailored software solutions that address unique business challenges and provide a competitive edge.',
    icon: <FileCode2 className="h-6 w-6" />,
    category: 'digital-transformation',
  },
  {
    id: 'it-infrastructure',
    title: 'IT Infrastructure Management',
    description: 'Comprehensive IT infrastructure management services to ensure reliability, security, and optimal performance.',
    icon: <Settings className="h-6 w-6" />,
    category: 'business-consulting',
  },
];
