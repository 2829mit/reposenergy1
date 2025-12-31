
import React from 'react';

const BRAND_LOGOS = [
  "https://res.cloudinary.com/dt8jmqu8d/image/upload/v1767183935/20201105065045_Adani_logo_2012_ua3cro.svg",
  "https://res.cloudinary.com/dt8jmqu8d/image/upload/v1767183928/680592bf67912-Atlas-Copco_wscawe.svg",
  "https://res.cloudinary.com/dt8jmqu8d/image/upload/v1767183919/vrl-logistics-ltd-siliguri-transporters-equvika0qs_rkhou0.png",
  "https://res.cloudinary.com/dt8jmqu8d/image/upload/v1767183910/Shapoorji_Pallonji_Group_logo.svg_izymim.png",
  "https://res.cloudinary.com/dt8jmqu8d/image/upload/v1767183903/PRAJIND.NS_BIG-4deeb8cb_odsyk8.png",
  "https://res.cloudinary.com/dt8jmqu8d/image/upload/v1767183897/IRB_jyfkmf.png",
  "https://res.cloudinary.com/dt8jmqu8d/image/upload/v1767183628/logo_evcfw2.png",
];

const BrandRow = ({ direction = 'left', speed = '40s' }: { direction?: 'left' | 'right', speed?: string }) => {
  const logos = [...BRAND_LOGOS, ...BRAND_LOGOS]; // Duplicate for seamless loop
  return (
    <div className="overflow-hidden py-4">
      <div className={direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'} style={{ animationDuration: speed }}>
        {logos.map((logo, idx) => (
          <div key={idx} className="mx-12 flex items-center justify-center h-16 w-32">
            <img 
              src={logo} 
              alt="Brand Logo" 
              className="max-h-12 max-w-full object-contain grayscale-logo opacity-60"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const TrustedBrands: React.FC = () => {
  return (
    <div className="relative w-full py-24 overflow-hidden bg-white">
      {/* Background Video for the section */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-10"
        >
          <source src="https://videos.pexels.com/video-files/3130182/3130182-hd_1920_1080_30fps.mp4" type="video/mp4" />
        </video>
        {/* Subtle Gradient Fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
      </div>

      <div className="relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-gray-400 mb-2">Enterprise Partners</h2>
          <h3 className="text-3xl font-light text-gray-800">Trusted by Global Leaders</h3>
        </div>

        <div className="space-y-4">
          <BrandRow direction="left" speed="50s" />
          <BrandRow direction="right" speed="60s" />
          <BrandRow direction="left" speed="55s" />
        </div>
      </div>
    </div>
  );
};

export default TrustedBrands;
