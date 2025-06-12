import { Project, FilterOption } from './portfolio-types';

export const projectTypeFilters: FilterOption[] = [
  { value: 'all', label: 'All Types' },
  { value: 'website', label: 'Websites' },
  { value: 'mobile', label: 'Mobile Apps' }
];

export const categoryFilters: FilterOption[] = [
  { value: 'all', label: 'All Categories' },
  { value: 'business', label: 'Business' },
  { value: 'ecommerce', label: 'E-commerce' },
  { value: 'media', label: 'Media' },
  { value: 'realestate', label: 'Real Estate' },
  { value: 'education', label: 'Education' },
  { value: 'healthcare', label: 'Healthcare' },
  { value: 'sports', label: 'Sports' }
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Githaf Consulting",
    description: "Official website for Githaf Consulting, showcasing AI and digital transformation services.",
    type: "website",
    category: "business",
    image: "/lovable-uploads/09f5349c-c441-4923-8957-49fcae849888.png",
    url: "https://githaf.com",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"]
  },
  {
    id: 2,
    title: "Githaf Landing Page",
    description: "Landing page for Githaf Consulting, designed to attract and convert potential clients.",
    type: "website",
    category: "business",
    image: "/lovable-uploads/64191847-8949-4091-874a-9963a9085916.png",
    url: "https://githaf.pages.dev",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Cloudflare Pages"]
  },
  {
    id: 3,
    title: "Ecommerce Store",
    description: "A fully functional e-commerce platform with product listings, shopping cart, and checkout process.",
    type: "website",
    category: "ecommerce",
    image: "/lovable-uploads/e4c9c175-a999-4999-a945-5a9395558903.png",
    url: "https://ecommerce-store-lovable.pages.dev/",
    technologies: ["React", "Commerce.js", "Stripe", "Netlify"]
  },
  {
    id: 4,
    title: "AI Media Platform",
    description: "AI-powered media platform for content creation, distribution, and monetization.",
    type: "website",
    category: "media",
    image: "/lovable-uploads/99138997-9599-4441-83a9-27e3994ef043.png",
    url: "https://ai-media-platform.pages.dev/",
    technologies: ["Next.js", "GPT-3", "Vercel", "Serverless Functions"]
  },
  {
    id: 5,
    title: "Real Estate Portal",
    description: "Online portal for buying, selling, and renting properties with advanced search and filtering.",
    type: "website",
    category: "realestate",
    image: "/lovable-uploads/7915f905-9215-4998-b297-975a92f38a9d.png",
    url: "https://real-estate-portal-lovable.pages.dev/",
    technologies: ["Gatsby", "GraphQL", "Contentful", "Netlify"]
  },
  {
    id: 6,
    title: "Online Education Platform",
    description: "Interactive platform for online courses, assessments, and collaborative learning.",
    type: "website",
    category: "education",
    image: "/lovable-uploads/4b95cd51-4465-4091-8941-56439995a5ca.png",
    url: "https://online-education-platform.pages.dev/",
    technologies: ["Vue.js", "Firebase", "Vuex", "Netlify"]
  },
  {
    id: 7,
    title: "Healthcare Management System",
    description: "Comprehensive system for managing patient records, appointments, and medical billing.",
    type: "website",
    category: "healthcare",
    image: "/lovable-uploads/59839949-e564-4a41-83a5-125693925989.png",
    url: "https://healthcare-management-system.pages.dev/",
    technologies: ["Angular", "NestJS", "PostgreSQL", "AWS"]
  },
  {
    id: 8,
    title: "Sports Analytics Dashboard",
    description: "Dashboard for analyzing sports data, player performance, and team statistics.",
    type: "website",
    category: "sports",
    image: "/lovable-uploads/2883999d-6994-42e5-a974-5969cfb95288.png",
    url: "https://sports-analytics-dashboard.pages.dev/",
    technologies: ["Svelte", "D3.js", "Supabase", "Vercel"]
  },
  {
    id: 9,
    title: "Mobile Banking App",
    description: "Secure mobile app for managing bank accounts, transactions, and financial services.",
    type: "mobile",
    category: "business",
    image: "/lovable-uploads/3968999a-9499-4994-b999-949494949494.png",
    url: "https://mobile-banking-app.pages.dev/",
    technologies: ["React Native", "Redux", "Firebase", "Expo"]
  },
  {
    id: 10,
    title: "Fitness Tracking App",
    description: "Mobile app for tracking fitness activities, workouts, and health metrics.",
    type: "mobile",
    category: "sports",
    image: "/lovable-uploads/12345678-1234-5678-1234-567812345678.png",
    url: "https://fitness-tracking-app.pages.dev/",
    technologies: ["Flutter", "Dart", "Firebase", "Provider"]
  },
  {
    id: 11,
    title: "E-commerce Mobile App",
    description: "Mobile app for online shopping with product browsing, cart management, and secure checkout.",
    type: "mobile",
    category: "ecommerce",
    image: "/lovable-uploads/a1b2c3d4-e5f6-7890-1234-567890abcdef.png",
    url: "https://ecommerce-mobile-app.pages.dev/",
    technologies: ["Swift", "UIKit", "CoreData", "CocoaPods"]
  },
  {
    id: 12,
    title: "Social Media Mobile App",
    description: "Mobile app for connecting with friends, sharing updates, and discovering content.",
    type: "mobile",
    category: "media",
    image: "/lovable-uploads/fedcba98-7654-3210-fedc-ba9876543210.png",
    url: "https://social-media-mobile-app.pages.dev/",
    technologies: ["Kotlin", "JetpackCompose", "Room", "Coroutines"]
  },
  {
    id: 13,
    title: "Tradewin Trading Platform",
    description: "Advanced trading dashboard with real-time market data, automated trading bots, and comprehensive portfolio management tools.",
    type: "website",
    category: "business", 
    image: "/lovable-uploads/d2d996e9-8004-44bb-8f94-608bb383a2bd.png",
    lovableUrl: "https://tradewin-dashboard.lovable.app",
    technologies: ["React", "TypeScript", "TradingView", "WebSocket", "Chart.js"]
  }
];
