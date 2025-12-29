
import React from 'react';

interface AboutUsPageProps {
  onNavigateHome: () => void;
  onNavigateToApp: () => void;
  onExploreClick: () => void;
  onReposPayClick: () => void;
}

const AboutUsPage: React.FC<AboutUsPageProps> = ({ 
  onNavigateHome, 
  onNavigateToApp,
  onExploreClick,
  onReposPayClick
}) => {
  
  const handleNavClick = (item: string) => {
    if (item === 'Build Your Own RPS') onNavigateToApp();
    if (item === 'Home') onNavigateHome();
    if (item === 'Explore') onExploreClick();
    if (item === 'Repos Pay') onReposPayClick();
  };

  const timelineData = [
    {
      year: "2017",
      title: "The Inception",
      events: [
        "Start of Repos Dream – Started in a small office with a vision to change energy distribution.",
        "First Order Completion – Completed 3 Repos Mobile Petrol Pumps (RMPPs) for TATA.",
        "Meeting Mr. Ratan Tata – A pivotal mentorship began.",
        "Foundation of Repos IoT – Laid the groundwork for the world's largest mobile petrol pump facility.",
        "First RMPP Launch – Launched in Varanasi, bringing change to the fuel industry."
      ]
    },
    {
      year: "2019",
      title: "Policy & Recognition",
      events: [
        "Policy Change – GoI introduced Doorstep Diesel Delivery Policy after successful pilots.",
        "TED Talk – Co-founder Aditi Bhosale Walunj shared insights on the diesel industry.",
        "Completing 32 Pilots – Successfully executed government pilot projects.",
        "RMPPs for Indian Army – Deployed specialized units for DGBR and UN.",
        "Repos Towers – Established our innovation HQ in Pune.",
        "Repos IoT Hub – Opened the Chakan facility for groundbreaking R&D."
      ]
    },
    {
      year: "2021",
      title: "Global Stage",
      events: [
        "Energy Startup Summit – Encouraged India's entrepreneurial spirit in fuel.",
        "Patents – Secured 3 national patents and 1 WIPO patent.",
        "National Startup Award – Conferred by Hon. PM Shri Narendra Modi.",
        "VivaTech Paris – Represented India at Europe's largest startup event.",
        "DATUM Launch – Nationwide launch of our diesel data management tool."
      ]
    },
    {
      year: "2023",
      title: "Expansion",
      events: [
        "Select USA Summit – Invited by India and USA embassy to participate in Select USA Investment Summit."
      ]
    }
  ];

  const stats = [
    { label: "Indian Cities", value: "188+" },
    { label: "Mobile Petrol Pumps", value: "2,000+" },
    { label: "Litres of Diesel Sold", value: "4 Cr+" },
    { label: "Partners Acquired", value: "1,000+" },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-black selection:text-white pt-[56px]">
      {/* Hero Section */}
      <div className="relative py-24 px-6 border-b border-gray-100">
         <div className="max-w-7xl mx-auto text-center animate-fade-in">
            <span className="text-blue-600 font-bold tracking-[0.3em] uppercase text-xs mb-6 block">
              Our Journey
            </span>
            <h1 className="text-5xl md:text-8xl font-light tracking-tighter text-black mb-8">
              Relentless <span className="font-bold">Pursuit.</span>
            </h1>
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
              From a small office to a global energy revolution. We are changing how the world accesses energy, one drop at a time.
            </p>
         </div>
      </div>

      {/* Company Overview Section */}
      <div className="bg-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
              <p className="text-xl md:text-2xl font-light text-gray-800 leading-relaxed">
                  Repos Energy is a fuel-tech platform that enables businesses to get doorstep diesel delivery through a seamless app-based network. We connect <span className="font-medium text-black">2000+ petrol pumps</span> with <span className="font-medium text-black">700+ enterprises</span>, ensuring reliable supply with full transparency. Our IoT-enabled systems guarantee quality, quantity, and secure fuel management for both demand and supply sides.
              </p>
          </div>
      </div>

      {/* Founders Section - Split Layout */}
      <div className="flex flex-col lg:flex-row min-h-[800px]">
         {/* Image Side */}
         <div className="lg:w-1/2 h-[500px] lg:h-auto relative overflow-hidden bg-gray-50">
            <img 
              src="https://res.cloudinary.com/dt8jmqu8d/image/upload/v1764310562/Aditi-Bhosale-Walunj-Chetan-Walunj-scaled-1_ntm0gd.jpg" 
              alt="Chetan and Aditi Walunj" 
              className="absolute inset-0 w-full h-full object-contain object-center"
            />
         </div>
         
         {/* Text Side */}
         <div className="lg:w-1/2 bg-white flex flex-col justify-center p-12 lg:p-24">
            <h2 className="text-sm font-bold tracking-widest uppercase mb-4 text-gray-400">Founders</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-black mb-10 tracking-tight">Chetan & Aditi</h3>
            
            <div className="space-y-8 text-gray-600 font-light text-lg leading-relaxed">
               <p>
                 <span className="font-semibold text-black border-b border-black pb-0.5">Chetan Walunj</span> began his journey at 21, taking over his family's gas station business. Learning the ropes from the ground up, he saw the inefficiencies that plagued the industry.
               </p>
               <p>
                 <span className="font-semibold text-black border-b border-black pb-0.5">Aditi Bhosale Walunj</span>, with a background in forensics and international relations, brought a unique global perspective and analytical depth.
               </p>
               <p className="text-black italic border-l-4 border-gray-200 pl-6 py-2">
                 "Conceived in 2016, Repos was born from their shared vision to make energy accessible to every corner of the world."
               </p>
               <p>
                 Driven by relentless faith and an indomitable spirit, they believe the world is your oyster if you are relentless in your pursuit.
               </p>
            </div>
         </div>
      </div>

      {/* History of Innovation Timeline Section */}
      <section className="py-24 lg:py-40 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24 lg:mb-32">
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-blue-600 mb-4">Milestones</h2>
            <h3 className="text-4xl lg:text-6xl font-medium text-black tracking-tight">History of Innovation</h3>
          </div>

          <div className="relative">
            {/* Central Vertical Line (Desktop) */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-100 via-blue-500 to-blue-100 -translate-x-1/2"></div>
            
            {/* Left Vertical Line (Mobile) */}
            <div className="lg:hidden absolute left-4 top-0 bottom-0 w-[2px] bg-blue-500"></div>

            <div className="space-y-20 lg:space-y-40">
              {timelineData.map((era, idx) => (
                <div key={idx} className={`relative flex flex-col lg:flex-row items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-4 lg:left-1/2 w-4 h-4 rounded-full bg-white border-[3px] border-blue-600 z-10 -translate-x-1/2 lg:mt-0"></div>

                  {/* Year & Title Side */}
                  <div className={`w-full lg:w-1/2 pl-12 lg:pl-0 mb-8 lg:mb-0 ${idx % 2 === 0 ? 'lg:pr-24 lg:text-right' : 'lg:pl-24 lg:text-left'}`}>
                    <div className="inline-block px-4 py-1 bg-blue-600 text-white text-sm font-bold tracking-widest uppercase rounded-full mb-4">
                      {era.year}
                    </div>
                    <h4 className="text-3xl lg:text-4xl font-bold text-black mb-4 leading-tight">{era.title}</h4>
                  </div>

                  {/* Spacer for Line */}
                  <div className="hidden lg:block w-0 lg:w-0"></div>

                  {/* Events Card Side */}
                  <div className={`w-full lg:w-1/2 pl-12 lg:pl-0 ${idx % 2 === 0 ? 'lg:pl-24' : 'lg:pr-24'}`}>
                    <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 transform hover:-translate-y-2 group">
                      <ul className="space-y-5">
                        {era.events.map((event, eIdx) => (
                          <li key={eIdx} className="flex items-start gap-4">
                            <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5 opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all"></span>
                            <p className="text-[15px] lg:text-[17px] text-gray-600 font-normal leading-relaxed group-hover:text-gray-900 transition-colors">
                              {event}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats - Light Cards */}
      <div className="py-32 px-6 bg-white border-t border-gray-100">
         <div className="max-w-7xl mx-auto">
            <h2 className="text-center text-3xl font-light mb-16 tracking-widest uppercase text-gray-400">Our Presence</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {stats.map((stat, idx) => (
                 <div key={idx} className="bg-white p-10 text-center border border-gray-100 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group rounded-xl">
                    <h3 className="text-5xl md:text-6xl font-bold text-black mb-4 group-hover:text-blue-600 transition-colors">{stat.value}</h3>
                    <div className="h-1 w-12 bg-gray-100 mx-auto mb-4 group-hover:bg-blue-600 transition-colors"></div>
                    <p className="text-gray-500 uppercase tracking-widest text-xs font-semibold">{stat.label}</p>
                 </div>
               ))}
            </div>
         </div>
      </div>

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

export default AboutUsPage;
