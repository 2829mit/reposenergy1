import React from 'react';

const WorkAtReposPage: React.FC = () => {
  return (
    <div className="bg-black text-white font-sans pt-[56px] min-h-screen">
      
      {/* Hero Section */}
      <section className="relative w-full h-[85vh] overflow-hidden flex flex-col justify-center items-center text-center px-6">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2400" 
            alt="Work at Repos" 
            className="w-full h-full object-cover opacity-40 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60" />
        </div>
        
        <div className="relative z-10 max-w-4xl animate-fade-in">
           <span className="text-blue-500 font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-6 block">Join the Mission</span>
           <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tighter leading-none">
             Solve Hard Problems.
           </h1>
           <p className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
             We are building the operating system for energy distribution. It’s messy, it’s complex, and it changes everything.
           </p>
        </div>
      </section>

      {/* The Challenge Section */}
      <section className="py-32 px-6 bg-[#050505]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20">
           <div className="md:w-1/3">
             <h2 className="text-4xl font-bold mb-6">The Energy Paradox.</h2>
             <div className="h-1 w-20 bg-blue-600 mb-8"></div>
             <p className="text-gray-400 text-lg leading-relaxed">
               Energy is the lifeblood of the economy, yet its last-mile distribution is stuck in the last century. We are here to bridge that gap with technology, hardware, and sheer will.
             </p>
           </div>
           <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="p-8 border border-white/10 rounded-xl hover:bg-white/5 transition-colors">
                 <h3 className="text-xl font-bold mb-3 text-white">First Principles Thinking</h3>
                 <p className="text-gray-500 text-sm leading-relaxed">We don't accept "that's how it's always been done." We strip problems down to physics and economics and build up from there.</p>
              </div>
              <div className="p-8 border border-white/10 rounded-xl hover:bg-white/5 transition-colors">
                 <h3 className="text-xl font-bold mb-3 text-white">Extreme Ownership</h3>
                 <p className="text-gray-500 text-sm leading-relaxed">No bystanders. Everyone at Repos owns their outcome, their code, their product, and their impact on the planet.</p>
              </div>
              <div className="p-8 border border-white/10 rounded-xl hover:bg-white/5 transition-colors">
                 <h3 className="text-xl font-bold mb-3 text-white">Hardware + Software</h3>
                 <p className="text-gray-500 text-sm leading-relaxed">We don't just write code. We bend steel, build circuits, and deploy massive physical infrastructure.</p>
              </div>
              <div className="p-8 border border-white/10 rounded-xl hover:bg-white/5 transition-colors">
                 <h3 className="text-xl font-bold mb-3 text-white">Speed as a Habit</h3>
                 <p className="text-gray-500 text-sm leading-relaxed">The energy crisis won't wait. We move with urgency, shipping features and products that matter, fast.</p>
              </div>
           </div>
        </div>
      </section>

      {/* Culture in Action (Instagram Links) */}
      <section className="py-32 px-6 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto">
           <div className="text-center mb-20">
              <span className="text-blue-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Culture in Motion</span>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">Inside the Hive.</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                We work hard, but we celebrate harder. From hackathons to festivals, here is a glimpse of life at Repos.
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Instagram Card 1 */}
              <a href="https://www.instagram.com/p/CXOT_qcoqBi/?utm_medium=copy_link" target="_blank" rel="noopener noreferrer" className="group relative block overflow-hidden rounded-2xl aspect-[4/5] md:aspect-video">
                 <img 
                   src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=1200" 
                   alt="Team Collaboration" 
                   className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                 <div className="absolute bottom-0 left-0 p-8">
                    <div className="flex items-center gap-2 mb-3 text-pink-500">
                       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                       <span className="text-xs font-bold uppercase tracking-wider">Featured Post</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:underline decoration-blue-500 underline-offset-4 decoration-2">Innovation Days</h3>
                    <p className="text-gray-300 text-sm mt-2">See how we brainstorm the next big thing.</p>
                 </div>
              </a>

              {/* Instagram Card 2 */}
              <a href="https://www.instagram.com/p/CSraJ0kDk_J/?utm_medium=copy_link" target="_blank" rel="noopener noreferrer" className="group relative block overflow-hidden rounded-2xl aspect-[4/5] md:aspect-video">
                 <img 
                   src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1200" 
                   alt="Team Celebration" 
                   className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                 <div className="absolute bottom-0 left-0 p-8">
                    <div className="flex items-center gap-2 mb-3 text-pink-500">
                       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                       <span className="text-xs font-bold uppercase tracking-wider">Featured Post</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:underline decoration-blue-500 underline-offset-4 decoration-2">Team Spirit</h3>
                    <p className="text-gray-300 text-sm mt-2">Building bonds that go beyond the desk.</p>
                 </div>
              </a>
           </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-8">Do the best work of your life.</h2>
        <button className="px-12 py-5 bg-white text-black font-bold uppercase tracking-widest text-sm rounded hover:bg-gray-200 transition-all transform hover:-translate-y-1">
           Explore Open Roles
        </button>
      </section>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default WorkAtReposPage;