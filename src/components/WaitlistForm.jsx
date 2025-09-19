import React, { useState } from "react";
import styles from "../style";
import { motion, AnimatePresence } from "framer-motion";

const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus("loading");
    // Simulate API call - replace with actual API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1000);
  };

  return (
    <div className="w-full">
      <motion.form
        onSubmit={handleSubmit}
        className="relative flex flex-col sm:flex-row gap-4 sm:gap-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative flex-1">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email to join"
            disabled={status === "loading" || status === "success"}
            className="font-poppins font-normal text-[16px] leading-[24px] text-white 
                     bg-black-gradient border-2 border-secondary rounded-[10px] sm:rounded-l-[10px] sm:rounded-r-none
                     py-4 px-6 w-full focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50
                     disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
          />
          <AnimatePresence>
            {email && status === "idle" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.button
          type="submit"
          disabled={!email || status === "loading" || status === "success"}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="font-poppins font-medium text-[18px] leading-[24px] text-primary 
                   bg-blue-gradient rounded-[10px] sm:rounded-l-none sm:rounded-r-[10px]
                   py-4 px-8 hover:shadow-lg hover:brightness-110 transition-all duration-300
                   disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
                   relative overflow-hidden"
        >
          <span className="relative z-10">
            {status === "loading" ? (
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="inline-block"
              >⟳</motion.span>
            ) : status === "success" ? (
              "✓ Joined!"
            ) : (
              "Join Waitlist"
            )}
          </span>
        </motion.button>
      </motion.form>
      
      <AnimatePresence>
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-4 text-center"
          >
            <p className="font-poppins text-gradient text-[16px] font-semibold">
              🎉 Welcome aboard! Check your email for exclusive updates.
            </p>
            <p className="font-poppins text-dimWhite text-[14px] mt-2">
              You're now part of an exclusive group of early adopters.
            </p>
          </motion.div>
        )}
        {status === "error" && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-4 font-poppins text-red-500 text-[14px] text-center"
          >
            Oops! Something went wrong. Please try again.
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WaitlistForm;
