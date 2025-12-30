import React, { useState, useEffect } from 'react';
import { Page } from '../types';
import { PRODUCTS } from '../constants';

interface FuelIntelligencePageProps {
  onNavigate: (page: Page) => void;
}

const FuelIntelligencePage: React.FC<FuelIntelligencePageProps> = ({ onNavigate }) => {
  const [selectedConsumption, setSelectedConsumption] = useState<number>(5000);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  const getRecommendedProduct = () => {
    if (selectedConsumption >= 20000) return 'datum-z';
    if (selectedConsumption >= 10000) return 'datum-x';
    if (selectedConsumption >= 5000) return 'datum-s';
    return 'rps';
  };

  const recommendationId = getRecommendedProduct();
  const recommendedProduct = PRODUCTS.find(p => p.id === recommendationId);

  useEffect(() => {
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

    document.querySelectorAll('.animate-section').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const isVisible = (id: string) => visibleSections.has(id);

  return (
    <div className="bg-black text-white min-h-screen pt-[56px] font-sans selection:bg-blue-600 overflow-x-hidden">
      
      {/* 1. Cinematic Hero Section */}
      <section className="relative h-[95vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2400" 
            alt="Industrial Background" 
            className="w-full h-full object-cover opacity-30 scale-105 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black" />
        </div>
        
        <div className="relative z-10 max-w-6xl animate-hero">
          <div className="inline-block border border-blue-500/30 bg-blue-500/10 backdrop-blur-md px-4 py-1.5 rounded-full mb-8">
            <span className="text-blue-400 font-bold tracking-[0.2em] uppercase text-[10px]">The Hard Truth</span>
          </div>
          <h1 className="text-[48px] md:text-[80px] font-bold tracking-tighter leading-[1.1] mb-8 uppercase text-white">
            Fuel Is Running <br/>
            <span className="text-gray-500">Your Business.</span>
          </h1>
          <h2 className="text-[24px] md:text-[32px] font-light text-gray-200 tracking-tight mb-8">
            But You’re Not Really in Control.
          </h2>
          <p className="text-[16px] md:text-[18px] text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
            It is your largest operational dependency, accounting for up to 50% of expenses. Yet, it is managed with fragmented processes, manual controls, and blind spots.
          </p>
        </div>
        
        <div className="absolute bottom-10 animate-bounce">
          <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7-7-7" /></svg>
        </div>
      </section>

      {/* 2. The Current Reality (Pain Points) */}
      <section id="reality" className="py-32 px-6 md:px-12 bg-white text-black relative animate-section">
         <div className={`max-w-7xl mx-auto transition-all duration-1000 transform ${isVisible('reality') ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="mb-24 max-w-3xl">
              <span className="text-red-600 font-bold tracking-widest uppercase text-xs mb-4 block">Current State</span>
              <h2 className="text-[40px] md:text-[64px] font-bold tracking-tight leading-[1] mb-6">How Fuel Actually <br/>Works Today.</h2>
              <p className="text-xl text-gray-600 font-light">You may recognize this reality. Procurement is reactive, operations are manual, and payments are disconnected.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {/* Pain Point 1 */}
               <div className="group bg-gray-50 rounded-2xl p-8 hover:bg-black hover:text-white transition-all duration-500">
                  <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Reactive Procurement</h3>
                  <p className="text-gray-500 group-hover:text-gray-300 leading-relaxed mb-6 text-sm">
                     Decisions driven by urgency, not data. No single source of truth for sourcing.
                  </p>
                  <ul className="space-y-3">
                     <li className="flex items-center text-sm font-medium"><span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3"></span>Did we procure the right quantity?</li>
                     <li className="flex items-center text-sm font-medium"><span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3"></span>Did it actually reach the asset?</li>
                     <li className="flex items-center text-sm font-medium"><span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3"></span>Are we overbuying?</li>
                  </ul>
               </div>

               {/* Pain Point 2 */}
               <div className="group bg-gray-50 rounded-2xl p-8 hover:bg-black hover:text-white transition-all duration-500">
                  <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Loss-Prone Operations</h3>
                  <p className="text-gray-500 group-hover:text-gray-300 leading-relaxed mb-6 text-sm">
                     Spillage and evaporation are accepted norms. Logs are manual and error-ridden.
                  </p>
                  <ul className="space-y-3">
                     <li className="flex items-center text-sm font-medium"><span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3"></span>Manual dipping errors</li>
                     <li className="flex items-center text-sm font-medium"><span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3"></span>Pilferage & Theft</li>
                     <li className="flex items-center text-sm font-medium"><span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3"></span>No real-time usage data</li>
                  </ul>
               </div>

               {/* Pain Point 3 */}
               <div className="group bg-gray-50 rounded-2xl p-8 hover:bg-black hover:text-white transition-all duration-500">
                  <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Blind Payments</h3>
                  <p className="text-gray-500 group-hover:text-gray-300 leading-relaxed mb-6 text-sm">
                     Finance relies on invoices, not consumption. Money moves before verification.
                  </p>
                  <ul className="space-y-3">
                     <li className="flex items-center text-sm font-medium"><span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3"></span>Unverified transactions</li>
                     <li className="flex items-center text-sm font-medium"><span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3"></span>Frequent disputes</li>
                     <li className="flex items-center text-sm font-medium"><span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3"></span>Unpredictable cash flow</li>
                  </ul>
               </div>
            </div>
         </div>
      </section>

      {/* 3. The Solution Bridge */}
      <section className="py-40 bg-[#0a0a0a] text-center px-6 relative overflow-hidden">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px]" />
         <div className="relative max-w-5xl mx-auto z-10">
            <span className="text-blue-500 font-bold tracking-[0.3em] uppercase text-xs mb-8 block animate-pulse">The Gap We Solve</span>
            <h2 className="text-[36px] md:text-[60px] font-bold leading-tight mb-8">
               Repos does not replace your fuel usage. <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">It governs it.</span>
            </h2>
            <p className="text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto">
               The Repos Fuel Intelligence Platform is built for reality. It connects procurement, operations, and payments into a single, intelligent governance layer.
            </p>
         </div>
      </section>

      {/* 4. Value Creation Steps */}
      <section className="bg-black py-0">
         
         {/* Step 1: Procurement */}
         <div id="step1" className="min-h-screen flex flex-col lg:flex-row items-center border-t border-white/5 animate-section">
            <div className={`w-full lg:w-1/2 h-[60vh] lg:h-screen relative overflow-hidden group transition-all duration-1000 ${isVisible('step1') ? 'opacity-100' : 'opacity-0'}`}>
               <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-1000" alt="Procurement Solution" />
               <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent lg:bg-gradient-to-l" />
            </div>
            <div className={`w-full lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center transition-all duration-1000 delay-300 ${isVisible('step1') ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
               <div className="flex items-center gap-4 mb-6">
                 <span className="text-blue-500 font-bold text-lg">01</span>
                 <div className="h-[1px] w-12 bg-blue-500"></div>
                 <span className="text-gray-400 font-bold tracking-widest uppercase text-xs">Procurement</span>
               </div>
               <h3 className="text-4xl lg:text-6xl font-bold mb-6">Reactive <span className="text-gray-600">to</span> Informed.</h3>
               <p className="text-lg text-gray-400 mb-10 leading-relaxed">
                  Move from guesswork to data-backed planning. Repos aligns procurement directly with asset-level consumption intelligence.
               </p>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                     <h4 className="text-white font-bold text-lg mb-2">The Problem</h4>
                     <p className="text-sm text-gray-500">Procurement without demand forecasting leads to excess inventory or shortages.</p>
                  </div>
                  <div className="bg-blue-900/10 p-6 rounded-lg border border-blue-500/20">
                     <h4 className="text-blue-400 font-bold text-lg mb-2">Repos Change</h4>
                     <p className="text-sm text-gray-400">Every liter is digitally recorded. Sourcing is based on actual usage patterns.</p>
                  </div>
               </div>
            </div>
         </div>

         {/* Step 2: Operations */}
         <div id="step2" className="min-h-screen flex flex-col lg:flex-row-reverse items-center border-t border-white/5 animate-section">
            <div className={`w-full lg:w-1/2 h-[60vh] lg:h-screen relative overflow-hidden group transition-all duration-1000 ${isVisible('step2') ? 'opacity-100' : 'opacity-0'}`}>
               <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1200" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-1000" alt="Operations Solution" />
               <div className="absolute inset-0 bg-gradient-to-l from-black via-transparent to-transparent lg:bg-gradient-to-r" />
            </div>
            <div className={`w-full lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center transition-all duration-1000 delay-300 ${isVisible('step2') ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
               <div className="flex items-center gap-4 mb-6">
                 <span className="text-blue-500 font-bold text-lg">02</span>
                 <div className="h-[1px] w-12 bg-blue-500"></div>
                 <span className="text-gray-400 font-bold tracking-widest uppercase text-xs">Operations</span>
               </div>
               <h3 className="text-4xl lg:text-6xl font-bold mb-6">Manual <span className="text-gray-600">to</span> Measured.</h3>
               <p className="text-lg text-gray-400 mb-10 leading-relaxed">
                  Stop silent losses. Embed intelligence directly into daily fuel transfers with real-time IoT monitoring and automated logs.
               </p>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                     <h4 className="text-white font-bold text-lg mb-2">The Problem</h4>
                     <p className="text-sm text-gray-500">Manual handling and logs rely on human discipline, leading to invisible leakage.</p>
                  </div>
                  <div className="bg-blue-900/10 p-6 rounded-lg border border-blue-500/20">
                     <h4 className="text-blue-400 font-bold text-lg mb-2">Repos Change</h4>
                     <p className="text-sm text-gray-400">Real-time visibility via app. Accurate before-and-after dispensing data.</p>
                  </div>
               </div>
            </div>
         </div>

         {/* Step 3: Payments */}
         <div id="step3" className="min-h-screen flex flex-col lg:flex-row items-center border-t border-white/5 animate-section">
            <div className={`w-full lg:w-1/2 h-[60vh] lg:h-screen relative overflow-hidden group transition-all duration-1000 ${isVisible('step3') ? 'opacity-100' : 'opacity-0'}`}>
               <img src="https://res.cloudinary.com/dt8jmqu8d/image/upload/v1767096944/Untitled-1_zgsach.jpg" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-1000" alt="Payments Solution" />
               <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent lg:bg-gradient-to-l" />
            </div>
            <div className={`w-full lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center transition-all duration-1000 delay-300 ${isVisible('step3') ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
               <div className="flex items-center gap-4 mb-6">
                 <span className="text-blue-500 font-bold text-lg">03</span>
                 <div className="h-[1px] w-12 bg-blue-500"></div>
                 <span className="text-gray-400 font-bold tracking-widest uppercase text-xs">Payments</span>
               </div>
               <h3 className="text-4xl lg:text-6xl font-bold mb-6">Reconciliation <span className="text-gray-600">to</span> Verified.</h3>
               <p className="text-lg text-gray-400 mb-10 leading-relaxed">
                  Close the loop. Repos ensures every payment is tied to a verified fuel transaction, eliminating financial blind spots.
               </p>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                     <h4 className="text-white font-bold text-lg mb-2">The Problem</h4>
                     <p className="text-sm text-gray-500">Payments disconnected from actual activity lead to disputes and manual audits.</p>
                  </div>
                  <div className="bg-blue-900/10 p-6 rounded-lg border border-blue-500/20">
                     <h4 className="text-blue-400 font-bold text-lg mb-2">Repos Change</h4>
                     <p className="text-sm text-gray-400">Transactions linked to quantity, time, and location. Verified spend only.</p>
                  </div>
               </div>
            </div>
         </div>

      </section>

      {/* 5. The Bigger Shift (Impact) */}
      <section className="py-32 px-6 bg-[#0f0f0f] border-t border-white/5">
         <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-20 text-white">The Shift to Closed-Loop Governance.</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="p-10 bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl hover:border-blue-500/50 transition-all group">
                  <h3 className="text-blue-500 text-6xl font-bold mb-4 group-hover:scale-110 transition-transform">0%</h3>
                  <p className="text-xl font-bold text-white mb-2">Unaccounted Loss</p>
                  <p className="text-gray-500 text-sm">Fuel stops being a variable cost and becomes a precise input.</p>
               </div>
               <div className="p-10 bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl hover:border-blue-500/50 transition-all group">
                  <h3 className="text-blue-500 text-6xl font-bold mb-4 group-hover:scale-110 transition-transform">100%</h3>
                  <p className="text-xl font-bold text-white mb-2">Operational Confidence</p>
                  <p className="text-gray-500 text-sm">Decisions based on real-time data, not assumptions.</p>
               </div>
               <div className="p-10 bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl hover:border-blue-500/50 transition-all group">
                  <h3 className="text-blue-500 text-6xl font-bold mb-4 group-hover:scale-110 transition-transform">24/7</h3>
                  <p className="text-xl font-bold text-white mb-2">Strategic Control</p>
                  <p className="text-gray-500 text-sm">Scalable management across all your locations.</p>
               </div>
            </div>
         </div>
      </section>

      {/* 6. Interactive Product Selector */}
      <section className="py-40 bg-white text-black px-6">
         <div className="max-w-7xl mx-auto flex flex-col items-center">
            <h2 className="text-[40px] md:text-[64px] font-bold tracking-tight text-center mb-6">Select Your Scale.</h2>
            <p className="text-xl text-gray-500 mb-20 font-light text-center max-w-2xl">Use our intelligent selector to find the Repos solution that matches your consumption.</p>
            
            <div className="w-full max-w-5xl bg-gray-50 p-8 md:p-12 rounded-[2rem] shadow-2xl">
               <div className="space-y-12">
                  <div className="px-4">
                    <div className="flex justify-between items-end mb-8">
                       <label className="text-sm font-bold uppercase tracking-widest text-gray-400">Weekly Fuel Needs</label>
                       <span className="text-5xl font-bold text-blue-600 tracking-tighter">{selectedConsumption.toLocaleString()} <span className="text-lg text-gray-400 font-medium">Litres</span></span>
                    </div>
                    <div className="relative pt-6 pb-2">
                      <input 
                        type="range" 
                        min="1000" 
                        max="30000" 
                        step="500" 
                        value={selectedConsumption} 
                        onChange={(e) => setSelectedConsumption(parseInt(e.target.value))}
                        className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600 z-20 relative"
                      />
                      <div className="absolute top-2 left-0 w-full flex justify-between px-1 pointer-events-none">
                        <div className="w-0.5 h-3 bg-gray-300"></div>
                        <div className="w-0.5 h-3 bg-gray-300"></div>
                        <div className="w-0.5 h-3 bg-gray-300"></div>
                        <div className="w-0.5 h-3 bg-gray-300"></div>
                      </div>
                    </div>
                    <div className="flex justify-between mt-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                       <span>Startup (1k)</span>
                       <span>Growth (10k)</span>
                       <span>Industrial (20k)</span>
                       <span>Mega Scale (30k+)</span>
                    </div>
                  </div>

                  <div className="pt-12 border-t border-gray-200 flex flex-col md:flex-row items-center gap-12">
                     <div className="w-full md:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-white p-6 transition-all duration-500 hover:shadow-2xl flex items-center justify-center">
                        <img src={recommendedProduct?.image} className="w-full h-full object-contain" alt={recommendedProduct?.name} />
                     </div>
                     <div className="w-full md:w-1/2 space-y-6">
                        <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-[10px] font-bold tracking-widest uppercase rounded-full">Recommended Solution</div>
                        <h4 className="text-5xl font-bold text-black">{recommendedProduct?.name}</h4>
                        <p className="text-gray-600 text-lg leading-relaxed">{recommendedProduct?.description}</p>
                        <div className="grid grid-cols-2 gap-y-3 gap-x-6">
                           {['IoT Integrated', 'Real-time Analytics', 'Secure Dispensing', 'Automated Logs'].map(feature => (
                             <div key={feature} className="flex items-center gap-2 font-semibold text-sm text-gray-800">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                                {feature}
                             </div>
                           ))}
                        </div>
                        <div className="pt-4">
                          <button 
                             onClick={() => onNavigate(recommendationId as Page)}
                             className="w-full md:w-auto px-8 py-4 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition-all uppercase tracking-widest text-xs shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                          >
                             Explore Specifications
                          </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <section className="py-40 bg-black text-center px-6 border-t border-white/10">
         <div className="max-w-4xl mx-auto">
            <h2 className="text-[40px] md:text-[80px] font-bold tracking-tighter mb-12 uppercase leading-[1] text-white">Your Infrastructure, <br/><span className="text-blue-500">Refined.</span></h2>
            <div className="w-24 h-[1px] bg-white/20 mx-auto mb-12" />
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <button className="px-12 py-5 bg-white text-black font-bold rounded-sm text-sm uppercase tracking-widest hover:bg-gray-200 transition-all">Schedule Consultation</button>
              <button className="px-12 py-5 border border-white/20 text-white font-bold rounded-sm text-sm uppercase tracking-widest hover:bg-white/10 transition-all">Download Brochure</button>
            </div>
         </div>
      </section>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-hero {
          animation: fadeIn 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-slow-zoom {
          animation: slowZoom 20s linear infinite alternate;
        }
        @keyframes slowZoom {
          from { transform: scale(1.05); }
          to { transform: scale(1.15); }
        }
      `}</style>
    </div>
  );
};

export default FuelIntelligencePage;