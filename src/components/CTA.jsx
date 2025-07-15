import styles from "../style";
import Button from "./Button";
import { motion } from "framer-motion";

const CTA = () => (
  <motion.section 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    animate={{ 
      y: [0, -10, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow relative overflow-hidden`}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" 
         style={{ 
           backgroundSize: '200% 100%',
           animation: 'shimmer 2s infinite linear'
         }} 
    />
    <div className="flex-1 flex flex-col relative z-[1]">
      <motion.h2 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={styles.heading2}
      >
        Be Part of the Revolution
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className={`${styles.paragraph} max-w-[470px] mt-5`}
      >
        Join us in building a future where data works for everyone. Support ethical data sharing, collaborate with us, and make a difference. Together, let's redefine the value of data.
      </motion.p>
    </div>

    <motion.div 
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10 relative z-[1]`}
    >
      <Button />
    </motion.div>
  </motion.section>
);

export default CTA;
