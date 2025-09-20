import React, { useState, useEffect } from "react";
import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
import { motion } from "framer-motion";

const Hero = () => {
  const [showGetStarted, setShowGetStarted] = useState(false);

  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist');
    waitlistSection.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGetStarted(true);
    }, 1200); // Wait 1.2 seconds before showing GetStarted
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="flex md:flex-row flex-col min-h-[calc(100vh-76px)] items-center">
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-red" style={{ color: "lightblue" }}>Coming Soon!</span>
          </p>
        </motion.div>

        <div className="flex flex-row justify-between items-center w-full">
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Your Data Built<br className="sm:block hidden" />{" "}
            <span className="text-gradient">Empires.</span>{" "}
          </motion.h1>

          <div className="ss:flex hidden md:mr-4 mr-0">
            {showGetStarted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <GetStarted />
              </motion.div>
            )}
          </div>
        </div>

        <motion.h1 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Now It Builds Yours.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className={`${styles.paragraph} max-w-[470px] mt-5`}>
          At WeSperr, we believe your data should work for you—not against you. Our platform puts you in the driver's seat, turning your data into opportunities while keeping your privacy first.
        </motion.p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-6 relative`}>
        <motion.img 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          src={robot} 
          alt="billing" 
          className="w-[100%] h-[100%] relative z-[5] max-h-[580px] object-contain" 
        />

        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        {showGetStarted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <GetStarted />
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Hero;
