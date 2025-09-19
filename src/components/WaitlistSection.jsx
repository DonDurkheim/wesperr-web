import React from "react";
import styles from "../style";
import { WaitlistForm } from "./";
import { motion } from "framer-motion";
import { shield, star, send } from "../assets";

const FeatureCard = ({ icon, title, content, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="flex flex-row p-6 rounded-[20px] feature-card cursor-pointer mb-6 last:mb-0"
  >
    <div className="w-[64px] h-[64px] rounded-full flex justify-center items-center bg-dimBlue">
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </motion.div>
);

const StatCard = ({ value, label, delay = 0 }) => (
  <motion.div
    initial={{ scale: 0.5, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.5, delay }}
    className="flex flex-col items-center justify-center px-8 py-4 bg-black-gradient rounded-[20px] min-w-[200px]"
  >
    <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-gradient mb-2">
      {value}
    </h4>
    <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase text-center">
      {label}
    </p>
  </motion.div>
);

const WaitlistSection = () => (
  <section id="waitlist" className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} flex-col bg-black-gradient-2 rounded-[20px] box-shadow relative overflow-hidden`}>
    {/* Background Animation */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
    
    {/* Main Content */}
    <div className="relative z-[1] flex md:flex-row flex-col items-center md:justify-between w-full">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1 flex flex-col md:text-left text-center md:mb-0 mb-10"
      >
        <h2 className={`${styles.heading2}`}>
          Join The waitlist!
        </h2>
        <p className={`${styles.paragraph} mt-5`}>
          Join thousands of early adopters who are already positioned to benefit from the future of personal data monetization.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex-1 w-full max-w-[500px] md:ml-10"
      >
        <WaitlistForm />
      </motion.div>
    </div>

    
    
  </section>
);

export default WaitlistSection;
