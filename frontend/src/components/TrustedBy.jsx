import React from "react";
import styles from "../style";

// Import all SVG company logos
const images = import.meta.glob("../assets/companies/*.svg", {
  eager: true,
  as: "url",
});
const companyLogos = Object.values(images);

const TrustedBy = () => {
  return (
    <section
      className={`${styles.flexCenter} flex-col sm:mb-20 mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-8 rounded-xl mt-6 sm:mt-0 relative overflow-hidden`}
      style={{
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 15%, black 50%, rgba(0,0,0,0.05) 85%, transparent 100%)",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskSize: "100% 100%",
        maskImage:
          "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 15%, black 50%, rgba(0,0,0,0.05) 85%, transparent 100%)",
        maskRepeat: "no-repeat",
        maskSize: "100% 100%",
      }}
    >
      {/* Header */}
      <div className="flex items-center mb-8 z-20">
        <span className="font-poppins font-bold xs:text-[44px] text-[36px] xs:leading-[58px] leading-[46px] text-gradient">
          Listed On
        </span>
      </div>

      {/* Carousel */}
      <div className="relative w-full overflow-hidden">
        <div className="carousel flex animate-slide gap-28">
          {[...companyLogos, ...companyLogos].map((logo, index) => {
            const isIBM = logo.toLowerCase().includes("ibm"); // adjust if filename contains 'ibm'
            return (
              <img
                key={index}
                src={logo}
                alt={`company-${index}`}
                className={`w-auto object-contain hover:scale-105 transition-transform duration-300 ${
                  isIBM ? "h-20 sm:h-20 xs:h-16" : "h-16 sm:h-16 xs:h-12"
                }`}
              />
            );
          })}
        </div>
      </div>

      {/* Animation CSS */}
      <style jsx>{`
        .animate-slide {
          display: flex;
          width: max-content;
          animation: slide 22s linear infinite;
        }

        @keyframes slide {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 1024px) {
          .carousel img {
            height: auto !important; /* overridden by inline classes */
          }
          .carousel {
            gap: 5rem !important;
          }
        }

        @media (max-width: 640px) {
          .carousel img {
            height: auto !important; /* overridden by inline classes */
          }
          .carousel {
            gap: 3.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default TrustedBy;
