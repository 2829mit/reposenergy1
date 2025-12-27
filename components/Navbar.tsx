
import React, { useRef } from 'react';
import { MENU_ITEMS, PRODUCTS } from '../constants';
import { MenuCategory, Page } from '../types';

interface NavbarProps {
  activeMenu: MenuCategory;
  onMenuHover: (menu: MenuCategory) => void;
  onNavigate: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeMenu, onMenuHover, onNavigate }) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleMouseLeave = () => {
    onMenuHover(null);
  };

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 flex flex-col"
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative z-50 flex items-center justify-between px-12 py-5 bg-white shadow-sm transition-colors duration-300">
        <div 
          className="flex-shrink-0 cursor-pointer"
          onClick={() => onNavigate('home')}
        >
          <img 
            src="https://i.postimg.cc/52fvQyLD/Repos-New-Logo-V1-1.png" 
            alt="Repos Energy" 
            className="h-10 w-auto object-contain"
          />
        </div>

        <div className="hidden lg:flex items-center space-x-2">
          {MENU_ITEMS.map((item) => (
            <button
              key={item}
              onMouseEnter={() => onMenuHover(item as MenuCategory)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-black/5 text-gray-800 ${
                activeMenu === item ? 'text-black bg-black/5' : ''
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-4 text-gray-800">
          <button className="p-2 rounded-full hover:bg-black/5 transition-all duration-200">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button className="p-2 rounded-full hover:bg-black/5 transition-all duration-200">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>
        </div>
      </div>

      <div 
        ref={dropdownRef}
        className={`absolute top-0 left-0 right-0 bg-white transition-all duration-500 ease-in-out overflow-hidden shadow-2xl ${
          activeMenu === 'Products' ? 'max-h-[70vh] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="pt-24 pb-16 px-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {PRODUCTS.map((product) => (
              <div 
                key={product.id} 
                onClick={() => product.id === 'rps' && onNavigate('rps')}
                className="group cursor-pointer flex flex-col items-center text-center space-y-4"
              >
                <div className="w-full aspect-[4/3] overflow-hidden rounded-lg bg-gray-50">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-black">{product.name}</h3>
                  <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {activeMenu && activeMenu !== 'Products' && (
        <div className="absolute top-0 left-0 right-0 bg-white shadow-2xl transition-all duration-300 pt-24 pb-12 px-12 opacity-100">
           <div className="max-w-7xl mx-auto">
             <h2 className="text-2xl font-light mb-8 text-black">{activeMenu}</h2>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm font-medium text-gray-600">
               <a href="#" className="hover:underline">Strategic Outlook</a>
               <a href="#" className="hover:underline">Global Impact</a>
               <a href="#" className="hover:underline">Integration Guide</a>
               <a href="#" className="hover:underline">Sustainability Report</a>
             </div>
           </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
