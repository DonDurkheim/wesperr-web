import React, { useState, useEffect } from "react";
import { stats as initialStats } from "../constants"; // Rename to avoid conflict
import styles from "../style";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { waitlistAPI } from "../services/api"; // Import API service

const Stats = () => {
  const [dynamicStats, setDynamicStats] = useState(initialStats);
  const baseWaitlistCount = 864; // Base number provided by the user

  useEffect(() => {
    const fetchWaitlistCount = async () => {
      try {
        const data = await waitlistAPI.getAll();
        const totalEntries = data.length;
        const updatedWaitlistValue = baseWaitlistCount + totalEntries;

        setDynamicStats(prevStats =>
          prevStats.map(stat =>
            stat.id === "stats-1" // Assuming "Waitlist Signups" has id "stats-1"
              ? { ...stat, value: `${updatedWaitlistValue}+` }
              : stat
          )
        );
      } catch (error) {
        console.error("Failed to fetch waitlist count:", error);
        // Optionally, handle error by setting a default or error state for the stat
      }
    };

    fetchWaitlistCount();
  }, []);

  const parseValue = (value) => {
    let num = parseFloat(value.replace(/[^0-9.]/g, ''));
    if (value.includes('M')) {
      num *= 1000000;
    }
    if (value.includes('K')) {
      num *= 1000;
    }
    return num;
  };

  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 hidden sm:flex`}>
      {dynamicStats.map((stat) => (
        <motion.div
          key={stat.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className={`flex-1 flex justify-start items-center flex-row m-3`}
        >
          <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
            <CountUp
              end={parseValue(stat.value)}
              duration={2.5}
              prefix={stat.value.includes('$') ? '$' : ''}
              separator=","
            />
          </h4>
          <motion.p
            whileHover={{ scale: 1.1 }}
            className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3"
          >
            {stat.title}
          </motion.p>
        </motion.div>
      ))}
    </section>
  );
};

export default Stats;
