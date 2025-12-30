
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden flex flex-col items-center bg-black">
      {/* Cinematic Video Background - Matching the dark globe aesthetic */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-50 scale-110"
      >
        <source src="https://videos.pexels.com/video-files/3129957/3129957-hd_1920_1080_25fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Main Content Overlay - Precise replication of reference image hierarchy */}
      <div className="relative z-10 text-center text-white px-4 flex flex-col items-center justify-center h-full w-full max-w-7xl animate-hero">
        
        {/* Top Text Cluster */}
        <div className="mb-4">
          <p className="text-[10px] md:text-[12px] font-medium tracking-[0.7em] uppercase opacity-60">
            The New Standard
          </p>
        </div>
        
        {/* Massive Center Heading - Size reduced to prevent stretching */}
        <h1 className="text-[38px] md:text-[68px] lg:text-[92px] font-bold tracking-tight uppercase leading-[1.1] mb-8">
          Future Ready
        </h1>
        
        {/* Subtle Horizontal Divider */}
        <div className="w-[100px] md:w-[140px] h-[1px] bg-white/20 mb-8"></div>
        
        {/* Bottom Detailed Branding */}
        <div className="flex flex-col items-center space-y-3">
          <p className="text-[12px] md:text-[14px] font-medium tracking-[0.45em] uppercase opacity-70 leading-relaxed">
            Repos Fuel Intelligence Platform
          </p>
        </div>
      </div>

      {/* Bottom Scroll UI Component */}
      <div className="absolute bottom-10 flex flex-col items-center space-y-4 animate-scroll-hint">
        <p className="text-[9px] tracking-[0.5em] uppercase font-bold text-white/40">
          Scroll
        </p>
        <div className="w-[1px] h-14 bg-gradient-to-b from-white/40 to-transparent"></div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); filter: blur(10px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        @keyframes scrollHint {
          0%, 100% { opacity: 0.3; transform: translateY(0); }
          50% { opacity: 0.7; transform: translateY(8px); }
        }
        .animate-hero {
          animation: fadeIn 2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-scroll-hint {
          animation: scrollHint 3s ease-in-out infinite;
        }
        /* Custom font smoothing for high-end text rendering */
        h1, p {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
    </div>
  );
};

export default Hero;