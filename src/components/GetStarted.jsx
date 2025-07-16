import styles from "../style";
import { arrowUp } from "../assets";
import { motion } from "framer-motion";

const GetStarted = () => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    animate={{
      scale: [1, 1.05, 1],
      boxShadow: [
        "0px 0px 0px rgba(33, 150, 243, 0)",
        "0px 0px 20px rgba(33, 150, 243, 0.5)",
        "0px 0px 0px rgba(33, 150, 243, 0)"
      ]
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }}
    className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
  >
    <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
      <motion.div 
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
        className={`${styles.flexStart} flex-row`}
      >
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient">&nbsp;&nbsp;&nbsp;&nbsp;Get<br /> Started!</span>
        </p>
        <motion.img 
          animate={{
            y: [0, -5, 0]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          src={arrowUp} 
          alt="arrow-up" 
          className="w-[23px] h-[23px] object-contain" 
        />
      </motion.div>
      
      
    </div>
  </motion.div>
);


export default GetStarted;
