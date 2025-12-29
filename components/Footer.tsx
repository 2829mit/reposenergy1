
import React from 'react';

const Footer: React.FC = () => {
  const links = [
    'Privacy & Legal',
    'Vehicle Recalls',
    'Contact',
    'News',
    'Get Updates',
    'Locations',
    'Learn'
  ];

  return (
    <footer className="bg-black text-white/60 py-8 lg:py-5 px-6 md:px-12 flex flex-col lg:flex-row items-center justify-center gap-x-6 gap-y-4 text-[12px] font-medium tracking-tight">
      <span className="text-white/80">Repos © 2025</span>
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
        {links.map((link) => (
          <a 
            key={link} 
            href="#" 
            className="hover:text-white transition-colors duration-200"
          >
            {link}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
