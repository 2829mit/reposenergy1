
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBrands from './components/TrustedBrands';
import RPSPage from './components/RPSPage';
import Footer from './components/Footer';
import { MenuCategory, Page } from './types';

const App: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<MenuCategory>(null);
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    setActiveMenu(null);
  };

  return (
    <div className="relative min-h-screen bg-white text-gray-900 flex flex-col">
      <Navbar 
        activeMenu={activeMenu} 
        onMenuHover={setActiveMenu}
        onNavigate={handleNavigate}
      />
      
      <main className="relative flex-grow">
        {currentPage === 'home' ? (
          <>
            <Hero />
            
            {/* Trusted Brands Section */}
            <TrustedBrands />
            
            {/* Bottom Ecosystem Video Section */}
            <section className="relative w-full h-[60vh] md:h-screen overflow-hidden bg-black">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover opacity-90"
              >
                <source src="https://res.cloudinary.com/dt8jmqu8d/video/upload/v1764178964/Transforming_Energy_Distribution_through_Repos_Ecosystem_ayqp2x.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            </section>
          </>
        ) : (
          <RPSPage />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;
