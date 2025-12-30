
export interface Product {
  id: string;
  name: string;
  image: string;
  description: string;
}

export interface Solution {
  id: string;
  name: string;
  image: string;
}

export type MenuCategory = 'Fuel Intelligence Platform' | 'Industries' | 'Solutions' | 'Resources' | 'About Us' | 'Careers' | null;

export type Page = 'home' | 'rps' | 'datum-z' | 'datum-x' | 'datum-s' | 'rfs' | 'about-us' | 'infrastructure' | 'manufacturing' | 'logistics' | 'mining' | 'gensets' | 'fuel-intelligence';

export interface IndustryPageContent {
  id: string;
  hero: {
    title: string;
    subtitle: string;
    image: string;
  };
  context: {
    title: string;
    description: string;
    fuelConsumers: string[]; // List of assets consuming fuel
  };
  failures: {
    title: string;
    items: string[];
  };
  useCases: {
    title: string;
    description: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  valueProp: {
    title: string;
    description: string;
    items: string[];
  };
  benefits: {
    title: string;
    items: {
      metric: string;
      label: string;
      description: string;
    }[];
  };
  cta: {
    text: string;
  };
}