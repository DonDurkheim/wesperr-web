import React from "react";
import { motion } from "framer-motion";

const Button = ({ styles, text = "Get Started", onClick }) => {
  const defaultScrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist');
    waitlistSection.scrollIntoView({ behavior: 'smooth' });
  };

  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    } else {
      defaultScrollToWaitlist();
    }
  };

  return (
    <motion.button 
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0px 0px 8px rgb(33, 150, 243)"
      }}
      whileTap={{ scale: 0.95 }}
      type="button" 
      className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
      onClick={handleClick}
    >
      {text}
    </motion.button>
  );
};

export default Button;
