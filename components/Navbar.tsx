
import React, { useRef, useState } from 'react';
import { MENU_ITEMS, PRODUCTS, SOLUTIONS, RESOURCES } from '../constants';
import { MenuCategory, Page } from '../types';

interface NavbarProps {
  activeMenu: MenuCategory;
  onMenuHover: (menu: MenuCategory) => void;
  onNavigate: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeMenu, onMenuHover, onNavigate }) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMouseLeave = () => {
    onMenuHover(null);
  };

  const getDropdownContent = () => {
    if (activeMenu === 'Products') {
      return (
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-12">
          {PRODUCTS.map((product) => (
            <div 
              key={product.id} 
              onClick={() => onNavigate(product.id as Page)}
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
      );
    }

    if (activeMenu === 'Solutions') {
      return (
        <div className="max-w-7xl mx-auto mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {SOLUTIONS.map((sol) => (
              <div 
                key={sol.name} 
                className="group cursor-pointer flex flex-col items-center text-center space-y-4"
              >
                <div className="w-full aspect-[4/3] overflow-hidden rounded-lg bg-gray-50">
                  <img 
                    src={sol.image} 
                    alt={sol.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-medium text-black group-hover:underline underline-offset-4">{sol.name}</h3>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (activeMenu === 'Resources') {
      return (
        <div className="max-w-7xl mx-auto mt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {RESOURCES.map((res) => (
              <a 
                key={res} 
                href="#" 
                className="text-[15px] font-medium text-gray-700 hover:text-black hover:underline transition-all underline-offset-4"
              >
                {res}
              </a>
            ))}
          </div>
        </div>
      );
    }

    if (activeMenu) {
      return (
        <div className="max-w-7xl mx-auto mt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm font-medium text-gray-600">
            <a href="#" className="hover:underline">Strategic Outlook</a>
            <a href="#" className="hover:underline">Global Impact</a>
            <a href="#" className="hover:underline">Integration Guide</a>
            <a href="#" className="hover:underline">Sustainability Report</a>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 flex flex-col"
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative z-50 flex items-center justify-between px-6 lg:px-12 h-[56px] bg-white shadow-sm transition-colors duration-300">
        <div 
          className="flex-shrink-0 cursor-pointer flex items-center h-full"
          onClick={() => {
            onNavigate('home');
            setIsMobileMenuOpen(false);
          }}
        >
          <img 
            src="https://i.postimg.cc/52fvQyLD/Repos-New-Logo-V1-1.png" 
            alt="Repos Energy" 
            className="h-8 lg:h-9 w-auto object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-2 h-full">
          {MENU_ITEMS.map((item) => (
            <button
              key={item}
              onMouseEnter={() => onMenuHover(item as MenuCategory)}
              onClick={() => {
                if (item === 'About Us') onNavigate('about-us');
              }}
              className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all duration-200 hover:bg-black/5 text-gray-800 ${
                activeMenu === item ? 'text-black bg-black/5' : ''
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="flex items-center text-gray-800 h-full">
          {/* Mobile Menu Toggle - Hamburger Icon */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-md bg-black/5 text-gray-800 transition-all duration-200 hover:bg-black/10 flex items-center justify-center"
            aria-label="Open Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Desktop Dropdown Content area */}
      <div 
        ref={dropdownRef}
        className={`hidden lg:block absolute top-0 left-0 right-0 bg-white transition-all duration-500 ease-in-out overflow-hidden shadow-2xl ${
          activeMenu ? 'max-h-[70vh] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="pt-[56px] pb-16 px-12">
          {getDropdownContent()}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 bg-white z-[60] transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center px-6 h-[56px] border-b border-gray-100">
          <img 
            src="https://i.postimg.cc/52fvQyLD/Repos-New-Logo-V1-1.png" 
            alt="Repos Energy" 
            className="h-8 w-auto"
          />
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 rounded-full hover:bg-black/5"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="px-6 py-8 flex flex-col space-y-6 overflow-y-auto max-h-[calc(100vh-56px)]">
          {MENU_ITEMS.map((item) => (
            <div key={item}>
              <button 
                className="text-2xl font-medium text-gray-800 hover:text-black transition-colors"
                onClick={() => {
                  if (item === 'About Us') {
                    onNavigate('about-us');
                    setIsMobileMenuOpen(false);
                  }
                  if (item === 'Products' || item === 'Solutions' || item === 'Resources') {
                    // Stay open or handle sub-menus in mobile later
                  } else {
                    setIsMobileMenuOpen(false);
                  }
                }}
              >
                {item}
              </button>
              
              {/* Mobile Submenu for specific items */}
              {item === 'Solutions' && isMobileMenuOpen && (
                <div className="flex flex-col space-y-4 mt-4 ml-4">
                  {SOLUTIONS.map(sol => (
                    <div key={sol.name} className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-md overflow-hidden bg-gray-100">
                        <img src={sol.image} className="w-full h-full object-cover" />
                      </div>
                      <span className="text-lg text-gray-500">{sol.name}</span>
                    </div>
                  ))}
                </div>
              )}
              {item === 'Resources' && isMobileMenuOpen && (
                <div className="flex flex-col space-y-4 mt-4 ml-4">
                  {RESOURCES.map(res => <a key={res} href="#" className="text-lg text-gray-500">{res}</a>)}
                </div>
              )}
            </div>
          ))}
          
          <div className="pt-8 border-t border-gray-100">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Our Ecosystem</h4>
            <div className="grid grid-cols-2 gap-4">
              {PRODUCTS.map((p) => (
                <div 
                  key={p.id} 
                  className="flex flex-col items-center p-2 rounded-lg bg-gray-50 active:bg-gray-100 transition-colors"
                  onClick={() => {
                    onNavigate(p.id as Page);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <div className="aspect-square w-full rounded-md overflow-hidden mb-2">
                    <img src={p.image} className="w-full h-full object-cover" alt={p.name} />
                  </div>
                  <span className="text-[13px] font-semibold text-gray-800">{p.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
