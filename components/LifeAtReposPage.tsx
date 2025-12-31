
import React from 'react';

const LifeAtReposPage: React.FC = () => {
  return (
    <div className="bg-white text-gray-900 font-sans pt-[56px] min-h-screen selection:bg-blue-100">
      
      {/* Hero Section - Full Screen */}
      <section className="relative w-full h-screen overflow-hidden">
        <img 
          src="https://cdn-ilecgmn.nitrocdn.com/acjCYmeTHUoLWXqshCxypUQkGfAiXNyy/assets/images/optimized/rev-58ddcd0/reposenergy.com/wp-content/uploads/2022/01/career.png" 
          alt="Life at Repos" 
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 flex flex-col justify-end p-8 md:p-24 pb-32">
          <div className="max-w-5xl animate-fade-in-up">
             <span className="text-white font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-6 block border-l-2 border-blue-500 pl-4">Careers</span>
             <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tighter leading-[0.9]">Life at Repos</h1>
             <p className="text-xl md:text-2xl text-gray-200 font-light max-w-2xl leading-relaxed">
               More than a workplace. A movement.
             </p>
          </div>
        </div>
      </section>

      {/* Overview - Sticky Split Layout */}
      <section className="py-32 px-6 max-w-7xl mx-auto border-b border-gray-100">
        <div className="flex flex-col md:flex-row gap-16 lg:gap-32">
           <div className="md:w-1/3">
              <h2 className="text-4xl font-bold tracking-tight sticky top-32">Overview</h2>
           </div>
           <div className="md:w-2/3">
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light mb-12">
                At Repos, we believe exceptional work comes from exceptional people living exceptional lives. We've built more than just a workplace—we've created an ecosystem where innovation thrives because people thrive.
              </p>
              <p className="text-lg text-gray-500 leading-relaxed font-light">
                From the moment you join Repos, you become part of a community that challenges convention, celebrates individuality, and pushes the boundaries of what's possible in technology. Life at Repos is defined not by perks or policies, but by the extraordinary people you'll work alongside and the culture of relentless curiosity we've cultivated together.
              </p>
           </div>
        </div>
      </section>

      {/* Culture & Values - Bento Grid */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs block mb-4">Our DNA</span>
            <h2 className="text-5xl font-bold tracking-tighter text-gray-900">Culture & Values</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Innovation Through Diversity",
                desc: "We don't just talk about diversity—we architect for it. Our teams span six continents and represent over 70 nationalities. Different perspectives don't just make us inclusive—they make us unstoppable."
              },
              {
                title: "Ownership Without Hierarchy",
                desc: "Your ideas aren't filtered through layers of management. If you're the expert, you lead. Our organizational structure is deliberately flat because we believe bureaucracy kills innovation."
              },
              {
                title: "Fail Fast, Learn Faster",
                desc: "We celebrate intelligent failures. Our most successful products emerged from experiments that initially flopped. We've institutionalized learning from mistakes through our monthly 'Failure Forums'."
              },
              {
                title: "Quality Is Non-Negotiable",
                desc: "We ship products when they're ready, not when deadlines dictate. This isn't permission for perfectionism—it's commitment to excellence. Our engineers obsess over millisecond load times."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-12 rounded-2xl border border-gray-100 hover:border-blue-500/30 transition-all duration-300 group">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed font-light text-lg">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Environment - Split with Sticky Header */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
           <div className="flex flex-col lg:flex-row gap-20">
              <div className="lg:w-1/3">
                 <div className="sticky top-32">
                   <h2 className="text-4xl font-bold tracking-tight mb-6">Work Environment</h2>
                   <p className="text-gray-500 text-lg">Spaces designed for deep work, collaboration, and everything in between.</p>
                 </div>
              </div>
              <div className="lg:w-2/3 space-y-20">
                 <div>
                    <h3 className="text-2xl font-bold mb-6">Spaces Designed for Thinking</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        "Innovation Labs: Soundproof pods",
                        "Thinking Gardens: Outdoor reflection",
                        "Maker Spaces: 3D printers & tools",
                        "Library Lounges: Curated books",
                        "Social Hubs: Game rooms & cafés"
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                          <span className="text-gray-700 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                 </div>
                 
                 <div>
                    <h3 className="text-2xl font-bold mb-6">Flexible Work Philosophy</h3>
                    <p className="text-gray-600 mb-8 font-light text-lg">We pioneered "Outcomes Over Optics". Deliver exceptional results, choose how and where you work.</p>
                    <div className="grid grid-cols-2 gap-4">
                      {["Fully Remote", "Hybrid Flex", "Office-First", "Workation Program"].map((tag, i) => (
                        <div key={i} className="border border-gray-200 p-6 rounded-lg text-center hover:bg-black hover:text-white transition-all cursor-default">
                          <span className="font-bold">{tag}</span>
                        </div>
                      ))}
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Health & Wellness - Dark Mode Grid */}
      <section className="py-32 px-6 bg-[#050505] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 text-center max-w-3xl mx-auto">
            <h2 className="text-5xl font-bold tracking-tighter mb-6">Health & Wellness</h2>
            <p className="text-xl text-gray-400 font-light">Your wellbeing enables your best work. We take care of you, so you can take care of the innovation.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Physical",
                items: ["Comprehensive medical", "On-site health centers", "Fitness facilities", "Chef-prepared meals"]
              },
              {
                title: "Mental",
                items: ["Unlimited therapy", "Mindfulness programs", "Stress workshops", "Mental health days"]
              },
              {
                title: "Financial",
                items: ["Competitive equity", "Financial planning", "Loan repayment", "Emergency funds"]
              },
              {
                title: "Life",
                items: ["Unlimited PTO", "Sabbatical program", "Paid parental leave", "Family building"]
              }
            ].map((col, idx) => (
              <div key={idx} className="bg-white/5 p-10 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                <h3 className="text-2xl font-bold mb-8 text-white tracking-tight">{col.title}</h3>
                <ul className="space-y-4">
                  {col.items.map((item, i) => (
                    <li key={i} className="text-sm text-gray-400 font-light border-b border-white/5 pb-2 last:border-0">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning & Growth - Minimalist List */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/3">
              <h2 className="text-4xl font-bold tracking-tight sticky top-32">Learning & Growth</h2>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 gap-16">
              {[
                { 
                  head: "Continuous Education", 
                  sub: "$15,000/yr per employee", 
                  points: ["Repos University internal courses", "Global Conference Budget", "Tuition Reimbursement", "20% Learning Time"] 
                },
                { 
                  head: "Mentorship", 
                  sub: "Growth through connection", 
                  points: ["1-on-1 Leadership Mentorship", "Peer Learning Circles", "Reverse Mentoring", "Cross-Functional Shadowing"] 
                },
                { 
                  head: "Career Mobility", 
                  sub: "Promote from within", 
                  points: ["67% leadership filled internally", "Transfer every 2-3 years", "No penalty for exploration", "Stretch assignments"] 
                }
              ].map((area, i) => (
                <div key={i} className="border-t border-gray-100 pt-12">
                   <h3 className="text-3xl font-bold mb-2">{area.head}</h3>
                   <p className="text-blue-600 font-medium mb-8 uppercase tracking-widest text-xs">{area.sub}</p>
                   <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                     {area.points.map((pt, j) => (
                       <li key={j} className="text-gray-600 font-light text-lg flex items-center gap-3">
                         <span className="w-1 h-1 bg-black rounded-full"></span>
                         {pt}
                       </li>
                     ))}
                   </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community & Relocation - Full Width Cards */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="bg-white p-12 rounded-3xl shadow-sm">
              <h2 className="text-3xl font-bold mb-8">Community</h2>
              <div className="space-y-8">
                <div>
                  <h4 className="font-bold text-lg mb-2 text-gray-900">Employee Resource Groups</h4>
                  <p className="text-gray-600 font-light">Women in Tech, LGBTQ+ Alliance, Heritage Groups, Neurodiversity Network. Each funded for impact.</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-gray-900">Social & Giving</h4>
                  <p className="text-gray-600 font-light">Weekly happy hours, annual summits, 5 paid volunteer days, and donation matching up to $10,000.</p>
                </div>
              </div>
           </div>
           <div className="bg-blue-600 text-white p-12 rounded-3xl shadow-sm">
              <h2 className="text-3xl font-bold mb-8">Relocation</h2>
              <div className="space-y-8">
                <div>
                  <h4 className="font-bold text-lg mb-2 text-white">Relocation Support</h4>
                  <p className="text-blue-100 font-light">We handle everything: moving costs, housing, visas, spousal support, and school searches for your family.</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-white">Global Mobility</h4>
                  <p className="text-blue-100 font-light">With offices in 25 countries, move for short-term assignments or permanent relocation seamlessly.</p>
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* Compensation & Life Stages */}
      <section className="py-32 px-6 bg-white">
         <div className="max-w-7xl mx-auto space-y-32">
            
            {/* Compensation */}
            <div>
              <h2 className="text-4xl font-bold mb-16 text-center tracking-tight">Compensation & Equity</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                 {[
                   { t: "Competitive Pay", d: "90th percentile benchmarking. High base salaries + 15-30% bonuses." },
                   { t: "Equity Ownership", d: "Competitive RSUs, early exercise options, and 10-year exercise windows." },
                   { t: "Transparency", d: "Internal salary bands published. No negotiation games. Equal pay for equal work." }
                 ].map((c, i) => (
                   <div key={i} className="text-center">
                      <div className="w-16 h-1 bg-black mx-auto mb-6"></div>
                      <h3 className="text-2xl font-bold mb-4">{c.t}</h3>
                      <p className="text-gray-600 font-light leading-relaxed">{c.d}</p>
                   </div>
                 ))}
              </div>
            </div>

            {/* Life Stages */}
            <div>
               <h2 className="text-4xl font-bold mb-16 text-center tracking-tight">Life Stages</h2>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-gray-50 p-10 rounded-2xl">
                     <span className="text-pink-500 font-bold uppercase tracking-widest text-xs mb-4 block">New Parents</span>
                     <ul className="space-y-3 text-gray-700 font-medium">
                       <li>6 months fully paid leave</li>
                       <li>Gradual return-to-work</li>
                       <li>Subsidized childcare</li>
                     </ul>
                  </div>
                  <div className="bg-gray-50 p-10 rounded-2xl">
                     <span className="text-yellow-600 font-bold uppercase tracking-widest text-xs mb-4 block">Caregivers</span>
                     <ul className="space-y-3 text-gray-700 font-medium">
                       <li>Elder care support</li>
                       <li>Flexible schedules</li>
                       <li>12 weeks caregiver leave</li>
                     </ul>
                  </div>
                  <div className="bg-gray-50 p-10 rounded-2xl">
                     <span className="text-purple-600 font-bold uppercase tracking-widest text-xs mb-4 block">Transitions</span>
                     <ul className="space-y-3 text-gray-700 font-medium">
                       <li>Career break program</li>
                       <li>Sabbatical program</li>
                       <li>Retirement planning</li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Employee Stories - Carousel-like Grid */}
      <section className="py-32 px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto">
           <h2 className="text-3xl font-bold mb-16 tracking-widest uppercase text-gray-500">Voices</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                { quote: "I came to Repos as a junior engineer. Within 18 months, I was leading a team of 12. That trajectory isn't possible anywhere else.", author: "Maya Chen", role: "Engineering Manager" },
                { quote: "The flexibility here is real. I worked from Buenos Aires for 6 months while caring for my father. My team supported me completely.", author: "Carlos Rodriguez", role: "Product Designer" },
                { quote: "Repos is the only place where I felt my whole self was welcomed. As a Black woman in tech, that matters.", author: "Jasmine Williams", role: "Data Scientist" },
                { quote: "The learning budget isn't just on paper. I've attended 8 conferences in 2 years and completed a master's degree.", author: "Rahul Sharma", role: "Senior Software Engineer" }
              ].map((story, i) => (
                <div key={i} className="border-l border-gray-800 pl-8">
                   <p className="text-xl md:text-2xl font-light leading-relaxed mb-8 text-gray-300">"{story.quote}"</p>
                   <div>
                      <p className="font-bold text-white text-lg">{story.author}</p>
                      <p className="text-blue-500 text-sm uppercase tracking-widest">{story.role}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* The Repos Difference & CTA */}
      <section className="py-40 px-6 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-6xl md:text-8xl font-bold mb-12 tracking-tighter">Ready?</h2>
          <p className="text-2xl text-gray-600 mb-16 leading-relaxed font-light">
            Life at Repos isn't for everyone. We expect excellence, value autonomy, and move fast. But if you're ready to do the best work of your career, we're ready for you.
          </p>
          <button className="px-12 py-6 bg-black text-white font-bold rounded-full hover:bg-gray-900 transition-all hover:-translate-y-1 tracking-widest uppercase text-sm shadow-xl">
            Explore Open Positions
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

export default LifeAtReposPage;
