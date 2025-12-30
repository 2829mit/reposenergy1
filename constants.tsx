import { Product, IndustryPageContent, Solution } from './types';

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
    name: 'Power Gen',
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

export const MENU_ITEMS = ['Fuel Intelligence Platform', 'Industries', 'Solutions', 'Resources', 'About Us', 'Careers'];

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
  id: 'infrastructure',
  hero: {
    title: 'Infrastructure & Construction',
    subtitle: 'Fuel issuance becomes intentional, not assumed.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2400'
  },
  context: {
    title: "Ground Reality",
    description: "Infrastructure projects operate in dynamic, temporary, and geographically spread environments. Construction sites move. Assets move. Teams change. Vendors rotate. Project managers are focused on timelines, while fuel quietly becomes a blind spot.",
    fuelConsumers: ["Excavators", "Loaders", "Cranes", "Pavers", "Batching Plants", "Site DGs"]
  },
  failures: {
    title: "Why the Current System Fails",
    items: [
      "Fuel is issued manually without real-time verification",
      "Logbooks are filled after operations, not during",
      "No linkage between fuel issued and actual work done",
      "Subcontractors control both machine and fuel",
      "Head office receives delayed, aggregated data"
    ]
  },
  useCases: {
    title: "The Repos Protocol",
    description: "We replace chaotic site operations with a linear, verified digital workflow.",
    items: [
      { title: "Identification", description: "Every asset is digitally tagged. The dispenser only activates when it recognizes an authorized machine." },
      { title: "Perimeter Control", description: "Geo-fencing ensures fuel is only dispensed within the designated project boundaries." },
      { title: "Digital Handshake", description: "Automated transaction recording replaces the manual logbook, linking liters to engine hours instantly." },
      { title: "Project Intelligence", description: "Data is aggregated by project code, enabling real-time cost-per-hour analysis." }
    ]
  },
  valueProp: {
    title: "Fuel Intelligence Layer",
    description: "Repos connects fuel procurement, on-ground dispensing events, and asset consumption behavior. Fuel moves from a trust-based process to a data-backed system.",
    items: [
      "Fuel Procurement",
      "Dispensing Events",
      "Consumption Behavior",
      "Project Reporting"
    ]
  },
  benefits: {
    title: "Commercial Impact",
    items: [
      { metric: "15%", label: "Direct Savings", description: "Immediate reduction in fuel procurement costs." },
      { metric: "100%", label: "Audit Trail", description: "Defensible data for every liter purchased and consumed." },
      { metric: "Zero", label: "Disputes", description: "Elimination of vendor-contractor friction." }
    ]
  },
  cta: {
    text: "If fuel is impacting your project margins silently, it deserves more than manual tracking. Connect with Repos to bring control to construction fuel operations."
  }
};

export const LOGISTICS_PAGE_DATA: IndustryPageContent = {
  id: 'logistics',
  hero: {
    title: 'Logistics & Transportation',
    subtitle: 'Fuel stops leaking through scale.',
    image: 'https://res.cloudinary.com/dt8jmqu8d/image/upload/v1767098797/logistics_ibnrlh.png'
  },
  context: {
    title: "Ground Reality",
    description: "Logistics businesses run on movement. Hundreds or thousands of vehicles operate across routes, cities, and states. Fuel is the largest variable cost, consumed daily, controlled by drivers and vendors on ground.",
    fuelConsumers: ["Heavy Duty Trucks", "LCVs", "Refrigerated Vans", "Delivery Fleets"]
  },
  failures: {
    title: "Why the Current System Fails",
    items: [
      "Fuel cards and cash lack ground truth",
      "Pilferage during refueling is hard to detect",
      "No real-time validation of fuel quantity",
      "Fuel issued is not correlated with distance or load",
      "Exceptions are discovered days or weeks later"
    ]
  },
  useCases: {
    title: "The Repos Protocol",
    description: "We enforce a strict chain of custody from the terminal to the truck tank.",
    items: [
      { title: "Route Validation", description: "Fueling is authorized only when the vehicle is on its assigned route." },
      { title: "Nozzle-to-Tank", description: "RFID interlock prevents fuel from being dispensed into unauthorized containers." },
      { title: "Mileage Audit", description: "Real-time odometer sync cross-references fuel intake with distance traveled." },
      { title: "Pattern alerts", description: "Algorithms detect sudden drops in mileage or irregular fueling stops." }
    ]
  },
  valueProp: {
    title: "Operating System for Fleets",
    description: "Repos becomes the fuel operating system for fleets, unifying procurement channels, on-ground fueling events, and vehicle consumption behavior. Fuel data becomes actionable, not retrospective.",
    items: [
      "Unified Procurement",
      "Fueling Validation",
      "Consumption Analysis",
      "Actionable Data"
    ]
  },
  benefits: {
    title: "Commercial Impact",
    items: [
      { metric: "8%", label: "EBITDA Impact", description: "Direct improvement in bottom-line profitability." },
      { metric: "Real-Time", label: "Fleet Visibility", description: "Live tracking of fuel levels across the entire fleet." },
      { metric: "100%", label: "Proof of Fill", description: "Digital verification for every payment made." }
    ]
  },
  cta: {
    text: "When margins are thin, visibility matters. Repos helps logistics companies regain fuel control at scale."
  }
};

export const MINING_PAGE_DATA: IndustryPageContent = {
  id: 'mining',
  hero: {
    title: 'Mining & Natural Resources',
    subtitle: 'Protect every liter in extreme environments.',
    image: 'https://res.cloudinary.com/dt8jmqu8d/image/upload/v1767098790/mining_fybp3f.png'
  },
  context: {
    title: "Ground Reality",
    description: "Mining operations run in remote, high-intensity environments. Heavy equipment operates for long hours with extremely high fuel consumption. A single asset can consume thousands of liters every month.",
    fuelConsumers: ["Dumpers", "Excavators", "Drills", "Continuous-shift Assets"]
  },
  failures: {
    title: "Why the Current System Fails",
    items: [
      "Manual fuel logs with no verification",
      "Shift-wise discrepancies are hard to trace",
      "Fuel theft blends into operational variance",
      "No real-time mine-level visibility",
      "Audits happen after losses occur"
    ]
  },
  useCases: {
    title: "The Repos Protocol",
    description: "We bring terminal-grade control to the pit side.",
    items: [
      { title: "Mobile Station", description: "High-speed mobile dispensers bring fuel to the heavy earthmovers, eliminating dead mileage." },
      { title: "Shift Balance", description: "Automated reconciliation at every shift change ensures zero unaccounted liters." },
      { title: "Burn Rate Analysis", description: "Real-time monitoring of fuel-to-tonnage ratio for predictive maintenance." },
      { title: "Remote Inventory", description: "Satellite-linked tank monitoring manages stock levels at remote dumps." }
    ]
  },
  valueProp: {
    title: "Single Source of Truth",
    description: "Repos functions as a single source of truth for fuel in extreme environments. It connects fuel procurement, physical dispensing validation, and asset-level consumption intelligence.",
    items: [
      "Procurement Logic",
      "Dispensing Validation",
      "Asset Intelligence",
      "Transparent Behavior"
    ]
  },
  benefits: {
    title: "Commercial Impact",
    items: [
      { metric: "12%", label: "OpEx Reduction", description: "Significant cut in the mine's largest operational expense." },
      { metric: "100%", label: "Asset Uptime", description: "Zero downtime due to fuel stockouts." },
      { metric: "Zero", label: "Pilferage", description: "Complete elimination of fuel theft rings." }
    ]
  },
  cta: {
    text: "In mining, small inefficiencies multiply fast. Repos helps mining operations protect every liter."
  }
};

export const MANUFACTURING_PAGE_DATA: IndustryPageContent = {
  id: 'manufacturing',
  hero: {
    title: 'Manufacturing & Industrial',
    subtitle: 'Fuel stops being a blind spot.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2400'
  },
  context: {
    title: "Ground Reality",
    description: "Manufacturing plants consume fuel for captive power generation, material handling, and backup equipment. Fuel often sits outside the core ERP focus and becomes operationally invisible.",
    fuelConsumers: ["Captive Power Gen", "Material Handling", "Backup Equipment", "Process Heating"]
  },
  failures: {
    title: "Why the Current System Fails",
    items: [
      "Fuel treated as an indirect cost",
      "Manual plant-level records",
      "No linkage between fuel and output",
      "Delayed identification of inefficiencies",
      "Limited accountability at shift level"
    ]
  },
  useCases: {
    title: "The Repos Protocol",
    description: "Integration of fuel data into the manufacturing execution system.",
    items: [
      { title: "Energy Correlation", description: "Directly linking fuel input to captive power output units." },
      { title: "Cost Allocation", description: "Automated cost-center billing for fuel usage across different plant departments." },
      { title: "Just-in-Time", description: "Automated reordering ensures optimal inventory levels without capital lockup." },
      { title: "ESG Reporting", description: "Automated carbon footprint tracking for environmental compliance." }
    ]
  },
  valueProp: {
    title: "Operational Clarity",
    description: "Repos brings clarity and control to industrial fuel usage. It bridges physical fuel flow, asset consumption, and operational output metrics.",
    items: [
      "Physical Flow",
      "Asset Consumption",
      "Output Metrics",
      "Managed Input"
    ]
  },
  benefits: {
    title: "Commercial Impact",
    items: [
      { metric: "100%", label: "Power Reliability", description: "Guaranteed backup power availability." },
      { metric: "Zero", label: "Handling Loss", description: "Elimination of spillages during internal transfers." },
      { metric: "Auto", label: "Compliance", description: "Instant generation of environmental audit reports." }
    ]
  },
  cta: {
    text: "If you digitize production, fuel should not stay manual. Repos helps manufacturers see what was previously invisible."
  }
};

export const GENSETS_PAGE_DATA: IndustryPageContent = {
  id: 'gensets',
  hero: {
    title: 'Power Generation',
    subtitle: 'Fuel control equals margin control.',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=2400'
  },
  context: {
    title: "Ground Reality",
    description: "For DG operators and captive power users, fuel is the primary operational input. Every liter directly impacts cost per unit of power. DGs operate across construction sites, plants, commercial facilities, and remote locations.",
    fuelConsumers: ["DG Sets", "Captive Power Plants", "Mobile Generators", "Backup Systems"]
  },
  failures: {
    title: "Why the Current System Fails",
    items: [
      "Manual refueling processes",
      "No real-time validation",
      "Operators control fuel and machines",
      "No correlation between fuel and energy output",
      "Theft remains undetected"
    ]
  },
  useCases: {
    title: "The Repos Protocol",
    description: "Precision management of the fuel-to-power conversion ratio.",
    items: [
      { title: "Remote Command", description: "Centralized dashboard for monitoring fuel levels at unmanned sites." },
      { title: "Efficiency Watch", description: "Real-time alerts when fuel consumption per kWh deviates from the norm." },
      { title: "Vendor Verification", description: "Digital handshake confirms exactly how much fuel the vendor delivered." },
      { title: "Predictive Fill", description: "Scheduling refills based on burn rate to prevent dry-run shutdowns." }
    ]
  },
  valueProp: {
    title: "Intelligence Backbone",
    description: "Repos acts as the fuel intelligence backbone for power operations. It ensures verified fueling events, asset accountability, and output-aligned consumption.",
    items: [
      "Verified Fueling",
      "Asset Accountability",
      "Output Alignment",
      "Measurable Behavior"
    ]
  },
  benefits: {
    title: "Commercial Impact",
    items: [
      { metric: "100%", label: "Bill Proof", description: "Pay only for the exact liters delivered." },
      { metric: "Zero", label: "Extraction", description: "Instant alerts on any unauthorized fuel removal." },
      { metric: "24/7", label: "Uptime", description: "Proactive management of critical backup power." }
    ]
  },
  cta: {
    text: "When fuel is your biggest cost, guesswork is expensive. Repos helps power operators protect every unit of fuel."
  }
};