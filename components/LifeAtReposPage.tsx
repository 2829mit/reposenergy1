import React from 'react';

const LifeAtReposPage: React.FC = () => {
  return (
    <div className="bg-white text-gray-900 font-sans pt-[56px] min-h-screen">
      
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
        <img 
          src="https://cdn-ilecgmn.nitrocdn.com/acjCYmeTHUoLWXqshCxypUQkGfAiXNyy/assets/images/optimized/rev-58ddcd0/reposenergy.com/wp-content/uploads/2022/01/career.png" 
          alt="Life at Repos" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-8 md:p-20">
          <div className="max-w-4xl animate-fade-in-up">
             <span className="text-blue-500 font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-4 block">Careers</span>
             <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Life at Repos</h1>
             <p className="text-xl md:text-2xl text-gray-200 font-light max-w-2xl">
               More than a workplace. A movement.
             </p>
          </div>
        </div>
      </section>

      {/* Content Section 1: Celebration */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
             <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                <img 
                  src="https://cdn-ilecgmn.nitrocdn.com/acjCYmeTHUoLWXqshCxypUQkGfAiXNyy/assets/images/optimized/rev-58ddcd0/reposenergy.com/wp-content/uploads/2022/01/DSC07080-1.png" 
                  alt="Team Celebration" 
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                />
             </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">Let’s Celebrate!</h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light mb-8">
              We love celebrating big as well as small achievements.
              Wrote an awesome code? Closed your first client? Just because you’re looking good today…
            </p>
            <div className="h-1 w-20 bg-blue-600"></div>
          </div>
        </div>
      </section>

      {/* Content Section 2 & 3: Possibility & Idea */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Card 1 */}
          <div className="bg-white p-12 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
             <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-8">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
             </div>
             <h3 className="text-3xl font-bold mb-6">Find your Possibility</h3>
             <p className="text-gray-600 leading-relaxed text-lg">
               Your job profile is not all that you are and we know it! We know that you are capable of more and we welcome that. Show us what you’ve got!
             </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-12 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
             <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-8">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
             </div>
             <h3 className="text-3xl font-bold mb-6">Got an Idea?</h3>
             <p className="text-gray-600 leading-relaxed text-lg">
               An idea without action is like a joke without a punchline. So if you have an idea let us together work on the punchline.
             </p>
          </div>

        </div>
      </section>

      {/* Join CTA */}
      <section className="py-32 px-6 text-center bg-black text-white">
        <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to join the revolution?</h2>
        <button className="px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-all transform hover:-translate-y-1 tracking-widest uppercase text-sm">
          View Open Positions
        </button>
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