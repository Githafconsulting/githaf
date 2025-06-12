
export type ProjectType = 'all' | 'website' | 'mobile';
export type ProjectCategory = 'all' | 'ecommerce' | 'business' | 'media' | 'realestate' | 'education' | 'healthcare';

export interface Project {
  id: number;
  title: string;
  description: string;
  type: ProjectType;
  category: ProjectCategory;
  image: string;
  url?: string;
  technologies: string[];
}

export interface FilterOption {
  value: ProjectType | ProjectCategory;
  label: string;
}
