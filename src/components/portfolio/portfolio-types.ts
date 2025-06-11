
export type ProjectType = 'website' | 'mobile-app';

export type ProjectCategory = 
  | 'ecommerce' 
  | 'business-corporate' 
  | 'media-entertainment' 
  | 'real-estate' 
  | 'education';

export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  image: string;
  type: ProjectType;
  category: ProjectCategory;
  technologies: string[];
  url?: string;
  featured?: boolean;
}
