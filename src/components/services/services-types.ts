
export type ServiceCategory = 'all' | 'ai' | 'tech' | 'transformation' | 'marketing';

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: ServiceCategory;
  path: string | null;
}

export interface CategoryItem {
  id: ServiceCategory;
  name: string;
  color: string;
}
