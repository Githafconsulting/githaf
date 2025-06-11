
export type ServiceCategory = 'all' | 'digital-transformation' | 'ai-solutions' | 'business-consulting';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: ServiceCategory;
  path?: string;
}

export interface CategoryItem {
  id: ServiceCategory;
  label: string;
  color: string;
}
