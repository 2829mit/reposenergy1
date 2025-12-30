import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'rps',
    name: 'RPS',
    image: 'https://res.cloudinary.com/dt8jmqu8d/image/upload/v1767098040/18_qbq2dn.png',
    description: 'Repos Portable Station'
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
    image: 'https://res.cloudinary.com/dt8jmqu8d/image/upload/v1767098086/Screenshot_2025-12-30_170348_l0fhth.png',
    description: 'Standard smart node'
  },
  {
    id: 'rfs',
    name: 'RFS',
    image: 'https://res.cloudinary.com/dt8jmqu8d/image/upload/v1767095542/19_xwtskk.png',
    description: 'Repos Fuel Station'
  }
];

export interface Solution {
  id: string;
  name: string;
  image: string;
}

export const SOLUTIONS: Solution[] = [
  {
    id: 'infrastructure',
    name: 'Infrastructure',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'logistics',
    name: 'Logistics',
    image: 'https://res.cloudinary.com/dt8jmqu8d/image/upload/v1767098797/logistics_ibnrlh.png'
  },
  {
    id: 'mining',
    name: 'Mining',
    image: 'https://res.cloudinary.com/dt8jmqu8d/image/upload/v1767098790/mining_fybp3f.png'
  },
  {
    name: 'Manufacturing',
    id: 'manufacturing',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'gensets',
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
  items?: string[];
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

export interface IndustryPageContent {
  hero: {
    title: string;
    subtitle: string;
    image: string;
  };
  problemStatement: {
    title: string;
    description: string;
  };
  stats: {
    label: string;
    value: string;
    unit?: string;
  }[];
  pillars: {
    id: string;
    title: string;
    description: string;
    items: string[];
    image: string;
  }[];
  benefits: {
    title: string;
    icon: string;
  }[];
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
      subtitle: 'Repos Portable Station',
      image: 'https://res.cloudinary.com/dt8jmqu8d/image/upload/v1767098040/18_qbq2dn.png'
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
    },
    safetyItems: [
      { 
        title: "Anti-Spill Technology", 
        description: "Advanced shut-off valves and leak detection sensors prevent environmental hazards.", 
        image: "https://res.cloudinary.com/dt8jmqu8d/image/upload/v1767092234/New_Project_12_dompzi.png" 
      },
      { 
        title: "Fire Suppression", 
        description: "Multi-layer thermal protection ensures maximum operational safety.", 
        image: "https://res.cloudinary.com/dt8jmqu8d/image/upload/v1767092548/New_Project_13_l3umfu.png" 
      }
    ],
    feature1: {
      title: "Autonomous Distribution",
      description: "Enter your destination and our ecosystem will manage your energy flow, from start to finish.",
      image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-New-FSD-Desktop-NA-v2.png",
      video: "https://res.cloudinary.com/dt8jmqu8d/video/upload/v1767072674/Untitled_video_-_Made_with_Clipchamp_2_mbtpv5.mp4"
    },
    feature2: {
      title: "Enterprise Intelligence",
      description: "A comprehensive view of your entire energy distribution network in real-time.",
      image: "https://res.cloudinary.com/dt8jmqu8d/image/upload/v1764218338/Screenshot_2025-11-27_100831_qvnqx7.png"
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
        image: "https://res.cloudinary.com/dt8jmqu8d/image/upload/v1767093507/New_Project_14_mgvde9.png" 
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
  'datum-s': {
    ...BASE_RPS_CONTENT,
    hero: {
      title: 'Datum S',
      subtitle: 'Standard smart distribution node',
      image: 'https://res.cloudinary.com/dt8jmqu8d/image/upload/v1767098086/Screenshot_2025-12-30_170348_l0fhth.png'
    },
  },
  'rfs': {
    ...BASE_RPS_CONTENT,
    hero: {
      title: 'RFS',
      subtitle: 'Repos Fuel Station',
      image: 'https://res.cloudinary.com/dt8jmqu8d/image/upload/v1767095542/19_xwtskk.png'
    },
  }
};

export const INFRASTRUCTURE_PAGE_DATA: IndustryPageContent = {
  hero: {
    title: 'Construction & Infra',
    subtitle: 'Fueling your projects, without the chaos.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2400'
  },
  problemStatement: {
    title: "Is fuel holding your operations back?",
    description: "You've got the blueprints and the crews ready. But before the first foundation is laid, there's one stubborn problem: Diesel. From emergency runs to unrecorded refills, fuel chaos delays timelines and inflates costs. Repos has your back."
  },
  stats: [
    { label: 'Efficiency Gain', value: '30', unit: '%' },
    { label: 'Fuel Loss Prevention', value: '100', unit: '%' },
    { label: 'Uptime', value: '24/7' }
  ],
  pillars: [
    {
      id: "procurement",
      title: "Fuel Procurement Made Simple",
      description: "Get diesel delivered straight to your site. Safely, legally, and right on time.",
      items: ["Doorstep fuel delivery", "Fully legal and PESO-compliant", "Real-time order tracking", "Easy ordering through the Repos App"],
      image: "https://res.cloudinary.com/dt8jmqu8d/image/upload/v1767095542/19_xwtskk.png"
    },
    {
      id: "operations",
      title: "Fuel Operations Made Smarter",
      description: "Meet Repos DATUM — your smart fuel storage and dispensing device built for heavy machines.",
      items: ["Track fuel levels in real time", "Ensure zero fuel theft", "Smart sensors to prevent fire, leakage", "Machine-wise fuel consumption tracking"],
      image: "https://res.cloudinary.com/dt8jmqu8d/image/upload/v1767000351/Firefly_Gemini_Flash_The_attached_image_is_our_product_datum_used_for_refilling._it_is_a_storage_tank_of_968554_pf44gm.png"
    },
    {
      id: "payments",
      title: "Fuel Payments Made Seamless",
      description: "Fuel now. Pay later. Keep your equipment running without cash-flow stress with Repos Pay.",
      items: ["15 + 7 days interest-free credit", "Flexible payment options", "Easy cash-flow management", "No downtime due to shortages"],
      image: "https://res.cloudinary.com/dt8jmqu8d/image/upload/v1767096944/Untitled-1_zgsach.jpg"
    },
    {
      id: "management",
      title: "Fueling at Your Fingertips",
      description: "Get full visibility of your fueling with the Repos App. Manage diesel for all your machines from anywhere.",
      items: ["Place fuel orders instantly", "Track deliveries live", "Monitor fuel levels & usage", "Access real-time reports securely"],
      image: "https://res.cloudinary.com/dt8jmqu8d/image/upload/v1767096629/Analytics_bmfzcz.png"
    }
  ],
  benefits: [
    { title: "No shortages", icon: "https://cdn-icons-png.flaticon.com/512/3233/3233829.png" },
    { title: "Zero theft", icon: "https://cdn-icons-png.flaticon.com/512/3067/3067451.png" },
    { title: "No manual tracking", icon: "https://cdn-icons-png.flaticon.com/512/3208/3208615.png" },
    { title: "No cash-flow stress", icon: "https://cdn-icons-png.flaticon.com/512/2845/2845811.png" }
  ]
};

export const MANUFACTURING_PAGE_DATA: IndustryPageContent = {
  hero: {
    title: 'Manufacturing Industry',
    subtitle: 'Fueling your factories, keeping production humming 24/7.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2400'
  },
  problemStatement: {
    title: "Is fuel holding your operations back?",
    description: "You’ve got the orders stacked and the machines primed to run. But before the first shift kicks off—there’s one stubborn problem standing between you and seamless output: Diesel. Fuel chaos disrupts quotas and spikes costs."
  },
  stats: [
    { label: 'Uptime', value: '100', unit: '%' },
    { label: 'Cost Reduction', value: '15', unit: '%' },
    { label: 'Distribution', value: 'Smart' }
  ],
  pillars: [
    {
      id: "procurement",
      title: "Fuel Procurement Made Simple",
      description: "Get diesel delivered straight to your factory. Safely, legally, and right on time.",
      items: ["Doorstep fuel delivery", "Fully legal and PESO-compliant", "Real-time order tracking", "Easy ordering through the Repos App"],
      image: "https://res.cloudinary.com/dt8jmqu8d/image/upload/v1767095542/19_xwtskk.png"
    },
    {
      id: "operations",
      title: "Fuel Operations Made Smarter",
      description: "Meet Repos DATUM — your smart fuel storage and dispensing device built for heavy industrial machinery.",
      items: ["Track fuel levels in real time", "Ensure zero fuel theft", "Smart sensors to prevent fire, overfill, leakage", "Machine-wise fuel consumption tracking"],
      image: "https://res.cloudinary.com/dt8jmqu8d/image/upload/v1767000351/Firefly_Gemini_Flash_The_attached_image_is_our_product_datum_used_for_refilling._it_is_a_storage_tank_of_968554_pf44gm.png"
    },
    {
      id: "payments",
      title: "Fuel Payments Made Seamless",
      description: "Fuel now. Pay later. Keep your equipment running without cash-flow stress with Repos Pay.",
      items: ["15 + 7 days interest-free credit", "Flexible payment options", "Easy cash-flow management", "No downtime due to fuel shortages"],
      image: "https://res.cloudinary.com/dt8jmqu8d/image/upload/v1767096944/Untitled-1_zgsach.jpg"
    },
    {
      id: "management",
      title: "Fuelling at Your Fingertips",
      description: "Get full visibility of your fueling with the Repos App. Manage diesel for all your factory machines from anywhere.",
      items: ["Place fuel orders instantly", "Track deliveries live", "Monitor fuel levels, usage & quality", "Access real-time reports securely"],
      image: "https://res.cloudinary.com/dt8jmqu8d/image/upload/v1767096629/Analytics_bmfzcz.png"
    }
  ],
  benefits: [
    { title: "No fuel shortages", icon: "https://cdn-icons-png.flaticon.com/512/3233/3233829.png" },
    { title: "Zero theft", icon: "https://cdn-icons-png.flaticon.com/512/3067/3067451.png" },
    { title: "No manual tracking", icon: "https://cdn-icons-png.flaticon.com/512/3208/3208615.png" },
    { title: "No more cash-flow stress", icon: "https://cdn-icons-png.flaticon.com/512/2845/2845811.png" }
  ]
};

export const LOGISTICS_PAGE_DATA: IndustryPageContent = {
  hero: {
    title: 'Transport & Logistics',
    subtitle: 'Keep your fleet moving, one smart mile at a time.',
    image: 'https://res.cloudinary.com/dt8jmqu8d/image/upload/v1767098797/logistics_ibnrlh.png'
  },
  problemStatement: {
    title: "Is fuel holding your fleet back?",
    description: "You’ve got the schedules locked in and the drivers ready to roll. But even before the first mile is logged, there’s one stubborn problem standing between you and a smooth run: Diesel. Fuel chaos slows down your fleet."
  },
  stats: [
    { label: 'Fleet Uptime', value: '99', unit: '%' },
    { label: 'Operational Efficiency', value: '25', unit: '%' },
    { label: 'Fuel Visibility', value: '100', unit: '%' }
  ],
  pillars: [
    {
      id: "procurement",
      title: "Fuel Procurement Made Simple",
      description: "Get diesel delivered straight to your fleet. Safely, legally, and right on time.",
      items: ["Doorstep fuel delivery", "Fully legal and PESO-compliant", "Real-time order tracking", "Easy ordering through the Repos App"],
      image: "https://res.cloudinary.com/dt8jmqu8d/image/upload/v1767095542/19_xwtskk.png"
    },
    {
      id: "operations",
      title: "Fuel Operations Made Smarter",
      description: "Meet Repos DATUM — your smart fuel storage and dispensing device built for heavy machines and vehicles.",
      items: ["Track fuel levels in real time", "Ensure zero fuel theft", "Smart sensors to prevent fire, overfill, leakage", "Machine-wise fuel consumption tracking"],
      image: "https://res.cloudinary.com/dt8jmqu8d/image/upload/v1767000351/Firefly_Gemini_Flash_The_attached_image_is_our_product_datum_used_for_refilling._it_is_a_storage_tank_of_968554_pf44gm.png"
    },
    {
      id: "payments",
      title: "Fuel Payments Made Seamless",
      description: "Fuel now. Pay later. Keep your logistics operations running without cash-flow stress with Repos Pay.",
      items: ["15 + 7 days interest-free credit", "Flexible payment options", "Easy cash-flow management", "No downtime due to fuel shortage"],
      image: "https://res.cloudinary.com/dt8jmqu8d/image/upload/v1767096944/Untitled-1_zgsach.jpg"
    },
    {
      id: "management",
      title: "Fuelling at Your Fingertips",
      description: "Get full visibility of your fueling with the Repos App. Manage diesel for every vehicle of your fleet from anywhere.",
      items: ["Place fuel orders instantly", "Track deliveries live", "Monitor fuel levels, usage & quality", "Access real-time reports securely"],
      image: "https://res.cloudinary.com/dt8jmqu8d/image/upload/v1767096629/Analytics_bmfzcz.png"
    }
  ],
  benefits: [
    { title: "No fuel shortages", icon: "https://cdn-icons-png.flaticon.com/512/3233/3233829.png" },
    { title: "Zero theft", icon: "https://cdn-icons-png.flaticon.com/512/3067/3067451.png" },
    { title: "No manual tracking", icon: "https://cdn-icons-png.flaticon.com/512/3208/3208615.png" },
    { title: "No more cash-flow stress", icon: "https://cdn-icons-png.flaticon.com/512/2845/2845811.png" }
  ]
};

export const MINING_PAGE_DATA: IndustryPageContent = {
  hero: {
    title: 'Mining Industry',
    subtitle: 'Uninterrupted power for high-intensity extraction.',
    image: 'https://res.cloudinary.com/dt8jmqu8d/image/upload/v1767098790/mining_fybp3f.png'
  },
  problemStatement: {
    title: "Remote sites shouldn't mean energy chaos.",
    description: "Mining happens in some of the earth's toughest terrains. When fuel runs low in a remote pit, production stops and millions are lost. Repos bridges the gap with intelligent distribution that thrives in extreme environments."
  },
  stats: [
    { label: 'Fuel Loss Avoided', value: '100', unit: '%' },
    { label: 'Site Efficiency', value: '40', unit: '%' },
    { label: 'Operational Uptime', value: '24/7' }
  ],
  pillars: [
    {
      id: "procurement",
      title: "Remote Procurement Simplified",
      description: "Logistics to the most remote sites handled with PESO-compliant precision.",
      items: ["Extreme terrain delivery", "Legal compliance guaranteed", "Satellite-based order tracking", "Bulk order optimization"],
      image: "https://res.cloudinary.com/dt8jmqu8d/image/upload/v1767095542/19_xwtskk.png"
    },
    {
      id: "operations",
      title: "Smart Storage for Remote Sites",
      description: "Repos DATUM provides ruggedized fuel storage that monitors every drop in harsh mining environments.",
      items: ["Live inventory monitoring", "Tamper-proof security", "Environmental leak sensors", "Heavy machine consumption analytics"],
      image: "https://res.cloudinary.com/dt8jmqu8d/image/upload/v1767000351/Firefly_Gemini_Flash_The_attached_image_is_our_product_datum_used_for_refilling._it_is_a_storage_tank_of_968554_pf44gm.png"
    },
    {
      id: "payments",
      title: "Uninterrupted Cash Flow",
      description: "Never pause extraction due to payment delays. Repos Pay keeps your heavy machines running.",
      items: ["Custom credit cycles", "Instant digital payments", "Transparent billing across sites", "Consolidated energy accounting"],
      image: "https://res.cloudinary.com/dt8jmqu8d/image/upload/v1767096944/Untitled-1_zgsach.jpg"
    },
    {
      id: "management",
      title: "Complete Fleet Control",
      description: "Manage energy for a massive fleet of excavators, haulers, and gensets from a single dashboard.",
      items: ["Fleet-wide fuel visibility", "Predictive refill alerts", "Usage efficiency reports", "Secure cloud data access"],
      image: "https://res.cloudinary.com/dt8jmqu8d/image/upload/v1767096629/Analytics_bmfzcz.png"
    }
  ],
  benefits: [
    { title: "Remote reliability", icon: "https://cdn-icons-png.flaticon.com/512/3233/3233829.png" },
    { title: "Zero pilferage", icon: "https://cdn-icons-png.flaticon.com/512/3067/3067451.png" },
    { title: "Digital tracking", icon: "https://cdn-icons-png.flaticon.com/512/3208/3208615.png" },
    { title: "Credit facility", icon: "https://cdn-icons-png.flaticon.com/512/2845/2845811.png" }
  ]
};