
export interface Product {
  id: string;
  name: string;
  image: string;
  description: string;
}

export type MenuCategory = 'Products' | 'Solutions' | 'Resources' | 'Enterprise' | 'About Us' | 'Careers' | null;

export type Page = 'home' | 'rps' | 'datum-z' | 'datum-x' | 'datum-s' | 'rfs' | 'about-us';
