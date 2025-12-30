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
    image: 'https://res.cloudinary.com/dt8jmqu8d/image/upload/v1767000351/Firefly_Gemini_Flash_The_attached_image_is_our_product_datum_used_for_refilling._it_is_a_storage_tank_of_968554_pf44gm.png',
    description: 'Zero-loss smart distribution'
  },
  {
    id: 'datum-x',
    name: 'Datum X',
    image: 'https://res.cloudinary.com/dt8jmqu8d/image/upload/v1767087445/New_Project_7_qv8zju.png',
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

export interface ProductPageFeature {
  title: string;
  description: string;
  image: string;
  video?: string;
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
    video?: string;
    image?: string;
  };
  safetyItems: CarouselItem[];
  feature1: ProductPageFeature;
  feature2: ProductPageFeature;
  feature3: ProductPageFeature;
  efficientItems: CarouselItem[];
  goAnywhere: {
    title: string;
    description: string;
    image: string;
    video?: string;
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
      image: 'https://res.cloudinary.com/dt8jmqu8d/image/upload/v1767009229/New_Project_2_upltrf.png'
    },
    advancedEcosystemImage: 'https://res.cloudinary.com/dt8jmqu8d/image/upload/v1767010323/Gemini_Generated_Image_228jyr228jyr228j_pdo14s.png',
    techItems: [
      { 
        title: "Precision Engineering", 
        description: "Engineered with 3.0mm mild steel and anti-rust protection for unmatched durability and reliable storage of your fuel.", 
        image: 'https://res.cloudinary.com/dt8jmqu8d/image/upload/v1767006972/Gemini_Generated_Image_wpb9cywpb9cywpb9_ytocsm.png' 
      },
      { 
        title: "All-Round Protection", 
        description: "A custom-designed canopy encapsulates the entire system Tank, Dispensing Unit (DU), Repos Controller, shielding it from weather, accidents, and tampering system from external damage.", 
        image: 'https://res.cloudinary.com/dt8jmqu8d/image/upload/v1767009465/New_Project_1_ke6kaq.png' 
      }
    ],
    performance: {
      title: "Next Level Performance",
      description: "Beyond distribution, our ecosystem provides an intelligent layer of data that helps you optimize your operations in real-time.",
      image: "https://res.cloudinary.com/dt8jmqu8d/image/upload/v1767012527/new-datumz_yqat6e.png"
    },
    safetyItems: [
      { title: "Anti-Spill Technology", description: "Advanced shut-off valves and leak detection sensors prevent environmental hazards.", image: "https://res.cloudinary.com/dt8jmqu8d/image/upload/v1767016036/ChatGPT_Image_Dec_29_2025_07_06_34_PM_1_a5e2xn.jpg" },
      { title: "Fire Suppression", description: "Multi-layer thermal protection ensures maximum operational safety.", image: "https://res.cloudinary.com/dt8jmqu8d/image/upload/v1767016461/New_Project_4_atuuux.png" }
    ],
    feature1: {
      title: "Autonomous Distribution",
      description: "Enter your destination and our ecosystem will manage your energy flow, from start to finish.",
      image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-New-FSD-Desktop-NA-v2.png",
      video: "https://res.cloudinary.com/dt8jmqu8d/video/upload/v1767072674/Untitled_video_-_Made_with_Clipchamp_2_mbtpv5.mp4"
    },
    feature3: {
      title: "Tri-Motor Power",
      description: "Advanced multi-pump configuration ensures rapid, consistent, and high-volume fuel delivery for heavy-duty industrial demands.",
      image: "https://res.cloudinary.com/dt8jmqu8d/image/upload/v1767076045/New_Project_5_twbfyu.png"
    },
    efficientItems: [
      { 
        title: "Refined Aerodynamics", 
        description: "Every curve is engineered to reduce drag and maximize operational range.", 
        image: "https://res.cloudinary.com/dt8jmqu8d/image/upload/v1767009465/New_Project_1_ke6kaq.png" 
      },
      { 
        title: "Optimized Airflow", 
        description: "Active shutters and hidden vents manage airflow to cooling systems with precise efficiency.", 
        image: "https://res.cloudinary.com/dt8jmqu8d/image/upload/v1767077458/2_fprgpf.png" 
      }
    ],
    goAnywhere: {
      title: "Go Anywhere",
      description: "Empower your fleet with the freedom to move. Our infrastructure ensures you're never more than a few minutes away from a high-speed node.",
      image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-New-Go-Anywhere-Desktop-NA.png",
      video: "https://res.cloudinary.com/dt8jmqu8d/video/upload/v1767077790/Kashmir_Fuelling_video_um4gzx.mp4"
    }
  },
  'datum-x': {
    ...BASE_RPS_CONTENT,
    hero: {
      title: 'Datum X',
      subtitle: 'Extreme efficiency system',
      image: 'https://res.cloudinary.com/dt8jmqu8d/image/upload/v1767087445/New_Project_7_qv8zju.png'
    },
    advancedEcosystemImage: 'https://res.cloudinary.com/dt8jmqu8d/image/upload/v1767086766/New_Project_10_p4lksc.png',
    techItems: [
      { 
        title: "Precision Engineering", 
        description: "Engineered with 3.0mm mild steel and anti-rust protection for unmatched durability and reliable storage of your fuel.", 
        image: 'https://res.cloudinary.com/dt8jmqu8d/image/upload/v1767006972/Gemini_Generated_Image_wpb9cywpb9cywpb9_ytocsm.png' 
      },
      { 
        title: "All-Round Protection", 
        description: "A custom-designed canopy encapsulates the entire system Tank, Dispensing Unit (DU), Repos Controller, shielding it from weather, accidents, and tampering system from external damage.", 
        image: 'https://res.cloudinary.com/dt8jmqu8d/image/upload/v1767009465/New_Project_1_ke6kaq.png' 
      }
    ],
    performance: {
      title: "Next Level Performance",
      description: "Beyond distribution, our ecosystem provides an intelligent layer of data that helps you optimize your operations in real-time.",
      image: "https://res.cloudinary.com/dt8jmqu8d/image/upload/v1767012527/new-datumz_yqat6e.png"
    }
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