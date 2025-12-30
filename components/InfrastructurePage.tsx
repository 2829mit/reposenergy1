import React, { useEffect, useState } from 'react';
import { IndustryPageContent } from '../types';

interface IndustrySolutionPageProps {
  data: IndustryPageContent;
}

const IndustrySolutionPage: React.FC<IndustrySolutionPageProps> = ({ data }) => {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    // Reset visible sections when data changes (route change)
    setVisibleSections(new Set());
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => {
              const newSet = new Set(prev);
              newSet.add(entry.target.id);
              return newSet;
            });
          }
        });
      },
      { threshold: 0.15 }
    );

    const sections = document.querySelectorAll('.animate-section');
    sections.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [data]);

  const isVisible = (id: string) => visibleSections.has(id);

  return (
    <div className="bg-black text-white pt-[56px] font-sans selection:bg-blue-600 overflow-x-hidden">
      
      {/* 1. Cinematic Hero Section */}
      <section className="relative w-full h-[95vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={data.hero.image} 
            alt={`${data.hero.title} Hero`} 
            className="w-full h-full object-cover opacity-60 scale-105 animate-slow-pan"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black" />
        </div>
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <div className="animate-hero max-w-5xl">
            <div className="inline-flex items-center gap-3 border border-white/20 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-white">Industry Focus</span>
            </div>
            <h1 className="text-[56px] md:text-[100px] font-bold tracking-tighter mb-8 leading-[0.9] uppercase">
              {data.hero.title.split(' ').map((word, i) => (
                <span key={i} className="block">{word}</span>
              ))}
            </h1>
            <p className="text-[20px] md:text-[28px] font-light max-w-3xl mx-auto opacity-80 leading-relaxed text-blue-200">
              {data.hero.subtitle}
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
           <span className="text-[10px] uppercase tracking-widest">Scroll</span>
           <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </section>

      {/* 2. Context & Asset Marquee (Dark Mode) */}
      <section id="context" className="py-0 bg-[#050505] animate-section border-b border-white/5">
        <div className="py-4 border-y border-white/10 overflow-hidden bg-white/5 backdrop-blur-sm">
           <div className="animate-marquee-left flex whitespace-nowrap items-center gap-16">
              {[...data.context.fuelConsumers, ...data.context.fuelConsumers, ...data.context.fuelConsumers].map((item, idx) => (
                 <div key={idx} className="flex items-center gap-4 text-white/40 font-mono uppercase text-sm tracking-widest">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    {item}
                 </div>
              ))}
           </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-32 flex flex-col md:flex-row gap-20">
           <div className={`md:w-1/3 transition-all duration-1000 ${isVisible('context') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <span className="text-blue-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Ground Reality</span>
              <h2 className="text-[40px] leading-none font-bold mb-6">The Operational <br/>Context.</h2>
              <div className="w-12 h-1 bg-blue-500"></div>
           </div>
           <div className={`md:w-2/3 transition-all duration-1000 delay-200 ${isVisible('context') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <p className="text-2xl md:text-3xl font-light leading-relaxed text-gray-300">
                {data.context.description}
              </p>
           </div>
        </div>
      </section>

      {/* 3. The Failure (Diagnostics Aesthetic) */}
      <section id="failures" className="py-32 px-6 bg-[#0a0a0a] relative animate-section overflow-hidden">
        {/* Abstract Background Grid */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>

        <div className={`relative max-w-7xl mx-auto transition-all duration-1000 ${isVisible('failures') ? 'opacity-100' : 'opacity-0'}`}>
          <div className="mb-20 flex flex-col md:flex-row justify-between items-end border-b border-red-900/30 pb-10">
             <div>
               <div className="flex items-center gap-3 text-red-500 mb-4">
                 <span className="relative flex h-3 w-3">
                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                   <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                 </span>
                 <span className="font-mono text-xs uppercase tracking-widest">Critical System Alerts</span>
               </div>
               <h2 className="text-[40px] md:text-[60px] font-bold leading-none">{data.failures.title}</h2>
             </div>
             <p className="text-gray-500 text-sm max-w-md text-right mt-6 md:mt-0 font-mono">
               DETECTED ANOMALIES IN TRADITIONAL FUEL MANAGEMENT WORKFLOWS.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {data.failures.items.map((item, idx) => (
               <div key={idx} className="group relative bg-white/5 hover:bg-red-900/10 border border-white/10 hover:border-red-500/50 p-8 h-full transition-all duration-500">
                  <div className="absolute top-4 right-4 text-red-500/20 group-hover:text-red-500 transition-colors font-mono text-xs">
                    ERR_0{idx + 1}
                  </div>
                  <div className="w-10 h-10 mb-6 border border-white/20 group-hover:border-red-500/50 rounded-sm flex items-center justify-center text-white/50 group-hover:text-red-500 transition-all">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                  </div>
                  <h3 className="text-xl font-light text-gray-200 group-hover:text-white leading-relaxed">
                    {item}
                  </h3>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 4. The Solution (Workflow Timeline Design) */}
      <section id="solution" className="bg-white text-black py-32 animate-section relative overflow-hidden">
         {/* Background Subtle Grid */}
         <div className="absolute inset-0 opacity-[0.03]" 
              style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
         </div>

         <div className={`relative max-w-7xl mx-auto px-6 transition-all duration-1000 ${isVisible('solution') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="text-center mb-24 max-w-3xl mx-auto">
               <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs mb-6 block">System Deployment</span>
               <h2 className="text-[48px] md:text-[64px] font-bold leading-[1] mb-8 tracking-tighter">
                 {data.useCases.title}
               </h2>
               <p className="text-xl text-gray-600 font-light leading-relaxed">
                 {data.useCases.description}
               </p>
            </div>

            {/* Timeline Container */}
            <div className="relative">
               {/* Central Line - Only visible on LG screens */}
               <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-100 -translate-x-1/2"></div>

               <div className="space-y-12 lg:space-y-24">
                  {data.useCases.items.map((item, idx) => (
                    <div key={idx} className={`flex flex-col lg:flex-row items-center gap-12 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                       
                       {/* Timeline Node - Center */}
                       <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-gray-100 items-center justify-center z-10">
                          <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                       </div>

                       {/* Content Side */}
                       <div className="w-full lg:w-1/2 flex flex-col lg:items-end">
                          <div className={`relative bg-gray-50 p-8 md:p-12 rounded-2xl border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 w-full lg:max-w-xl group ${idx % 2 !== 0 ? 'lg:text-left' : 'lg:text-right'}`}>
                             {/* Connector Line for Desktop */}
                             <div className={`hidden lg:block absolute top-1/2 w-12 h-[2px] bg-gray-100 ${idx % 2 !== 0 ? '-left-12' : '-right-12'}`}></div>

                             <div className={`flex flex-col ${idx % 2 !== 0 ? 'lg:items-start' : 'lg:items-end'}`}>
                                <span className="text-6xl font-bold text-gray-200 mb-4 font-mono group-hover:text-blue-100 transition-colors">0{idx + 1}</span>
                                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed font-light text-lg">
                                  {item.description}
                                </p>
                             </div>
                          </div>
                       </div>
                       
                       {/* Empty Spacer Side */}
                       <div className="hidden lg:block w-1/2"></div>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* 5. Benefits & ROI (Financial Terminal Design) */}
      <section id="benefits" className="py-32 px-6 bg-[#0f0f0f] animate-section border-t border-white/5 font-mono">
         <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible('benefits') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 pb-8 border-b border-white/10">
               <div>
                  <span className="text-green-500 text-xs font-bold tracking-widest uppercase mb-2 block">/// LIVE METRICS</span>
                  <h2 className="text-[36px] md:text-[48px] font-bold text-white tracking-tighter">{data.benefits.title}</h2>
               </div>
               <div className="mt-6 md:mt-0 text-right">
                  <div className="text-xs text-gray-500 uppercase tracking-widest mb-1">Status</div>
                  <div className="flex items-center gap-2 justify-end">
                     <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                     <span className="text-green-500 font-bold">OPTIMIZED</span>
                  </div>
               </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
               {data.benefits.items.map((item, idx) => (
                 <div key={idx} className="bg-[#161616] p-10 hover:bg-[#1a1a1a] transition-colors border border-transparent hover:border-white/10 group">
                    <div className="flex justify-between items-start mb-8">
                       <span className="text-gray-600 text-xs uppercase tracking-widest">metric_0{idx + 1}</span>
                       <svg className="w-4 h-4 text-gray-600 group-hover:text-green-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                    </div>
                    <div className="mb-4">
                       <span className="text-5xl md:text-6xl font-bold text-white tracking-tighter group-hover:text-green-400 transition-colors">
                         {item.metric}
                       </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-300 mb-2 uppercase tracking-wide">{item.label}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed font-sans">
                       {item.description}
                    </p>
                 </div>
               ))}
            </div>

            {/* Executive Summary / CTA */}
            <div className="mt-20 bg-blue-900/20 border border-blue-500/20 p-8 md:p-12 rounded-sm flex flex-col md:flex-row items-center justify-between font-sans">
               <div className="mb-8 md:mb-0">
                  <h3 className="text-2xl font-bold text-white mb-2">Ready to deploy the protocol?</h3>
                  <p className="text-blue-200/60">Transform your operations today with Repos.</p>
               </div>
               <button className="px-10 py-4 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-gray-200 transition-colors flex items-center gap-3">
                 Initialize <span className="text-lg">→</span>
               </button>
            </div>
         </div>
      </section>

      {/* 6. Final Call to Action */}
      <section className="py-40 bg-white text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[32px] md:text-[56px] font-bold tracking-tight mb-8 leading-[1.1] text-black">
            {data.cta.text}
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
            <button className="px-12 py-5 bg-black text-white font-bold rounded-sm text-sm uppercase tracking-widest hover:bg-gray-900 transition-all hover:-translate-y-1 shadow-xl">
              Schedule Consultation
            </button>
            <button className="px-12 py-5 border border-gray-200 text-black font-bold rounded-sm text-sm uppercase tracking-widest hover:bg-gray-50 transition-all">
              Download Case Study
            </button>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes slowPan {
          0% { transform: scale(1.1); }
          50% { transform: scale(1.15); }
          100% { transform: scale(1.1); }
        }
        .animate-slow-pan {
          animation: slowPan 30s ease-in-out infinite;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-hero {
          animation: fadeIn 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default IndustrySolutionPage;