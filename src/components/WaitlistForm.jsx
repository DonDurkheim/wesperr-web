import React, { useState } from "react";
import styles from "../style";
import { motion, AnimatePresence } from "framer-motion";
import { waitlistAPI } from "../services/api";

const WaitlistForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email) {
      setErrorMessage("Name and Email are required.");
      setStatus("error");
      return;
    }
    
    setStatus("loading");
    setErrorMessage("");
    
    try {
      await waitlistAPI.join(name, email);
      setStatus("success");
      setName("");
      setEmail("");
    } catch (error) {
      setStatus("error");
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="w-full">
      <motion.form
        onSubmit={handleSubmit}
        className="relative flex flex-col gap-4" // Changed to flex-col to stack inputs
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative flex-1">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            disabled={status === "loading" || status === "success"}
            className="font-poppins font-normal text-[16px] leading-[24px] text-white 
                     bg-black-gradient border-2 border-secondary rounded-[10px]
                     py-4 px-6 w-full focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50
                     disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
          />
        </div>
        <div className="relative flex-1">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email to join"
            disabled={status === "loading" || status === "success"}
            className="font-poppins font-normal text-[16px] leading-[24px] text-white 
                     bg-black-gradient border-2 border-secondary rounded-[10px]
                     py-4 px-6 w-full focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50
                     disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
          />
        </div>

        <motion.button
          type="submit"
          disabled={!name || !email || status === "loading" || status === "success"}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="font-poppins font-medium text-[18px] leading-[24px] text-primary 
                   bg-blue-gradient rounded-[10px]
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
        {(status === "success" || status === "error") && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-4 text-center"
          >
            {status === "success" ? (
              <>
                <p className="font-poppins text-gradient text-[16px] font-semibold">
                  🎉 Welcome aboard! Check your email for exclusive updates.
                </p>
                <p className="font-poppins text-dimWhite text-[14px] mt-2">
                  You're now part of an exclusive group of early adopters.
                </p>
              </>
            ) : (
              <p className="font-poppins text-red-500 text-[16px] font-semibold">
                {errorMessage || "An error occurred. Please try again."}
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WaitlistForm;
