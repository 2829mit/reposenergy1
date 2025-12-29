
import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'rps',
    name: 'RPS',
    image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Hero-Desktop-US-v2.jpg',
    description: 'Repos Power Station'
  },
  {
    id: 'datum-z',
    name: 'Datum Z',
    image: 'https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&q=80&w=800',
    description: 'Zero-loss smart distribution'
  },
  {
    id: 'datum-x',
    name: 'Datum X',
    image: 'https://images.unsplash.com/photo-1621905252507-b354bcadcabc?auto=format&fit=crop&q=80&w=800',
    description: 'Extreme efficiency'
  },
  {
    id: 'datum-s',
    name: 'Datum S',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800',
    description: 'Standard smart node'
  },
  {
    id: 'rfs',
    name: 'RFS',
    image: 'https://images.unsplash.com/photo-1545459720-aac8309b4efc?auto=format&fit=crop&q=80&w=800',
    description: 'Repos Fuel Station'
  }
];

export interface Solution {
  name: string;
  image: string;
}

export const SOLUTIONS: Solution[] = [
  {
    name: 'Infrastructure',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Logistics',
    image: 'https://images.unsplash.com/photo-1519003722824-192d992a6053?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Mining',
    image: 'https://images.unsplash.com/photo-1578307336416-0c493ed7a064?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Manufacturing',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Gensets',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800'
  }
];

export const RESOURCES = [
  'News',
  'Blogs',
  'Case Studies',
  'Testimonial',
  'ROI Calculator'
];

export const MENU_ITEMS = ['Products', 'Solutions', 'Resources', 'Enterprise', 'About Us', 'Careers'];

export interface CarouselItem {
  title: string;
  description: string;
  video?: string;
  image?: string;
}

export interface ProductPageContent {
  hero: {
    title: string;
    subtitle: string;
    image: string;
  };
  stats: {
    label: string;
    value: string;
    unit?: string;
  }[];
  advancedEcosystemImage: string;
  techItems: CarouselItem[];
  performance: {
    title: string;
    description: string;
    video: string;
  };
  safetyItems: CarouselItem[];
  feature1: { // Autonomous section
    title: string;
    description: string;
    image: string;
  };
  feature2: { // Enterprise Intelligence section
    title: string;
    description: string;
    image: string;
  };
  feature3: { // Tri-Motor Power section
    title: string;
    description: string;
    image: string;
  };
  efficientItems: CarouselItem[];
  goAnywhere: {
    title: string;
    description: string;
    image: string;
  };
}

const COMMON_VIDEOS = {
  interior: "https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/Model-S-New-Interior-Carousel-Slide-1-Desktop-NA.mp4",
  performance: "https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/Model-S-New-Interior-Carousel-Slide-1-Desktop-NA.mp4",
};

const BASE_RPS_CONTENT: Omit<ProductPageContent, 'hero'> = {
  stats: [
    { label: 'Speed', value: '120', unit: 'L/m' },
    { label: 'Tracking', value: '100', unit: '%' },
    { label: 'Monitoring', value: '24/7' }
  ],
  advancedEcosystemImage: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-New-Interior-Desktop-NA.png",
  techItems: [
    { title: "Precision Engineering", description: "Experience unparalleled accuracy in every drop dispensed with our advanced sensor array.", video: COMMON_VIDEOS.interior },
    { title: "Smart Integration", description: "Seamlessly connect with your existing fleet management systems through our cloud-native API.", video: COMMON_VIDEOS.interior }
  ],
  performance: {
    title: "Next Level Performance",
    description: "Beyond distribution, our ecosystem provides an intelligent layer of data that helps you optimize your operations in real-time.",
    video: COMMON_VIDEOS.performance
  },
  safetyItems: [
    { title: "Anti-Spill Technology", description: "Advanced shut-off valves and leak detection sensors prevent environmental hazards.", image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-New-Interior-Utility-Carousel-Slide-1-Desktop-NA.png" },
    { title: "Fire Suppression", description: "Multi-layer thermal protection ensures maximum operational safety.", image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-New-Interior-Utility-Carousel-Slide-2-Desktop-NA.png" }
  ],
  feature1: {
    title: "Autonomous Distribution",
    description: "Enter your destination and our ecosystem will manage your energy flow, from start to finish.",
    image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-New-FSD-Desktop-NA-v2.png"
  },
  feature2: {
    title: "Enterprise Intelligence",
    description: "A comprehensive view of your entire energy distribution network in real-time.",
    image: "https://res.cloudinary.com/dt8jmqu8d/image/upload/v1764218338/Screenshot_2025-11-27_100831_qvnqx7.png"
  },
  feature3: {
    title: "Tri-Motor Power",
    description: "Three carbon-sleeved rotors and an enhanced battery system ensure maximum power delivery.",
    image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-New-Tri-Motor-Desktop-NA.png"
  },
  efficientItems: [
    { 
      title: "Refined Aerodynamics", 
      description: "Every curve is engineered to reduce drag and maximize operational range.", 
      image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-New-Exterior-Carousel-Slide-1-Desktop-NA.png" 
    },
    { 
      title: "Optimized Airflow", 
      description: "Active shutters and hidden vents manage airflow to cooling systems with precise efficiency.", 
      image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-New-Exterior-Carousel-Slide-2-Desktop-NA.png" 
    },
    { 
      title: "Zero Drag Design", 
      description: "Smooth underbody panels minimize turbulence and enhance high-speed stability across all terrains.", 
      image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-New-Exterior-Carousel-Slide-3-Desktop-NA.png" 
    }
  ],
  goAnywhere: {
    title: "Go Anywhere",
    description: "Empower your fleet with the freedom to move. Our infrastructure ensures you're never more than a few minutes away from a high-speed node.",
    image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-New-Go-Anywhere-Desktop-NA.png"
  }
};

export const PRODUCT_PAGE_DATA: Record<string, ProductPageContent> = {
  'rps': {
    ...BASE_RPS_CONTENT,
    hero: {
      title: 'RPS',
      subtitle: 'Repos Power Station',
      image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Hero-Desktop-US-v2.jpg'
    },
  },
  'datum-z': {
    ...BASE_RPS_CONTENT,
    hero: {
      title: 'Datum Z',
      subtitle: 'Zero-loss smart distribution',
      image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Hero-Desktop-US-v2.jpg'
    },
  },
  'datum-x': {
    ...BASE_RPS_CONTENT,
    hero: {
      title: 'Datum X',
      subtitle: 'Extreme efficiency system',
      image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Hero-Desktop-US-v2.jpg'
    },
  },
  'datum-s': {
    ...BASE_RPS_CONTENT,
    hero: {
      title: 'Datum S',
      subtitle: 'Standard smart distribution node',
      image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Hero-Desktop-US-v2.jpg'
    },
  },
  'rfs': {
    ...BASE_RPS_CONTENT,
    hero: {
      title: 'RFS',
      subtitle: 'Repos Fuel Station',
      image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Hero-Desktop-US-v2.jpg'
    },
  }
};
