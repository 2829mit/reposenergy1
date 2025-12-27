
import React, { useEffect, useRef, useState } from 'react';

interface CarouselItem {
  id: number;
  video?: string;
  image?: string;
  title: string;
  description: string;
}

const CAROUSEL_ITEMS: CarouselItem[] = [
  {
    id: 1,
    video: "https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/Model-S-New-Interior-Carousel-Slide-1-Desktop-NA.mp4",
    title: "Precision Engineering",
    description: "Experience unparalleled accuracy in every drop dispensed with our advanced sensor array."
  },
  {
    id: 2,
    video: "https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/Model-S-New-Interior-Carousel-Slide-1-Desktop-NA.mp4",
    title: "Smart Integration",
    description: "Seamlessly connect with your existing fleet management systems through our cloud-native API."
  },
  {
    id: 3,
    video: "https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/Model-S-New-Interior-Carousel-Slide-1-Desktop-NA.mp4",
    title: "Real-time Analytics",
    description: "Gain deep insights into your energy consumption patterns with 24/7 live monitoring dashboard."
  }
];

const SAFETY_ITEMS: CarouselItem[] = [
  {
    id: 1,
    image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-New-Interior-Utility-Carousel-Slide-1-Desktop-NA.png",
    title: "Anti-Spill Technology",
    description: "Advanced shut-off valves and leak detection sensors prevent environmental hazards before they happen."
  },
  {
    id: 2,
    image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-New-Interior-Utility-Carousel-Slide-1-Desktop-NA.png",
    title: "Fire Suppression",
    description: "Multi-layer thermal protection and integrated fire suppression systems ensure maximum operational safety."
  },
  {
    id: 3,
    image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-New-Interior-Utility-Carousel-Slide-1-Desktop-NA.png",
    title: "Secure Access Control",
    description: "Biometric and encrypted digital keys ensure that only authorized personnel can access the fuel ecosystem."
  }
];

const EFFICIENT_ITEMS: CarouselItem[] = [
  {
    id: 1,
    image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-New-Exterior-Carousel-Slide-1-Desktop-NA.png",
    title: "Refined Aerodynamics",
    description: "Every curve is engineered to reduce drag and maximize operational range."
  },
  {
    id: 2,
    image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-New-Exterior-Carousel-Slide-1-Desktop-NA.png",
    title: "Wide Stance Stability",
    description: "Increased footprint provides superior stability during high-speed energy distribution."
  },
  {
    id: 3,
    image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-New-Exterior-Carousel-Slide-1-Desktop-NA.png",
    title: "Precision Handling",
    description: "Enhanced suspension geometry allows for agile maneuvering in tight industrial spaces."
  }
];

const RPSPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedBtn, setSelectedBtn] = useState<'order' | 'demo'>('order');
  const statsRef = useRef<HTMLDivElement>(null);
  const techCarouselRef = useRef<HTMLDivElement>(null);
  const safetyCarouselRef = useRef<HTMLDivElement>(null);
  const efficientCarouselRef = useRef<HTMLDivElement>(null);

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
  }, []);

  const scrollCarousel = (ref: React.RefObject<HTMLDivElement | null>, direction: 'left' | 'right') => {
    if (ref.current) {
      const scrollAmount = 1196 + 32; // width + gap
      ref.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-white pt-20">
      {/* Hero Image Section */}
      <section className="relative w-full h-[90vh] overflow-hidden">
        <img 
          src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Hero-Desktop-US-v2.jpg" 
          alt="Repos Power Station (RPS) Hero" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-start pt-24 text-white">
          <div className="text-center animate-hero flex flex-col items-center">
            <div className="mb-10">
              <h1 className="text-[56px] font-semibold tracking-tight mb-1 drop-shadow-md">RPS</h1>
              <p className="text-[18px] font-medium opacity-90 drop-shadow-sm">Repos Power Station</p>
              <div className="mt-4">
                <a href="#" className="text-[14px] font-medium underline underline-offset-[4px] decoration-white/60 hover:decoration-white transition-all">
                  3.99% APR Available
                </a>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 px-6">
              <button 
                onClick={() => setSelectedBtn('order')}
                className={`w-[200px] h-[40px] rounded-[4px] font-medium text-[14px] transition-all flex items-center justify-center shadow-lg backdrop-blur-sm ${
                  selectedBtn === 'order' ? 'bg-[#3E6AE1] text-white' : 'bg-white/90 text-[#393c41] hover:bg-white'
                }`}
              >
                Order Now
              </button>
              <button 
                onClick={() => setSelectedBtn('demo')}
                className={`w-[200px] h-[40px] rounded-[4px] font-medium text-[14px] transition-all flex items-center justify-center shadow-lg backdrop-blur-sm ${
                  selectedBtn === 'demo' ? 'bg-[#3E6AE1] text-white' : 'bg-white/90 text-[#393c41] hover:bg-white'
                }`}
              >
                Demo Drive
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Impactful Stats Section */}
      <section ref={statsRef} className="py-32 flex items-center justify-center bg-white px-12 md:px-24">
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl gap-y-12 md:gap-y-0">
          <div className={`flex-1 flex flex-col items-center px-4 transition-all duration-1000 delay-100 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
             <div className="flex flex-col items-center text-center">
                <div className="flex items-baseline text-[#171A20]">
                  <span className="text-[64px] leading-[64px] font-medium tracking-[-0.02em]">120</span>
                  <span className="text-[24px] font-medium ml-1">L/m</span>
                </div>
                <p className="text-[20px] leading-[28px] text-[#5C5E62] font-normal mt-2">Speed</p>
             </div>
          </div>
          <div className="hidden md:block w-[1px] h-[64px] bg-gray-200 self-center"></div>
          <div className={`flex-1 flex flex-col items-center px-4 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex flex-col items-center text-center">
                <div className="flex items-baseline text-[#171A20]">
                  <span className="text-[64px] font-medium leading-[64px] tracking-[-0.02em]">100</span>
                  <span className="text-[24px] font-medium ml-1">%</span>
                </div>
                <p className="text-[20px] leading-[28px] text-[#5C5E62] font-normal mt-2">Tracking</p>
            </div>
          </div>
          <div className="hidden md:block w-[1px] h-[64px] bg-gray-200 self-center"></div>
          <div className={`flex-1 flex flex-col items-center px-4 transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex flex-col items-center text-center">
                <div className="flex items-baseline text-[#171A20]">
                  <span className="text-[64px] font-medium leading-[64px] tracking-[-0.02em]">24/7</span>
                </div>
                <p className="text-[20px] leading-[28px] text-[#5C5E62] font-normal mt-2">Monitoring</p>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Ecosystem Section - Precise Sizing: 1521x1128 Container, 1425x1024 Image, 48px Padding */}
      <section className="flex flex-col items-center justify-center bg-white overflow-hidden pb-16">
        <div 
          className="relative flex flex-col items-center px-[48px]"
          style={{ 
            maxWidth: '1521px', 
            width: '100%',
            height: '1128px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <div 
            className="relative overflow-hidden rounded-[9px]"
            style={{ 
              width: '1425px', 
              height: '1024px',
              maxWidth: '100%',
              maxHeight: '100%'
            }}
          >
            <img 
              src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-New-Interior-Desktop-NA.png" 
              alt="Advanced Ecosystem Detail" 
              className="w-full h-full object-cover block" 
            />
          </div>
          <div className="mt-8 space-y-4 w-full text-center">
            <h2 className="text-[48px] leading-[56px] text-[#171A20] font-medium">Advanced Ecosystem</h2>
            <p className="text-[20px] leading-[28px] text-[#5C5E62] font-normal">A detailed view of the infrastructure powering the future of distribution.</p>
          </div>
        </div>
      </section>

      {/* Next Level Technology Carousel Section */}
      <section className="relative z-10 bg-white" style={{ height: '712px' }}>
        <div className="w-full h-full relative group">
          {/* Navigation Arrows - Inside the media area */}
          <button 
            onClick={() => scrollCarousel(techCarouselRef, 'left')} 
            className="absolute left-[200px] top-[290px] -translate-y-1/2 z-20 p-4 rounded-full bg-white/10 backdrop-blur-lg text-white border border-white/20 hover:bg-white/30 transition-all opacity-0 group-hover:opacity-100 flex items-center justify-center"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button 
            onClick={() => scrollCarousel(techCarouselRef, 'right')} 
            className="absolute right-[40px] top-[290px] -translate-y-1/2 z-20 p-4 rounded-full bg-white/10 backdrop-blur-lg text-white border border-white/20 hover:bg-white/30 transition-all opacity-0 group-hover:opacity-100 flex items-center justify-center"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>

          <div 
            ref={techCarouselRef} 
            className="flex h-full space-x-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide" 
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none'
            }}
          >
            {/* Start Spacer with snap-start to maintain 170px margin without sticking */}
            <div className="shrink-0 w-[170px] h-full snap-start" />
            
            {CAROUSEL_ITEMS.map((item) => (
              <div key={item.id} className="snap-start flex flex-col shrink-0 justify-center h-full" style={{ width: '1196px' }}>
                <div 
                  className="relative overflow-hidden rounded-[9px] bg-gray-100 mb-8"
                  style={{ width: '1196px', height: '580px' }}
                >
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
                  <h3 className="text-[28px] leading-tight text-[#171A20] font-medium">{item.title}</h3>
                  <p className="text-[16px] leading-[24px] text-[#5C5E62] font-normal max-w-2xl">{item.description}</p>
                </div>
              </div>
            ))}
            <div className="shrink-0 w-[170px] h-full snap-start" />
          </div>
        </div>
      </section>

      {/* Next Level Performance Section - Matching Advanced Ecosystem exactly, Left Aligned Text */}
      <section className="flex flex-col items-center justify-center bg-white overflow-hidden py-16">
        <div 
          className="relative flex flex-col items-center px-[48px]"
          style={{ 
            maxWidth: '1521px', 
            width: '100%',
            height: '1128px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <div 
            className="relative overflow-hidden rounded-[9px] bg-gray-100"
            style={{ 
              width: '1425px', 
              height: '1024px',
              maxWidth: '100%',
              maxHeight: '100%'
            }}
          >
             <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                <source src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/Model-S-New-Interior-Carousel-Slide-1-Desktop-NA.mp4" type="video/mp4" />
              </video>
          </div>
          <div className="mt-8 space-y-4 w-full text-left" style={{ maxWidth: '1425px' }}>
            <h2 className="text-[48px] leading-[56px] text-[#171A20] font-medium">Next Level Performance</h2>
            <h3 className="text-[34px] leading-tight text-[#171A20] font-medium">Integrated Energy Intelligence</h3>
            <p className="text-[20px] leading-[28px] text-[#5C5E62] font-normal">Beyond distribution, our ecosystem provides an intelligent layer of data that helps you optimize your operations in real-time.</p>
          </div>
        </div>
      </section>

      {/* Safety Section - Fixed start alignment with snap-start spacer */}
      <section className="bg-white py-24 group relative">
        <div className="w-full relative h-full">
          <button 
            onClick={() => scrollCarousel(safetyCarouselRef, 'left')} 
            className="absolute left-[200px] top-[290px] -translate-y-1/2 z-20 p-4 rounded-full bg-white/10 backdrop-blur-lg text-white border border-white/20 hover:bg-white/30 transition-all opacity-0 group-hover:opacity-100 flex items-center justify-center"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button 
            onClick={() => scrollCarousel(safetyCarouselRef, 'right')} 
            className="absolute right-[40px] top-[290px] -translate-y-1/2 z-20 p-4 rounded-full bg-white/10 backdrop-blur-lg text-white border border-white/20 hover:bg-white/30 transition-all opacity-0 group-hover:opacity-100 flex items-center justify-center"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>

          <div 
            ref={safetyCarouselRef} 
            className="flex space-x-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-12" 
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none'
            }}
          >
            <div className="shrink-0 w-[170px] h-full snap-start" />
            
            {SAFETY_ITEMS.map((item) => (
              <div key={item.id} className="snap-start flex flex-col shrink-0" style={{ width: '1196px' }}>
                <div 
                  className="overflow-hidden rounded-[9px] bg-gray-100 mb-8"
                  style={{ width: '1196px', height: '580px' }}
                >
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="space-y-2 w-full px-2">
                  <h2 className="text-[10px] font-bold text-[#171A20] tracking-[0.2em] uppercase text-gray-400">Safety</h2>
                  <h3 className="text-[28px] leading-tight text-[#171A20] font-medium">{item.title}</h3>
                  <p className="text-[16px] leading-[24px] text-[#5C5E62] font-normal max-w-2xl">{item.description}</p>
                </div>
              </div>
            ))}
            <div className="shrink-0 w-[170px] h-full snap-start" />
          </div>
        </div>
      </section>

      {/* Autonomous Section */}
      <section className="bg-white py-24">
        <div className="w-full flex flex-col items-center">
          <div className="w-full px-[48px] py-0 overflow-hidden mb-16 flex justify-center">
            <img 
              src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-New-FSD-Desktop-NA-v2.png" 
              alt="Autonomous Driving Ecosystem" 
              className="rounded-[9px] object-cover"
              style={{ width: '1196px', height: '580px' }}
            />
          </div>
          <div className="max-w-3xl px-12 space-y-6 text-center">
            <h2 className="text-[48px] leading-[56px] text-[#171A20] font-medium">
              The Future of Travel Is Autonomous
            </h2>
            <p className="text-[20px] leading-[28px] text-[#5C5E62] font-normal">
              Enter your destination and your Model S will manage your drive, from start to finish. Full Self-Driving (Supervised) provides advanced features that offer more active guidance and assisted driving under your active supervision.
            </p>
          </div>
        </div>
      </section>

      {/* Enterprise Sections */}
      <section className="bg-[#222222] py-24 px-12 text-white">
        <div className="w-full flex flex-col items-center">
          <div className="mb-12">
            <img 
              src="https://res.cloudinary.com/dt8jmqu8d/image/upload/v1764218338/Screenshot_2025-11-27_100831_qvnqx7.png" 
              alt="Intelligence" 
              className="rounded-[9px] shadow-2xl"
              style={{ width: '1196px', height: '580px', objectFit: 'cover' }}
            />
          </div>
          <div className="space-y-4 max-w-7xl mx-auto w-full px-4 text-center">
            <h3 className="text-[34px] leading-tight font-medium">Enterprise Intelligence</h3>
            <p className="text-[20px] leading-[28px] text-gray-300 font-normal">A comprehensive view of your entire energy distribution network.</p>
          </div>
        </div>
      </section>

      {/* Tri-Motor Power Section */}
      <section className="bg-[#222222] py-24 px-12 text-white">
        <div className="w-full flex flex-col items-center">
          <div className="mb-12">
            <img 
              src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-New-Tri-Motor-Desktop-NA.png" 
              alt="Tri-Motor Power" 
              className="rounded-[9px] shadow-2xl" 
              style={{ width: '1196px', height: '580px', objectFit: 'cover' }}
            />
          </div>
          <div className="space-y-4 max-w-7xl mx-auto w-full px-4 text-center">
            <h3 className="text-[34px] leading-tight font-medium">Tri-Motor Power</h3>
            <p className="text-[20px] leading-[28px] text-gray-300 font-normal">Three carbon-sleeved rotors and an enhanced battery system ensure maximum power.</p>
          </div>
        </div>
      </section>

      {/* Efficient by Design Section */}
      <section className="bg-[#222222] py-24 group relative">
        <div className="w-full text-white relative h-full">
          <button 
            onClick={() => scrollCarousel(efficientCarouselRef, 'left')} 
            className="absolute left-[200px] top-[290px] -translate-y-1/2 z-20 p-4 rounded-full bg-white/10 backdrop-blur-lg text-white border border-white/20 hover:bg-white/30 transition-all opacity-0 group-hover:opacity-100 flex items-center justify-center"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button 
            onClick={() => scrollCarousel(efficientCarouselRef, 'right')} 
            className="absolute right-[40px] top-[290px] -translate-y-1/2 z-20 p-4 rounded-full bg-white/10 backdrop-blur-lg text-white border border-white/20 hover:bg-white/30 transition-all opacity-0 group-hover:opacity-100 flex items-center justify-center"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>

          <div 
            ref={efficientCarouselRef} 
            className="flex space-x-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-12" 
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none'
            }}
          >
            <div className="shrink-0 w-[170px] h-full snap-start" />
            
            {EFFICIENT_ITEMS.map((item) => (
              <div key={item.id} className="snap-start flex flex-col shrink-0" style={{ width: '1196px' }}>
                <div 
                  className="overflow-hidden rounded-[9px] bg-gray-800 mb-8"
                  style={{ width: '1196px', height: '580px' }}
                >
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="space-y-2 w-full px-2">
                  <h2 className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">Efficient by Design</h2>
                  <h3 className="text-[28px] leading-tight font-medium">{item.title}</h3>
                  <p className="text-[16px] leading-[24px] text-gray-300 font-normal max-w-2xl">{item.description}</p>
                </div>
              </div>
            ))}
            <div className="shrink-0 w-[170px] h-full snap-start" />
          </div>
        </div>
      </section>

      {/* Go Anywhere Section */}
      <section className="bg-white py-24">
        <div className="w-full flex flex-col items-center">
          <div className="flex justify-center mb-12">
            <img 
              src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-New-Go-Anywhere-Desktop-NA.png" 
              alt="Go Anywhere" 
              className="rounded-[9px]"
              style={{ width: '1196px', height: '580px', objectFit: 'cover' }}
            />
          </div>
          <div className="w-full max-w-7xl mx-auto px-16 space-y-4 text-center">
            <h3 className="text-[34px] leading-tight text-[#171A20] font-medium">Go Anywhere</h3>
            <p className="text-[20px] leading-[28px] text-[#5C5E62] font-normal">
              Drive up to 410 miles on a single charge. When you need to recharge, add up to 205 miles in just 15 minutes<sup>5</sup> at one of over 75,000 Superchargers globally. Navigate with Trip Planner and your Tesla will automatically take you to Supercharging stops along the way while optimizing your route.
            </p>
          </div>
        </div>
      </section>

      {/* Concluding Section */}
      <section className="relative w-full h-[90vh] overflow-hidden">
        <img 
          src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Hero-Desktop-US-v2.jpg" 
          alt="Repos Power Station (RPS) Conclusion" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-start pt-24 text-white pointer-events-none">
          <div className="text-center animate-hero flex flex-col items-center">
            <div className="mb-10">
              <h2 className="text-[56px] font-semibold tracking-tight mb-1 drop-shadow-md">RPS</h2>
              <p className="text-[18px] font-medium opacity-90 drop-shadow-sm">Repos Power Station</p>
              <div className="mt-4">
                <span className="text-[14px] font-medium opacity-60">
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

export default RPSPage;
