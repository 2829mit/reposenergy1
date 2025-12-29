
import React, { useEffect, useRef, useState } from 'react';
import { PRODUCT_PAGE_DATA } from '../constants';

interface ProductDetailPageProps {
  productId: string;
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ productId }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedBtn, setSelectedBtn] = useState<'order' | 'demo'>('order');
  const statsRef = useRef<HTMLDivElement>(null);
  const techCarouselRef = useRef<HTMLDivElement>(null);
  const safetyCarouselRef = useRef<HTMLDivElement>(null);
  const efficientCarouselRef = useRef<HTMLDivElement>(null);

  const data = PRODUCT_PAGE_DATA[productId] || PRODUCT_PAGE_DATA['rps'];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [productId]);

  const scrollCarousel = (ref: React.RefObject<HTMLDivElement | null>, direction: 'left' | 'right', desktopWidth: number) => {
    if (ref.current) {
      const isMobile = window.innerWidth < 1024;
      const scrollAmount = isMobile ? window.innerWidth * 0.85 : desktopWidth + 32;
      ref.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-white pt-[56px]">
      {/* Hero Image Section */}
      <section className="relative w-full h-[80vh] lg:h-[90vh] overflow-hidden">
        <img 
          src={data.hero.image} 
          alt={`${data.hero.title} Hero`} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-start pt-20 lg:pt-24 text-white">
          <div className="text-center animate-hero flex flex-col items-center px-4">
            <div className="mb-6 lg:mb-10">
              <h1 className="text-[40px] lg:text-[56px] font-semibold tracking-tight mb-1 drop-shadow-md leading-tight">{data.hero.title}</h1>
              <p className="text-[16px] lg:text-[18px] font-medium opacity-90 drop-shadow-sm">{data.hero.subtitle}</p>
              <div className="mt-4">
                <a href="#" className="text-[13px] lg:text-[14px] font-medium underline underline-offset-[4px] decoration-white/60 hover:decoration-white transition-all">
                  Incentives Available
                </a>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-6">
              <button 
                onClick={() => setSelectedBtn('order')}
                className={`w-full sm:w-[200px] h-[40px] rounded-[4px] font-medium text-[14px] transition-all flex items-center justify-center shadow-lg backdrop-blur-sm ${
                  selectedBtn === 'order' ? 'bg-[#3E6AE1] text-white' : 'bg-white/90 text-[#393c41] hover:bg-white'
                }`}
              >
                Order Now
              </button>
              <button 
                onClick={() => setSelectedBtn('demo')}
                className={`w-full sm:w-[200px] h-[40px] rounded-[4px] font-medium text-[14px] transition-all flex items-center justify-center shadow-lg backdrop-blur-sm ${
                  selectedBtn === 'demo' ? 'bg-[#3E6AE1] text-white' : 'bg-white/90 text-[#393c41] hover:bg-white'
                }`}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Impactful Stats Section */}
      <section ref={statsRef} className="py-20 lg:py-32 flex items-center justify-center bg-white px-6 lg:px-24">
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl gap-y-10 md:gap-y-0">
          {data.stats.map((stat, idx) => (
            <React.Fragment key={idx}>
              <div className={`flex-1 flex flex-col items-center px-4 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: `${idx * 200}ms` }}>
                 <div className="flex flex-col items-center text-center">
                    <div className="flex items-baseline text-[#171A20]">
                      <span className="text-[48px] lg:text-[64px] leading-none font-medium tracking-[-0.02em]">{stat.value}</span>
                      {stat.unit && <span className="text-[18px] lg:text-[24px] font-medium ml-1">{stat.unit}</span>}
                    </div>
                    <p className="text-[16px] lg:text-[20px] text-[#5C5E62] font-normal mt-2">{stat.label}</p>
                 </div>
              </div>
              {idx < data.stats.length - 1 && <div className="hidden md:block w-[1px] h-[64px] bg-gray-200 self-center"></div>}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* Advanced Ecosystem Section */}
      <section className="flex flex-col items-center justify-center bg-white overflow-hidden pb-16 px-6 lg:px-12">
        <div className="relative flex flex-col items-center w-full max-w-[1521px] lg:h-[1128px]">
          <div className="relative overflow-hidden rounded-[9px] w-full lg:w-[1425px] aspect-video lg:aspect-auto lg:h-[1024px]">
            <img 
              src={data.advancedEcosystemImage} 
              alt="Advanced Ecosystem Detail" 
              className="w-full h-full object-cover block" 
            />
          </div>
          <div className="mt-8 space-y-4 w-full text-center">
            <h2 className="text-[32px] lg:text-[48px] leading-tight text-[#171A20] font-medium">Advanced Ecosystem</h2>
          </div>
        </div>
      </section>

      {/* Next Level Technology Carousel Section */}
      <section className="relative z-10 bg-white lg:h-[712px] py-16 lg:py-0">
        <div className="w-full h-full relative group">
          <button 
            onClick={() => scrollCarousel(techCarouselRef, 'left', 1196)} 
            className="hidden lg:flex absolute left-[40px] lg:left-[200px] top-[290px] -translate-y-1/2 z-20 p-4 rounded-full bg-white/10 backdrop-blur-lg text-white border border-white/20 hover:bg-white/30 transition-all opacity-0 group-hover:opacity-100 items-center justify-center"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button 
            onClick={() => scrollCarousel(techCarouselRef, 'right', 1196)} 
            className="hidden lg:flex absolute right-[40px] top-[290px] -translate-y-1/2 z-20 p-4 rounded-full bg-white/10 backdrop-blur-lg text-white border border-white/20 hover:bg-white/30 transition-all opacity-0 group-hover:opacity-100 items-center justify-center"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>

          <div 
            ref={techCarouselRef} 
            className="flex h-full space-x-6 lg:space-x-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-6 lg:px-0" 
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="shrink-0 w-0 lg:w-[170px] h-full snap-start" />
            {data.techItems.map((item, idx) => (
              <div key={idx} className="snap-start flex flex-col shrink-0 justify-center h-full w-[85vw] lg:w-[1196px]">
                <div className="relative overflow-hidden rounded-[9px] bg-gray-100 mb-6 lg:mb-8 aspect-video lg:h-[580px] lg:aspect-auto">
                  {item.video ? (
                    <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                      <source src={item.video} type="video/mp4" />
                    </video>
                  ) : (
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  )}
                </div>
                <div className="space-y-2 w-full">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">Next Level Technology</span>
                  <h3 className="text-[24px] lg:text-[28px] leading-tight text-[#171A20] font-medium">{item.title}</h3>
                  <p className="text-[14px] lg:text-[16px] leading-[24px] text-[#5C5E62] font-normal lg:max-w-2xl">{item.description}</p>
                </div>
              </div>
            ))}
            <div className="shrink-0 w-0 lg:w-[170px] h-full snap-start" />
          </div>
        </div>
      </section>

      {/* Next Level Performance Section */}
      <section className="flex flex-col items-center justify-center bg-white overflow-hidden py-16 px-6 lg:px-12">
        <div className="relative flex flex-col items-center w-full max-w-[1425px] lg:h-[720px]">
          <div className="relative overflow-hidden rounded-[9px] bg-gray-100 w-full lg:w-[1196px] aspect-video lg:h-[580px] lg:aspect-auto">
             <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                <source src={data.performance.video} type="video/mp4" />
              </video>
          </div>
          <div className="mt-8 space-y-2 w-full text-left lg:max-w-[1196px]">
            <h2 className="text-[32px] lg:text-[48px] leading-tight text-[#171A20] font-medium">{data.performance.title}</h2>
            <p className="text-[16px] lg:text-[20px] leading-normal lg:leading-[28px] text-[#5C5E62] font-normal">{data.performance.description}</p>
          </div>
        </div>
      </section>

      {/* Safety Carousel Section */}
      <section className="bg-white group relative lg:h-[712px] py-16 lg:py-0">
        <div className="w-full relative h-full flex flex-col justify-center">
          <button 
            onClick={() => scrollCarousel(safetyCarouselRef, 'left', 800)} 
            className="hidden lg:flex absolute left-[40px] lg:left-[200px] top-[290px] -translate-y-1/2 z-20 p-4 rounded-full bg-white/10 backdrop-blur-lg text-white border border-white/20 hover:bg-white/30 transition-all opacity-0 group-hover:opacity-100 items-center justify-center"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button 
            onClick={() => scrollCarousel(safetyCarouselRef, 'right', 800)} 
            className="hidden lg:flex absolute right-[40px] top-[290px] -translate-y-1/2 z-20 p-4 rounded-full bg-white/10 backdrop-blur-lg text-white border border-white/20 hover:bg-white/30 transition-all opacity-0 group-hover:opacity-100 items-center justify-center"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>

          <div 
            ref={safetyCarouselRef} 
            className="flex h-full space-x-6 lg:space-x-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-6 lg:px-0" 
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="shrink-0 w-0 lg:w-[170px] h-full snap-start" />
            {data.safetyItems.map((item, idx) => (
              <div key={idx} className="snap-start flex flex-col shrink-0 justify-center h-full w-[85vw] lg:w-[800px]">
                <div className="relative overflow-hidden rounded-[9px] bg-gray-100 mb-6 lg:mb-8 aspect-video lg:h-[580px] lg:aspect-auto">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="space-y-2 w-full">
                  <h2 className="text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase">Safety</h2>
                  <h3 className="text-[24px] lg:text-[28px] leading-tight text-[#171A20] font-medium">{item.title}</h3>
                  <p className="text-[14px] lg:text-[16px] leading-normal lg:leading-[24px] text-[#5C5E62] font-normal">{item.description}</p>
                </div>
              </div>
            ))}
            <div className="shrink-0 w-0 lg:w-[170px] h-full snap-start" />
          </div>
        </div>
      </section>

      {/* Autonomous / Feature 1 Section */}
      <section className="flex flex-col items-center justify-center bg-white overflow-hidden py-16 px-6 lg:px-12">
        <div className="relative flex flex-col items-center w-full max-w-[1521px] lg:h-[720px]">
          <div className="relative overflow-hidden rounded-[9px] bg-gray-100 w-full lg:w-[1183px] aspect-video lg:h-[580px] lg:aspect-auto">
            <img 
              src={data.feature1.image} 
              alt={data.feature1.title} 
              className="w-full h-full object-cover block" 
            />
          </div>
          <div className="mt-8 space-y-4 w-full text-left lg:max-w-[1183px]">
            <h2 className="text-[32px] lg:text-[48px] leading-tight text-[#171A20] font-medium">{data.feature1.title}</h2>
            <p className="text-[16px] lg:text-[20px] leading-normal lg:leading-[28px] text-[#5C5E62] font-normal">{data.feature1.description}</p>
          </div>
        </div>
      </section>

      {/* Enterprise Intelligence / Feature 2 Section */}
      <section className="flex flex-col items-center justify-center bg-[#222222] text-white overflow-hidden py-16 px-6 lg:px-12">
        <div className="relative flex flex-col items-center w-full max-w-[1521px] lg:h-[744px]">
          <div className="relative overflow-hidden rounded-[9px] bg-gray-800 shadow-2xl w-full lg:w-[1425px] aspect-video lg:h-[580px] lg:aspect-auto">
            <img 
              src={data.feature2.image} 
              alt={data.feature2.title} 
              className="w-full h-full object-cover block" 
            />
          </div>
          <div className="mt-8 space-y-4 w-full text-left lg:max-w-[1425px]">
            <h3 className="text-[28px] lg:text-[34px] leading-tight font-medium">{data.feature2.title}</h3>
            <p className="text-[16px] lg:text-[20px] leading-normal lg:leading-[28px] text-gray-300 font-normal">{data.feature2.description}</p>
          </div>
        </div>
      </section>

      {/* Feature 3 Section */}
      <section className="flex flex-col items-center justify-center bg-[#222222] text-white overflow-hidden py-16 px-6 lg:px-12">
        <div className="relative flex flex-col items-center w-full max-w-[1521px] lg:h-[744px]">
          <div className="relative overflow-hidden rounded-[9px] bg-gray-800 shadow-2xl w-full lg:w-[1425px] aspect-video lg:h-[580px] lg:aspect-auto">
            <img 
              src={data.feature3.image} 
              alt={data.feature3.title} 
              className="w-full h-full object-cover block" 
            />
          </div>
          <div className="mt-8 space-y-4 w-full text-left lg:max-w-[1425px]">
            <h3 className="text-[28px] lg:text-[34px] leading-tight font-medium">{data.feature3.title}</h3>
            <p className="text-[16px] lg:text-[20px] leading-normal lg:leading-[28px] text-gray-300 font-normal">{data.feature3.description}</p>
          </div>
        </div>
      </section>

      {/* Efficient Carousel Section */}
      <section className="bg-[#222222] group relative lg:h-[712px] py-16 lg:py-0">
        <div className="w-full text-white relative h-full flex flex-col justify-center">
          <button 
            onClick={() => scrollCarousel(efficientCarouselRef, 'left', 800)} 
            className="hidden lg:flex absolute left-[40px] lg:left-[200px] top-[290px] -translate-y-1/2 z-20 p-4 rounded-full bg-white/10 backdrop-blur-lg text-white border border-white/20 hover:bg-white/30 transition-all opacity-0 group-hover:opacity-100 items-center justify-center"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button 
            onClick={() => scrollCarousel(efficientCarouselRef, 'right', 800)} 
            className="hidden lg:flex absolute right-[40px] top-[290px] -translate-y-1/2 z-20 p-4 rounded-full bg-white/10 backdrop-blur-lg text-white border border-white/20 hover:bg-white/30 transition-all opacity-0 group-hover:opacity-100 items-center justify-center"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>

          <div 
            ref={efficientCarouselRef} 
            className="flex h-full space-x-6 lg:space-x-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-6 lg:px-0" 
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="shrink-0 w-0 lg:w-[170px] h-full snap-start" />
            {data.efficientItems.map((item, idx) => (
              <div key={idx} className="snap-start flex flex-col shrink-0 justify-center h-full w-[85vw] lg:w-[800px]">
                <div className="relative overflow-hidden rounded-[9px] bg-gray-800 mb-6 lg:mb-8 aspect-video lg:h-[580px] lg:aspect-auto">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="space-y-2 w-full">
                  <h2 className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">Efficient by Design</h2>
                  <h3 className="text-[24px] lg:text-[28px] leading-tight font-medium">{item.title}</h3>
                  <p className="text-[14px] lg:text-[16px] leading-normal lg:leading-[24px] text-gray-300 font-normal">{item.description}</p>
                </div>
              </div>
            ))}
            <div className="shrink-0 w-0 lg:w-[170px] h-full snap-start" />
          </div>
        </div>
      </section>

      {/* Go Anywhere Section */}
      <section className="flex flex-col items-center justify-center bg-white overflow-hidden py-16 px-6 lg:px-12">
        <div className="relative flex flex-col items-center w-full max-w-[1521px] lg:h-[1444px]">
          <div className="relative overflow-hidden rounded-[9px] bg-gray-100 w-full lg:w-[1425px] aspect-video lg:h-[1024px] lg:aspect-auto">
            <img 
              src={data.goAnywhere.image} 
              alt="Go Anywhere" 
              className="w-full h-full object-cover block" 
            />
          </div>
          <div className="mt-8 space-y-4 w-full text-left lg:max-w-[1425px]">
            <h3 className="text-[28px] lg:text-[34px] leading-tight text-[#171A20] font-medium">{data.goAnywhere.title}</h3>
            <p className="text-[16px] lg:text-[20px] leading-normal lg:leading-[28px] text-[#5C5E62] font-normal">{data.goAnywhere.description}</p>
          </div>
        </div>
      </section>

      {/* Concluding Section */}
      <section className="relative w-full h-[70vh] lg:h-[90vh] overflow-hidden">
        <img 
          src={data.hero.image} 
          alt={`${data.hero.title} Conclusion`} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-start pt-20 lg:pt-24 text-white pointer-events-none px-4">
          <div className="text-center animate-hero flex flex-col items-center">
            <div className="mb-10">
              <h2 className="text-[40px] lg:text-[56px] font-semibold tracking-tight mb-1 drop-shadow-md">{data.hero.title}</h2>
              <p className="text-[16px] lg:text-[18px] font-medium opacity-90 drop-shadow-sm">{data.hero.subtitle}</p>
              <div className="mt-4">
                <span className="text-[13px] lg:text-[14px] font-medium opacity-60">
                  Experience the New Standard
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeInHeroOverlay {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-hero {
          animation: fadeInHeroOverlay 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default ProductDetailPage;
