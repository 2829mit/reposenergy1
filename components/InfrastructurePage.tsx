import React, { useEffect, useRef, useState } from 'react';
import { IndustryPageContent } from '../constants';

interface IndustrySolutionPageProps {
  data: IndustryPageContent;
}

const IndustrySolutionPage: React.FC<IndustrySolutionPageProps> = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [data]);

  return (
    <div className="bg-white pt-[56px] font-sans">
      {/* Hero Section */}
      <section className="relative w-full h-[85vh] overflow-hidden">
        <img 
          src={data.hero.image} 
          alt={`${data.hero.title} Hero`} 
          className="w-full h-full object-cover brightness-75 scale-105"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/20">
          <div className="text-center animate-hero flex flex-col items-center px-4 max-w-4xl">
            <span className="text-[12px] font-bold tracking-[0.4em] uppercase opacity-80 mb-4">Solution for</span>
            <h1 className="text-[44px] md:text-[72px] font-bold tracking-tight mb-4 leading-tight">{data.hero.title}</h1>
            <p className="text-[18px] md:text-[22px] font-light max-w-2xl opacity-90">{data.hero.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="py-24 px-6 md:px-12 bg-gray-50 flex flex-col items-center text-center">
        <div className="max-w-4xl">
           <h2 className="text-[32px] md:text-[48px] font-medium text-black mb-8 tracking-tight leading-tight">
             {data.problemStatement.title}
           </h2>
           <p className="text-[18px] md:text-[21px] text-gray-600 font-light leading-relaxed">
             {data.problemStatement.description}
           </p>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section ref={statsRef} className="py-20 md:py-32 flex items-center justify-center bg-white px-6">
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl gap-y-12 md:gap-y-0">
          {data.stats.map((stat, idx) => (
            <React.Fragment key={idx}>
              <div className={`flex-1 flex flex-col items-center px-4 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: `${idx * 200}ms` }}>
                <div className="flex items-baseline text-[#171A20]">
                  <span className="text-[54px] lg:text-[72px] leading-none font-medium tracking-tighter">{stat.value}</span>
                  {stat.unit && <span className="text-[20px] lg:text-[28px] font-medium ml-1">{stat.unit}</span>}
                </div>
                <p className="text-[16px] lg:text-[20px] text-[#5C5E62] font-normal mt-3">{stat.label}</p>
              </div>
              {idx < data.stats.length - 1 && <div className="hidden md:block w-[1px] h-16 bg-gray-200 self-center"></div>}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* Pillars Sections - Alternating Layout */}
      <div className="space-y-0">
        {data.pillars.map((pillar, idx) => (
          <section key={pillar.id} className={`flex flex-col lg:flex-row ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''} min-h-[700px] border-b border-gray-100`}>
             {/* Text Side */}
             <div className="lg:w-1/2 p-8 md:p-16 lg:p-24 flex flex-col justify-center bg-white">
                <span className="text-[12px] font-bold text-blue-600 tracking-[0.3em] uppercase mb-4">{idx + 1} of {data.pillars.length}</span>
                <h3 className="text-[32px] md:text-[42px] font-bold text-black mb-6 tracking-tight leading-tight">{pillar.title}</h3>
                <p className="text-[18px] text-gray-600 font-light mb-10 leading-relaxed">{pillar.description}</p>
                <ul className="space-y-4">
                  {pillar.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-center gap-4 text-[17px] text-gray-800 font-medium">
                       <span className="w-1.5 h-1.5 rounded-full bg-blue-600 opacity-60"></span>
                       {item}
                    </li>
                  ))}
                </ul>
             </div>
             {/* Image Side */}
             <div className={`lg:w-1/2 h-[400px] lg:h-auto relative overflow-hidden flex items-center justify-center p-6 md:p-12 ${pillar.id === 'payments' ? 'bg-[#111]' : 'bg-gray-100'}`}>
                {pillar.id === 'payments' ? (
                  <>
                    {/* Atmospheric background for payments */}
                    <div className="absolute inset-0 bg-radial-gradient from-[#1a1a1a] to-black opacity-80" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-2xl bg-blue-500/5 blur-[120px] rounded-full" />
                    
                    <div className="relative w-full max-w-2xl aspect-[1.6/1] rounded-2xl overflow-hidden shadow-[0_35px_60px_-15px_rgba(0,0,0,0.8)] group cursor-default z-10 scale-95 hover:scale-100 transition-transform duration-1000">
                      {/* Using the provided premium image directly */}
                      <img 
                        src={pillar.image} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[6s]" 
                        alt={pillar.title} 
                      />
                    </div>
                  </>
                ) : (
                  <img 
                    src={pillar.image} 
                    className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-[3s] ease-out" 
                    alt={pillar.title} 
                  />
                )}
             </div>
          </section>
        ))}
      </div>

      {/* Benefits Icons Grid */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-[32px] md:text-[48px] font-medium mb-20 tracking-tight">Take Complete Control</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {data.benefits.map((benefit, idx) => (
              <div key={idx} className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-16 h-16 mb-6 opacity-80 group-hover:opacity-100">
                  <img src={benefit.icon} className="w-full h-full object-contain grayscale" alt={benefit.title} />
                </div>
                <h4 className="text-[16px] md:text-[18px] font-bold text-center tracking-tight text-gray-900">{benefit.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 md:py-40 bg-white text-center px-6">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <h2 className="text-[40px] md:text-[64px] font-bold tracking-tight mb-8">Ready to Fuel Smarter?</h2>
          <p className="text-[18px] md:text-[24px] font-light text-gray-500 mb-12">Connect with our industry experts to optimize your energy distribution infrastructure.</p>
          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
            <button className="px-12 py-4 bg-[#3E6AE1] text-white font-bold rounded-md hover:brightness-110 transition-all shadow-lg text-[18px]">
              Get in Touch
            </button>
            <button className="px-12 py-4 bg-black text-white font-bold rounded-md hover:bg-gray-800 transition-all shadow-lg text-[18px]">
              Request Demo
            </button>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeInHeroOverlay {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-hero {
          animation: fadeInHeroOverlay 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .bg-radial-gradient {
          background: radial-gradient(circle at center, var(--tw-gradient-from), var(--tw-gradient-to));
        }
      `}</style>
    </div>
  );
};

export default IndustrySolutionPage;