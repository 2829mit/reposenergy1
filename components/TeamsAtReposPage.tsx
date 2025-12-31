
import React, { useEffect, useState } from 'react';

const TeamsAtReposPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('engineering');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['engineering', 'design', 'product'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="bg-white text-gray-900 font-sans pt-[56px] min-h-screen selection:bg-blue-100">
      
      {/* Hero Section */}
      <section className="relative w-full h-[85vh] overflow-hidden flex flex-col justify-center items-center text-center px-6 bg-[#050505]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-40 grayscale mix-blend-screen" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-[#050505]" />
        </div>
        
        <div className="relative z-10 max-w-5xl animate-fade-in-up">
           <span className="inline-block py-1 px-3 border border-white/20 rounded-full text-white/80 font-mono text-[10px] tracking-[0.2em] uppercase mb-8 backdrop-blur-sm">
             Functional Excellence
           </span>
           <h1 className="text-6xl md:text-9xl font-bold text-white mb-8 tracking-tighter leading-[0.9]">
             The Collectives
           </h1>
           <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
             We organize by deepest expertise. Experts leading experts in the pursuit of the impossible.
           </p>
        </div>
      </section>

      {/* Sticky Navigation */}
      <div className="sticky top-[56px] z-40 bg-white/80 backdrop-blur-xl border-b border-gray-100 transition-all duration-300">
         <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-center md:justify-start gap-8 md:gap-12 py-4 overflow-x-auto no-scrollbar">
              {['Engineering', 'Design', 'Product'].map((item) => {
                const id = item.toLowerCase();
                const isActive = activeSection === id;
                return (
                  <button
                    key={item}
                    onClick={() => scrollToSection(id)}
                    className={`text-sm font-bold uppercase tracking-widest transition-all whitespace-nowrap ${
                      isActive ? 'text-blue-600' : 'text-gray-400 hover:text-gray-900'
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
         </div>
      </div>

      {/* ENGINEERING SECTION */}
      <section id="engineering" className="py-32 px-6 bg-white scroll-mt-[100px]">
         <div className="max-w-7xl mx-auto">
            <div className="mb-24 max-w-3xl">
               <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter text-black">
                 Engineering Excellence
               </h2>
               <p className="text-2xl text-gray-500 font-light leading-relaxed">
                 Our engineering bar is exceptionally high. We don't just write code; we architect systems that scale to millions while maintaining elegance.
               </p>
            </div>

            {/* Technical Standards Grid */}
            <div className="mb-24">
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-12 border-b border-gray-100 pb-4">Technical Standards</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                 {[
                   {
                     title: "Code Quality",
                     points: [">80% test coverage for critical paths", "Peer code reviews for every change", "Automated linting & static analysis", "Self-documenting code"]
                   },
                   {
                     title: "Architecture",
                     points: ["Microservices where appropriate", "API-first design strategy", "Event-driven async workflows", "Infrastructure as code"]
                   },
                   {
                     title: "Performance",
                     points: ["Sub-100ms API response times", "Mobile apps launch < 2 seconds", "Core Web Vitals in the green", "Relentless DB optimization"]
                   },
                   {
                     title: "Security",
                     points: ["Zero-trust architecture", "End-to-end encryption", "Regular penetration testing", "SOC 2 & ISO 27001 compliance"]
                   }
                 ].map((std, i) => (
                   <div key={i} className="group">
                      <div className="w-12 h-1 bg-blue-600 mb-6 group-hover:w-full transition-all duration-500"></div>
                      <h4 className="text-xl font-bold mb-6">{std.title}</h4>
                      <ul className="space-y-3">
                        {std.points.map((pt, j) => (
                          <li key={j} className="text-sm text-gray-600 leading-relaxed border-l-2 border-transparent hover:border-gray-200 pl-0 hover:pl-3 transition-all duration-300">
                            {pt}
                          </li>
                        ))}
                      </ul>
                   </div>
                 ))}
              </div>
            </div>

            {/* Technology Stack - Dark Card */}
            <div className="bg-[#0a0a0a] rounded-3xl p-8 md:p-16 text-white mb-24 overflow-hidden relative">
               <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
               
               <div className="relative z-10">
                 <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
                    <h3 className="text-3xl md:text-4xl font-bold tracking-tight">The Stack</h3>
                    <p className="text-gray-500 text-sm mt-4 md:mt-0 font-mono">
                      RIGHT TOOL FOR THE JOB. NOT THE TRENDY TOOL.
                    </p>
                 </div>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div className="space-y-12">
                       <div>
                          <h4 className="text-blue-500 font-bold uppercase tracking-widest text-xs mb-4">Backend & Data</h4>
                          <p className="text-xl text-gray-300 font-light leading-relaxed">
                            Python, Go, Java, and Node.js orchestrate our services. PostgreSQL, MongoDB, Redis, and Kafka handle data at scale. Orchestrated via Kubernetes on multi-cloud infrastructure (AWS, GCP, Azure).
                          </p>
                       </div>
                       <div>
                          <h4 className="text-blue-500 font-bold uppercase tracking-widest text-xs mb-4">Frontend & Mobile</h4>
                          <p className="text-xl text-gray-300 font-light leading-relaxed">
                             React, Vue, and Svelte drive our web experiences. Native Swift (iOS) and Kotlin (Android) power our mobile apps, with React Native used strategically for cross-platform efficiency.
                          </p>
                       </div>
                    </div>
                    <div className="space-y-12">
                       <div>
                          <h4 className="text-blue-500 font-bold uppercase tracking-widest text-xs mb-4">Machine Learning</h4>
                          <p className="text-xl text-gray-300 font-light leading-relaxed">
                            PyTorch and TensorFlow for model training. Spark and Databricks for processing massive datasets. MLflow for experiment tracking and custom inference servers for production.
                          </p>
                       </div>
                       <div>
                          <h4 className="text-blue-500 font-bold uppercase tracking-widest text-xs mb-4">DevOps & Tooling</h4>
                          <p className="text-xl text-gray-300 font-light leading-relaxed">
                            GitHub Actions and Jenkins for CI/CD. Observability through Datadog, Prometheus, and Grafana. Incident response via PagerDuty.
                          </p>
                       </div>
                    </div>
                 </div>
               </div>
            </div>

            {/* Engineering Culture */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 { t: "Ownership", d: "Engineers own their features from conception through operation. No 'throwing over the wall' to ops." },
                 { t: "Blameless Post-Mortems", d: "When things break, we focus on systemic improvements, never individual blame." },
                 { t: "Technical Debt", d: "Explicitly budgeted. 20% of engineering time is allocated to refactoring and paying down debt." },
                 { t: "Innovation Time", d: "Engineers spend 20% time on exploratory projects, new technologies, or learning." },
                 { t: "Open Source", d: "We contribute heavily to open source. Engineers are encouraged to be active in the community." }
               ].map((cult, i) => (
                 <div key={i} className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <h4 className="font-bold text-lg mb-3 text-gray-900">{cult.t}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{cult.d}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* DESIGN SECTION */}
      <section id="design" className="py-32 px-6 bg-[#f5f5f7] scroll-mt-[100px]">
         <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-20 mb-24">
               <div className="lg:w-1/2">
                  <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter text-black">
                    Design Philosophy
                  </h2>
                  <p className="text-2xl text-gray-500 font-light leading-relaxed">
                    Beauty never compromises usability. We believe great design makes technology accessible, delightful, and empowering.
                  </p>
               </div>
               <div className="lg:w-1/2 flex items-end justify-end">
                  <div className="bg-white p-6 rounded-2xl shadow-sm max-w-md">
                     <p className="font-mono text-xs text-gray-400 mb-4 uppercase tracking-widest">Principles</p>
                     <div className="space-y-2">
                        {["Aesthetically Distinctive", "Functional", "Accessible (WCAG 2.1 AAA)", "Performant (60fps)", "Pixel-Perfect"].map((tag, i) => (
                           <span key={i} className="inline-block px-3 py-1 bg-gray-100 rounded-md text-xs font-bold mr-2 mb-2 text-gray-700">{tag}</span>
                        ))}
                     </div>
                  </div>
               </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
               <div className="bg-white p-12 rounded-3xl shadow-sm">
                  <h3 className="text-3xl font-bold mb-8">User-Centered Design</h3>
                  <div className="space-y-8">
                     <div>
                        <h4 className="text-lg font-bold mb-2 flex items-center gap-3">
                           <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                           Research Foundation
                        </h4>
                        <p className="text-gray-600 pl-5">Contextual inquiries, field studies, usability testing throughout development, and A/B testing.</p>
                     </div>
                     <div>
                        <h4 className="text-lg font-bold mb-2 flex items-center gap-3">
                           <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                           Design Process
                        </h4>
                        <p className="text-gray-600 pl-5">From sketching and low-fi wireframes to interactive prototypes and high-fidelity systems.</p>
                     </div>
                     <div>
                        <h4 className="text-lg font-bold mb-2 flex items-center gap-3">
                           <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                           Design Systems
                        </h4>
                        <p className="text-gray-600 pl-5">Comprehensive component library and design tokens ensuring consistency across web, iOS, and Android.</p>
                     </div>
                  </div>
               </div>

               <div className="flex flex-col justify-center space-y-8">
                  <div className="border-l-4 border-gray-300 pl-8 py-2">
                     <h4 className="text-xl font-bold mb-2">Visual Standards</h4>
                     <p className="text-gray-600 leading-relaxed">
                        Our products must have a clear visual point of view that is recognizable as Repos. We aim for pixel-perfect implementation and thoughtful micro-interactions.
                     </p>
                  </div>
                  <div className="bg-gray-200 h-[1px] w-full"></div>
                  <div className="grid grid-cols-2 gap-8">
                     <div>
                        <h5 className="font-bold text-sm uppercase tracking-wide text-gray-500 mb-2">Tools</h5>
                        <p className="text-gray-800">Figma, Principle, ProtoPie, Adobe CC</p>
                     </div>
                     <div>
                        <h5 className="font-bold text-sm uppercase tracking-wide text-gray-500 mb-2">Motion</h5>
                        <p className="text-gray-800">After Effects, Lottie, Rive</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* PRODUCT SECTION */}
      <section id="product" className="py-32 px-6 bg-white scroll-mt-[100px]">
         <div className="max-w-7xl mx-auto">
            <div className="mb-24">
               <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter text-black">
                 Product Management
               </h2>
               <p className="text-2xl text-gray-500 font-light leading-relaxed max-w-4xl">
                 Product managers at Repos are strategic thinkers, not feature coordinators. We prioritize ruthlessly to delight users and drive business impact.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
               {[
                 {
                   title: "Strategy Over Roadmaps",
                   desc: "We define multi-year product visions aligned with company strategy. We focus on 'why' and 'what', giving engineering the freedom to solve the 'how'."
                 },
                 {
                   title: "Customer Obsession",
                   desc: "PMs spend significant time with customers: minimum 5 conversations weekly, quarterly field studies, and direct support ticket reviews."
                 },
                 {
                   title: "Experimentation",
                   desc: "Hypothesis-driven development. A/B testing for significant changes. Feature flags for safe rollouts. Quick kill switches for what doesn't work."
                 }
               ].map((item, i) => (
                 <div key={i} className="bg-white border border-gray-100 p-10 rounded-2xl shadow-lg shadow-gray-200/50 hover:shadow-xl transition-shadow">
                    <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-xl mb-8">
                       {i + 1}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                       {item.desc}
                    </p>
                 </div>
               ))}
            </div>

            <div className="bg-[#f0f9ff] border border-blue-100 rounded-3xl p-12 flex flex-col md:flex-row items-center justify-between gap-12">
               <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">The Product Manager's Mandate</h3>
                  <ul className="space-y-4">
                     <li className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-blue-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        <span className="text-blue-800">Define success metrics before building a single feature.</span>
                     </li>
                     <li className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-blue-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        <span className="text-blue-800">Navigate cross-functional dependencies and executive expectations.</span>
                     </li>
                     <li className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-blue-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        <span className="text-blue-800">Deep understanding of competitive landscape and market dynamics.</span>
                     </li>
                  </ul>
               </div>
               <div className="md:w-1/3 flex justify-center">
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-xl text-blue-600 font-bold text-center p-4 text-xs uppercase tracking-widest">
                     Vision<br/>Analysis<br/>Prioritization
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 px-6 bg-black text-white text-center">
        <div className="max-w-4xl mx-auto animate-on-scroll">
          <h2 className="text-6xl md:text-8xl font-bold mb-12 tracking-tighter">
            Join the collective.
          </h2>
          <p className="text-2xl text-gray-400 mb-16 leading-relaxed font-light">
            If you are top 1% in your field and want to solve problems that actually matter, we have a desk waiting for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
             <button className="px-12 py-6 bg-white text-black hover:bg-gray-200 font-bold rounded-full transition-all hover:-translate-y-1 tracking-widest uppercase text-sm shadow-2xl">
               See Engineering Roles
             </button>
             <button className="px-12 py-6 border border-white text-white hover:bg-white/10 font-bold rounded-full transition-all hover:-translate-y-1 tracking-widest uppercase text-sm">
               See All Roles
             </button>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default TeamsAtReposPage;
