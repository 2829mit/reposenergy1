import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBrands from './components/TrustedBrands';
import ProductDetailPage from './components/RPSPage';
import AboutUsPage from './components/AboutUsPage';
import IndustrySolutionPage from './components/InfrastructurePage';
import Footer from './components/Footer';
import { MenuCategory, Page } from './types';
import { INFRASTRUCTURE_PAGE_DATA, MANUFACTURING_PAGE_DATA, LOGISTICS_PAGE_DATA, MINING_PAGE_DATA } from './constants';

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

  const renderContent = () => {
    if (currentPage === 'home') {
      return (
        <>
          <Hero />
          <TrustedBrands />
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
      );
    }
    
    if (currentPage === 'about-us') {
      return (
        <AboutUsPage 
          onNavigateHome={() => handleNavigate('home')}
          onNavigateToApp={() => handleNavigate('rps')}
          onExploreClick={() => console.log('Explore clicked')}
          onReposPayClick={() => console.log('Repos Pay clicked')}
        />
      );
    }

    if (currentPage === 'infrastructure') {
      return <IndustrySolutionPage data={INFRASTRUCTURE_PAGE_DATA} />;
    }

    if (currentPage === 'manufacturing') {
      return <IndustrySolutionPage data={MANUFACTURING_PAGE_DATA} />;
    }

    if (currentPage === 'logistics') {
      return <IndustrySolutionPage data={LOGISTICS_PAGE_DATA} />;
    }

    if (currentPage === 'mining') {
      return <IndustrySolutionPage data={MINING_PAGE_DATA} />;
    }

    return <ProductDetailPage productId={currentPage} />;
  };

  return (
    <div className="relative min-h-screen bg-white text-gray-900 flex flex-col">
      <Navbar 
        activeMenu={activeMenu} 
        onMenuHover={setActiveMenu}
        onNavigate={handleNavigate}
      />
      
      {/* Reduced Intensity Backdrop Blur Overlay - Subtle & Premium */}
      <div 
        className={`fixed inset-0 z-40 pointer-events-none transition-all duration-700 ease-in-out ${
          activeMenu !== null ? 'opacity-100 backdrop-blur-sm bg-black/5' : 'opacity-0 backdrop-blur-none bg-transparent'
        }`}
      />

      <main className="relative flex-grow">
        {renderContent()}
      </main>

      <Footer />
    </div>
  );
};

export default App;