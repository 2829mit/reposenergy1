
import React from 'react';

const WorkAtReposPage: React.FC = () => {
  return (
    <div className="bg-white text-gray-900 font-sans pt-[56px] min-h-screen selection:bg-blue-100">
      
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden flex flex-col justify-center items-center text-center px-6 bg-black">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2400" 
            alt="Work at Repos" 
            className="w-full h-full object-cover opacity-40 filter grayscale scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-5xl animate-fade-in-up">
           <span className="text-blue-500 font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-8 block">Join the Collective</span>
           <h1 className="text-6xl md:text-9xl font-bold text-white mb-8 tracking-tighter">Work at Repos</h1>
           <p className="text-xl md:text-3xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
             The arena where you apply your deepest expertise to solve problems that matter.
           </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-32 px-6 max-w-7xl mx-auto border-b border-gray-100">
        <div className="flex flex-col md:flex-row gap-16 lg:gap-32">
           <div className="md:w-1/3">
              <h2 className="text-4xl font-bold tracking-tight sticky top-32">Overview</h2>
           </div>
           <div className="md:w-2/3">
              <p className="text-2xl text-gray-800 leading-relaxed font-light mb-12">
                At Repos, work isn't something you endure. It's the arena where you apply your deepest expertise.
              </p>
              <p className="text-lg text-gray-500 leading-relaxed font-light mb-8">
                Our approach is fundamentally different: we organize by excellence, not by org charts. We collaborate across boundaries, not within silos. We ship products that delight millions, not features that satisfy metrics.
              </p>
              <p className="text-lg text-gray-500 leading-relaxed font-light">
                When you work at Repos, you join a collective of specialists who believe that the intersection of technology and design can fundamentally improve how people live, work, and connect.
              </p>
           </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
             <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Operating System</span>
             <h2 className="text-5xl font-bold tracking-tighter">How We Work</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
             <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-8 text-blue-600 font-bold text-xl">1</div>
                <h3 className="text-2xl font-bold mb-4">Functional Excellence</h3>
                <p className="text-gray-600 mb-6 font-light leading-relaxed">
                   Engineers lead engineering. Designers lead design. Product experts lead product.
                </p>
                <ul className="space-y-3 text-sm font-medium text-gray-500">
                   <li className="flex gap-3">✓ No general managers managing experts</li>
                   <li className="flex gap-3">✓ Deep domain knowledge drives decisions</li>
                   <li className="flex gap-3">✓ Natural accountability</li>
                </ul>
             </div>

             <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-8 text-purple-600 font-bold text-xl">2</div>
                <h3 className="text-2xl font-bold mb-4">Cross-Functional</h3>
                <p className="text-gray-600 mb-6 font-light leading-relaxed">
                   No single team owns a product. Every breakthrough requires dozens of specialist teams.
                </p>
                <ul className="space-y-3 text-sm font-medium text-gray-500">
                   <li className="flex gap-3">✓ Shared purpose trumps team goals</li>
                   <li className="flex gap-3">✓ Collective launch responsibility</li>
                   <li className="flex gap-3">✓ Integrated design reviews</li>
                </ul>
             </div>

             <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-8 text-green-600 font-bold text-xl">3</div>
                <h3 className="text-2xl font-bold mb-4">Decision Philosophy</h3>
                <p className="text-gray-600 mb-6 font-light leading-relaxed">
                   We make decisions collaboratively but decisively. We value diverse input, not groupthink.
                </p>
                <ul className="space-y-3 text-sm font-medium text-gray-500">
                   <li className="flex gap-3">✓ Consultation Over Consensus</li>
                   <li className="flex gap-3">✓ Disagree and Commit</li>
                   <li className="flex gap-3">✓ Data-Informed, Not Data-Driven</li>
                </ul>
             </div>
          </div>
        </div>
      </section>

      {/* Product Development Process - Timeline */}
      <section className="py-32 px-6 bg-white">
         <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-24 text-center tracking-tighter">Development Process</h2>
            <div className="relative">
               {/* Line */}
               <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-100 -translate-y-1/2 z-0"></div>

               <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
                 {[
                   {
                     step: "01",
                     title: "Discovery",
                     items: ["Deep user research", "Technical feasibility", "Rapid prototyping"]
                   },
                   {
                     step: "02",
                     title: "Development",
                     items: ["Agile, not agile theater", "Design-engineering partnership", "Automated quality gates"]
                   },
                   {
                     step: "03",
                     title: "Launch",
                     items: ["Internal dogfooding", "Gradual rollout (1% -> 100%)", "Rapid post-launch iteration"]
                   }
                 ].map((phase, idx) => (
                   <div key={idx} className="bg-white p-8 border border-gray-100 rounded-xl shadow-lg lg:shadow-none lg:border-0 text-center lg:text-left">
                      <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center font-bold text-2xl mb-8 mx-auto lg:mx-0 shadow-xl relative z-10 border-4 border-white">
                         {phase.step}
                      </div>
                      <h3 className="text-3xl font-bold mb-6">{phase.title}</h3>
                      <ul className="space-y-3 inline-block text-left">
                         {phase.items.map((item, i) => (
                           <li key={i} className="flex items-center gap-3 text-gray-500 font-medium">
                              <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
                              {item}
                           </li>
                         ))}
                      </ul>
                   </div>
                 ))}
               </div>
            </div>
         </div>
      </section>

      {/* Engineering Excellence (Dark) */}
      <section className="py-32 px-6 bg-[#0a0a0a] text-white">
         <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-20">
               <div className="lg:w-1/3">
                  <div className="sticky top-32">
                     <span className="text-blue-500 font-bold tracking-widest uppercase text-xs mb-4 block">Excellence</span>
                     <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">Engineering</h2>
                     <p className="text-gray-400 text-lg font-light leading-relaxed">
                        Our engineering bar is exceptionally high. We use the right tool for the job, not the trendy tool.
                     </p>
                  </div>
               </div>

               <div className="lg:w-2/3 space-y-24">
                  {/* Standards */}
                  <div>
                     <h3 className="text-2xl font-bold mb-8 text-white border-b border-gray-800 pb-4">Standards</h3>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                          { title: "Code Quality", desc: ">80% test coverage. Peer reviews. Automated linting." },
                          { title: "Architecture", desc: "API-first design. Event-driven workflows. IaC." },
                          { title: "Performance", desc: "Sub-100ms API response. <2s app launch." },
                          { title: "Security", desc: "Zero-trust. End-to-end encryption. Regular pen-testing." }
                        ].map((item, idx) => (
                          <div key={idx} className="bg-white/5 p-6 rounded-lg border border-white/5">
                             <h4 className="text-blue-400 font-bold mb-2">{item.title}</h4>
                             <p className="text-gray-400 text-sm">{item.desc}</p>
                          </div>
                        ))}
                     </div>
                  </div>

                  {/* Stack */}
                  <div>
                     <h3 className="text-2xl font-bold mb-8 text-white border-b border-gray-800 pb-4">Stack</h3>
                     <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                          { cat: "Backend", tools: "Python, Go, Java, Kafka" },
                          { cat: "Frontend", tools: "React, Vue, Swift, Kotlin" },
                          { cat: "Data", tools: "PyTorch, Spark, Databricks" },
                          { cat: "Infra", tools: "AWS/GCP, Terraform, K8s" }
                        ].map((stack, i) => (
                          <div key={i} className="bg-black p-4 rounded border border-gray-800">
                             <span className="text-[10px] uppercase tracking-wider text-gray-500 block mb-2">{stack.cat}</span>
                             <span className="text-sm font-mono text-gray-300 block">{stack.tools}</span>
                          </div>
                        ))}
                     </div>
                  </div>

                  {/* Culture */}
                  <div>
                     <h3 className="text-2xl font-bold mb-8 text-white border-b border-gray-800 pb-4">Culture</h3>
                     <ul className="space-y-6">
                        {[
                          { label: "Ownership", text: "Engineers own features from conception to operation." },
                          { label: "Blameless Post-Mortems", text: "Focus on systemic improvements, not blame." },
                          { label: "Technical Debt", text: "Explicitly budgeted 20% time for refactoring." },
                          { label: "Innovation Time", text: "20% time on exploratory projects and learning." }
                        ].map((cul, i) => (
                          <li key={i} className="flex gap-4 items-baseline">
                             <span className="w-2 h-2 bg-blue-500 rounded-full shrink-0"></span>
                             <div>
                                <strong className="text-white mr-2">{cul.label}</strong>
                                <span className="text-gray-400 font-light">{cul.text}</span>
                             </div>
                          </li>
                        ))}
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Design & PM - Split Layout */}
      <section className="py-32 px-6 bg-white">
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24">
            <div>
               <h2 className="text-4xl font-bold mb-12 tracking-tight">Design Philosophy</h2>
               <div className="space-y-12">
                  <div>
                     <h3 className="text-xl font-bold mb-4">User-Centered</h3>
                     <p className="text-gray-600 font-light leading-relaxed">Everything starts with research. Contextual inquiries, usability testing, and quantitative analytics drive our design process.</p>
                  </div>
                  <div>
                     <h3 className="text-xl font-bold mb-4">Visual Standards</h3>
                     <p className="text-gray-600 font-light leading-relaxed">Beauty matters. Our products must be aesthetically distinctive, functional, accessible (WCAG 2.1 AAA), and performant (60fps animations).</p>
                  </div>
                  <div className="bg-gray-50 p-8 rounded-xl">
                     <h4 className="font-bold text-xs uppercase tracking-wide mb-4 text-gray-400">The Toolkit</h4>
                     <div className="flex flex-wrap gap-2">
                        {["Figma", "ProtoPie", "Design Tokens", "Motion", "Component Library"].map((tool, i) => (
                           <span key={i} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-xs font-bold text-gray-900">{tool}</span>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
            <div>
               <h2 className="text-4xl font-bold mb-12 tracking-tight">Product Management</h2>
               <div className="space-y-12">
                  <div>
                     <h3 className="text-xl font-bold mb-4">Strategy Over Roadmaps</h3>
                     <p className="text-gray-600 font-light leading-relaxed">PMs are strategic thinkers, not feature coordinators. We focus on vision setting, ruthless prioritization, and defining metrics before building.</p>
                  </div>
                  <div>
                     <h3 className="text-xl font-bold mb-4">Customer Obsession</h3>
                     <p className="text-gray-600 font-light leading-relaxed">PMs spend significant time with customers: minimum 5 conversations weekly, field studies, and support ticket reviews.</p>
                  </div>
                  <div>
                     <h3 className="text-xl font-bold mb-4">Experimentation Culture</h3>
                     <ul className="grid grid-cols-2 gap-4 mt-4">
                        {["Hypothesis-driven", "A/B testing", "Feature flags", "Quick kill switches"].map((ex, i) => (
                           <li key={i} className="text-sm text-gray-600 font-medium flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-black rounded-full"></span> {ex}
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Collaboration & Growth - Clean Grid */}
      <section className="py-32 px-6 bg-gray-50 border-t border-gray-200">
         <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-20 text-center tracking-tighter">Culture & Growth</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               
               {/* Communication */}
               <div className="bg-white p-10 rounded-2xl shadow-sm hover:-translate-y-1 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Communication</h3>
                  <p className="text-gray-600 font-light mb-6">Asynchronous-first. Default to written communication. Meetings only when necessary.</p>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Tools: Slack, Notion, Linear</p>
               </div>

               {/* Meetings */}
               <div className="bg-white p-10 rounded-2xl shadow-sm hover:-translate-y-1 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Meetings That Matter</h3>
                  <ul className="space-y-3 text-sm text-gray-600 font-medium">
                     <li>• No Meeting Wednesdays</li>
                     <li>• Max 50 minutes</li>
                     <li>• Agendas required 24h in advance</li>
                  </ul>
               </div>

               {/* Performance */}
               <div className="bg-white p-10 rounded-2xl shadow-sm hover:-translate-y-1 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Performance</h3>
                  <p className="text-gray-600 font-light">Continuous feedback, not just annual reviews. Evaluation based on impact, excellence, and collaboration.</p>
               </div>

               {/* Career Dev */}
               <div className="bg-white p-10 rounded-2xl shadow-sm hover:-translate-y-1 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Career Development</h3>
                  <p className="text-gray-600 font-light">Dual tracks for ICs and Management. You don't need to become a manager to advance.</p>
               </div>

               {/* Work-Life */}
               <div className="bg-white p-10 rounded-2xl shadow-sm hover:-translate-y-1 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Work-Life Integration</h3>
                  <ul className="space-y-3 text-sm text-gray-600 font-medium">
                     <li>• Flexible core hours (10am-3pm)</li>
                     <li>• Remote/Hybrid choice</li>
                     <li>• Unlimited PTO (20 days min)</li>
                  </ul>
               </div>

               {/* DEI */}
               <div className="bg-white p-10 rounded-2xl shadow-sm hover:-translate-y-1 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Diversity & Inclusion</h3>
                  <p className="text-gray-600 font-light">Commitment beyond slogans. Diverse interview panels, sponsorship programs, and pay equity audits.</p>
               </div>

            </div>
         </div>
      </section>

      {/* Innovation & Onboarding */}
      <section className="py-32 px-6 bg-white">
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24">
            <div>
               <h2 className="text-4xl font-bold mb-12 tracking-tight">Innovation Programs</h2>
               <div className="space-y-8">
                  <div className="bg-yellow-50 p-8 rounded-xl border border-yellow-100">
                     <h3 className="text-xl font-bold text-yellow-900">20% Time</h3>
                     <p className="text-yellow-800 text-sm mt-2 leading-relaxed">One day per week for learning, side projects, or open source. Many core features started here.</p>
                  </div>
                  <div className="bg-red-50 p-8 rounded-xl border border-red-100">
                     <h3 className="text-xl font-bold text-red-900">Hackathons</h3>
                     <p className="text-red-800 text-sm mt-2 leading-relaxed">Quarterly 48-hour events. Cross-functional teams. Winners get resources to develop ideas.</p>
                  </div>
                  <div className="bg-blue-50 p-8 rounded-xl border border-blue-100">
                     <h3 className="text-xl font-bold text-blue-900">Innovation Labs</h3>
                     <p className="text-blue-800 text-sm mt-2 leading-relaxed">Dedicated budget for emerging tech (VR, Quantum) and university partnerships.</p>
                  </div>
               </div>
            </div>
            <div>
               <h2 className="text-4xl font-bold mb-12 tracking-tight">Onboarding Excellence</h2>
               <div className="space-y-10 pl-6 border-l-2 border-gray-100">
                  <div className="relative">
                     <div className="absolute -left-[31px] top-1 w-4 h-4 bg-black rounded-full border-2 border-white"></div>
                     <h3 className="font-bold text-xl mb-2">First Week</h3>
                     <p className="text-gray-600 font-light">Equipment ready Day 1. First commit to production. Assigned onboarding buddy.</p>
                  </div>
                  <div className="relative">
                     <div className="absolute -left-[31px] top-1 w-4 h-4 bg-gray-400 rounded-full border-2 border-white"></div>
                     <h3 className="font-bold text-xl mb-2">First Month</h3>
                     <p className="text-gray-600 font-light">Ship meaningful feature. Present at showcase. Complete compliance training.</p>
                  </div>
                  <div className="relative">
                     <div className="absolute -left-[31px] top-1 w-4 h-4 bg-gray-200 rounded-full border-2 border-white"></div>
                     <h3 className="font-bold text-xl mb-2">First 90 Days</h3>
                     <p className="text-gray-600 font-light">Lead feature end-to-end. Join an ERG. Set career development goals.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Reality Check */}
      <section className="py-32 px-6 bg-black text-white">
         <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center tracking-tighter">Reality Check</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
               <div>
                  <h3 className="text-3xl font-bold text-green-500 mb-8">The Reward</h3>
                  <ul className="space-y-6">
                     {[
                       "Autonomy to make decisions",
                       "Impact reaching millions in weeks",
                       "Surrounded by world-class talent",
                       "Meritocracy where ideas win",
                       "Solving real problems"
                     ].map((item, i) => (
                       <li key={i} className="flex gap-4 text-xl font-light text-gray-300">
                          <span className="text-green-500 font-bold">✓</span> {item}
                       </li>
                     ))}
                  </ul>
               </div>
               <div>
                  <h3 className="text-3xl font-bold text-orange-500 mb-8">The Challenge</h3>
                  <ul className="space-y-6">
                     {[
                       "High bar for excellence consistently",
                       "Fast pace; we evolve rapidly",
                       "Ambiguity; figuring it out is part of the job",
                       "Collaboration is essential; no lone wolves",
                       "Ownership means accountability"
                     ].map((item, i) => (
                       <li key={i} className="flex gap-4 text-xl font-light text-gray-300">
                          <span className="text-orange-500 font-bold">⚠</span> {item}
                       </li>
                     ))}
                  </ul>
               </div>
            </div>
            <p className="text-center text-gray-500 mt-20 text-xl max-w-2xl mx-auto font-light leading-relaxed">
               If you prefer clear direction, predictable routines, and minimal change, this isn't the place. But if you thrive under pressure and love solving hard problems, you'll love it here.
            </p>
         </div>
      </section>

      {/* CTA */}
      <section className="py-40 px-6 bg-blue-600 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-6xl md:text-8xl font-bold mb-12 tracking-tighter">Ready?</h2>
          <p className="text-2xl text-blue-100 mb-16 leading-relaxed font-light">
            Exceptional work requires exceptional people. Explore our open positions and join us in building the future.
          </p>
          <button className="px-12 py-6 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-100 transition-all hover:-translate-y-1 tracking-widest uppercase text-sm shadow-2xl">
            View Open Positions
          </button>
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
      `}</style>
    </div>
  );
};

export default WorkAtReposPage;
