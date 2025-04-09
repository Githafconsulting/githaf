
import { Service, AdditionalFee, Discount, Totals } from './types';

// Available services and agents
export const initialServices: Service[] = [
  // Core Services
  { id: '1', name: 'Bespoke SaaS solutions', description: 'Custom SaaS solutions tailored to your specific business needs', defaultPrice: 5000, type: 'service' },
  { id: '2', name: 'White-label SaaS solution', description: 'Rebrandable SaaS platform ready for your branding', defaultPrice: 3500, type: 'service' },
  { id: '3', name: 'Readymade SaaS solution', description: 'Out-of-the-box SaaS solution for quick deployment', defaultPrice: 2000, type: 'service' },
  { id: '4', name: 'Website development', description: 'Professional, responsive website design and development', defaultPrice: 1200, type: 'service' },
  { id: '5', name: 'Web App development', description: 'Full-featured web application development', defaultPrice: 2500, type: 'service' },
  { id: '6', name: 'Mobile App development', description: 'Native or cross-platform mobile application development', defaultPrice: 3000, type: 'service' },
  { id: '7', name: 'Digital Marketing', description: 'Comprehensive digital marketing strategy and execution', defaultPrice: 1500, type: 'service' },
  
  // AI Agents
  { id: 'a1', name: 'AI chatbot', description: 'Intelligent chatbot for customer service and lead generation', defaultPrice: 800, type: 'agent' },
  { id: 'a2', name: 'AI voice agent', description: 'Voice-activated AI assistant for various applications', defaultPrice: 1000, type: 'agent' },
  { id: 'a3', name: 'AI Lead generator', description: 'Automated lead generation and qualification system', defaultPrice: 1200, type: 'agent' },
  { id: 'a4', name: 'AI personal assistant', description: 'Personalized AI assistant for productivity and task management', defaultPrice: 900, type: 'agent' },
  { id: 'a5', name: 'Data Analytics agent', description: 'AI-powered data analysis and reporting', defaultPrice: 1100, type: 'agent' },
  { id: 'a6', name: 'Trading agent', description: 'Automated trading insights and recommendations', defaultPrice: 1500, type: 'agent' },
  { id: 'a7', name: 'AI Project manager', description: 'AI assistant for project planning and management', defaultPrice: 1300, type: 'agent' },
  { id: 'a8', name: 'SEO agent', description: 'AI-powered SEO optimization and monitoring', defaultPrice: 800, type: 'agent' },
  { id: 'a9', name: 'Website Inspector', description: 'Automated website analysis and improvement recommendations', defaultPrice: 700, type: 'agent' },
  { id: 'a10', name: 'Social Media Manager', description: 'AI-powered social media content and engagement management', defaultPrice: 900, type: 'agent' },
  { id: 'a11', name: 'Ad Campaign management agent', description: 'Automated ad campaign optimization and reporting', defaultPrice: 1000, type: 'agent' },
  { id: 'a12', name: 'Content management agent', description: 'AI-assisted content creation and management', defaultPrice: 850, type: 'agent' },
  { id: 'a13', name: 'Email marketing Agent', description: 'Automated email campaign management and optimization', defaultPrice: 750, type: 'agent' },
  { id: 'a14', name: 'Market Research & News aggregator Agent', description: 'AI-powered market research and news analysis', defaultPrice: 950, type: 'agent' },
];

// Initial additional fees
export const initialAdditionalFees: AdditionalFee[] = [
  { id: 'fee1', name: 'Consultation Fee', price: 500 },
  { id: 'fee2', name: 'Deployment Fee', price: 750 },
];

// Initial discount
export const initialDiscount: Discount = {
  type: 'percentage',
  value: 0,
};

// Initial totals
export const initialTotals: Totals = {
  subtotal: 0,
  feesTotal: 0,
  discountAmount: 0,
  finalTotal: 0,
};
