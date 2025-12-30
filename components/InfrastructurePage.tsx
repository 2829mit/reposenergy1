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
      { threshold: 0.1 }
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

      {/* 2. Context & Asset Marquee */}
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

      {/* 3. The Failure (Diagnostics) */}
      <section id="failures" className="py-32 px-6 bg-[#0a0a0a] relative animate-section overflow-hidden">
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

      {/* 4. The Solution (System Architecture Grid) */}
      <section id="solution" className="bg-white text-black py-40 animate-section relative overflow-hidden">
         {/* Tech Background Grid */}
         <div className="absolute inset-0 opacity-[0.03]" 
              style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
         </div>

         <div className={`relative max-w-7xl mx-auto px-6 transition-all duration-1000 ${isVisible('solution') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex flex-col md:flex-row justify-between items-end mb-24">
              <div className="max-w-2xl">
                <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs mb-6 block">System Architecture</span>
                <h2 className="text-[48px] md:text-[64px] font-bold leading-[1] mb-6 tracking-tighter">
                  {data.useCases.title}
                </h2>
                <p className="text-xl text-gray-600 font-light leading-relaxed">
                  {data.useCases.description}
                </p>
              </div>
              <div className="hidden md:block">
                 <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gray-400">
                    <span>Protocol Status</span>
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-green-600">Active</span>
                 </div>
              </div>
            </div>

            {/* Architecture Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-gray-200">
               {data.useCases.items.map((item, idx) => (
                 <div key={idx} className="relative group p-10 border-r border-b border-gray-200 hover:bg-gray-50 transition-all duration-300">
                    <div className="absolute top-0 left-0 w-full h-1 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    
                    <div className="mb-8 flex justify-between items-start">
                       <span className="text-4xl font-bold text-gray-200 group-hover:text-blue-200 transition-colors font-mono">0{idx + 1}</span>
                       <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-colors">
                          <svg className="w-3 h-3 text-gray-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                       </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4 pr-4">{item.title}</h3>
                    <p className="text-gray-500 leading-relaxed font-light text-sm">
                      {item.description}
                    </p>
                 </div>
               ))}
            </div>

            <div className="mt-16 p-8 bg-gray-50 border border-gray-200 rounded-lg flex flex-col md:flex-row items-center justify-between gap-8">
               <div className="flex flex-col">
                  <span className="font-bold text-sm uppercase tracking-widest text-gray-400 mb-2">INTEGRATION LAYER</span>
                  <p className="text-lg text-gray-800">Seamlessly connects with your existing ERP & Fleet Management Systems.</p>
               </div>
               <div className="flex gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg" className="h-8" alt="SAP" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg" className="h-8" alt="Azure" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" className="h-8" alt="AWS" />
               </div>
            </div>
         </div>
      </section>

      {/* 5. Benefits & ROI (FinTech Dashboard Aesthetic) */}
      <section id="benefits" className="py-32 px-6 bg-[#0B0C10] animate-section border-t border-white/5 font-mono">
         <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible('benefits') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 pb-8 border-b border-gray-800">
               <div>
                  <span className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-2 block">/// FINANCIAL PERFORMANCE</span>
                  <h2 className="text-[36px] md:text-[48px] font-bold text-white tracking-tighter">{data.benefits.title}</h2>
               </div>
               <div className="mt-6 md:mt-0 text-right">
                  <button className="text-xs text-gray-400 uppercase tracking-widest hover:text-white border-b border-transparent hover:border-white transition-all pb-1">
                     Download Full Report ↗
                  </button>
               </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {data.benefits.items.map((item, idx) => (
                 <div key={idx} className="relative bg-[#121418] rounded-xl p-8 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 group overflow-hidden">
                    {/* Background Chart Effect */}
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    
                    <div className="flex justify-between items-start mb-6">
                       <span className="text-gray-500 text-[10px] uppercase tracking-widest bg-gray-900 px-2 py-1 rounded">METRIC_0{idx + 1}</span>
                       <span className="text-green-500 text-xs font-bold">▲ POSITIVE</span>
                    </div>
                    
                    <div className="mb-4 flex items-baseline gap-2">
                       <span className="text-5xl md:text-6xl font-bold text-white tracking-tighter group-hover:text-blue-400 transition-colors">
                         {item.metric}
                       </span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-300 mb-3 tracking-wide">{item.label}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed font-sans border-t border-gray-800 pt-4 mt-4 group-hover:border-blue-500/30 transition-colors">
                       {item.description}
                    </p>
                 </div>
               ))}
            </div>

            {/* Executive Summary / CTA */}
            <div className="mt-16 bg-gradient-to-r from-blue-900/40 to-black border border-blue-500/30 p-10 rounded-2xl flex flex-col md:flex-row items-center justify-between font-sans relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
               
               <div className="relative z-10 mb-8 md:mb-0 max-w-xl">
                  <h3 className="text-2xl font-bold text-white mb-2">Projected Impact Analysis</h3>
                  <p className="text-blue-200/70 text-sm leading-relaxed">
                    Based on average fleet size of 50 assets, implementation of Repos Protocol results in full ROI achievement within <span className="text-white font-bold">4.2 months</span>.
                  </p>
               </div>
               
               <div className="relative z-10 flex gap-4">
                 <button className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-xs rounded hover:bg-gray-200 transition-colors flex items-center gap-3 shadow-lg hover:shadow-xl hover:-translate-y-1">
                   Start Audit <span className="text-lg">→</span>
                 </button>
               </div>
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