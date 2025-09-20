import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { close, wesperr, menu } from "../assets";
import { navLinks } from "../constants";
import Button from "./Button";

const navVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <motion.img
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        src={wesperr}
        alt="wesperr-logo"
        className="w-[180px] h-[48px]"
      />

      <div className="flex-1 flex justify-end items-center">
        <motion.ul
          className="list-none sm:flex hidden items-center"
          variants={navVariants}
          initial="hidden"
          animate="visible"
        >
          {navLinks.map((nav, index) => (
            <motion.li
              key={nav.id}
              variants={itemVariants}
              className={`font-poppins font-normal cursor-pointer text-[18px] hover:text-white transition-colors duration-300 ${
                active === nav.title ? "text-white font-medium" : "text-dimWhite"
              } mr-12`}
              onClick={() => setActive(nav.title)}
            >
              <motion.a
                href={`#${nav.id}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {nav.title}
              </motion.a>
            </motion.li>
          ))}

          {/* Synced Animated Button */}
          <motion.li
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0px 0px 0px rgba(33, 150, 243, 0)",
                "0px 0px 15px rgba(33, 150, 243, 0.4)",
                "0px 0px 0px rgba(33, 150, 243, 0)"
              ]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative"
            style={{ filter: "drop-shadow(0 0 10px rgba(33, 150, 243, 0.2))" }}
          >
            <Button styles="" />
          </motion.li>
        </motion.ul>

        {/* Mobile Nav */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <motion.img
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <AnimatePresence>
            {toggle && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.2 }}
                className="p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar"
              >
                <ul className="list-none flex justify-end items-start flex-1 flex-col">
                  {navLinks.map((nav, index) => (
                    <motion.li
                      key={nav.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.1 }}
                      className={`font-poppins font-medium cursor-pointer text-[18px] hover:text-white transition-colors duration-300 ${
                        active === nav.title ? "text-white" : "text-dimWhite"
                      } ${index !== navLinks.length - 1 ? "mb-4" : "mb-0"}`}
                      onClick={() => {
                        setActive(nav.title);
                        setToggle(false);
                      }}
                    >
                      <a href={`#${nav.id}`}>{nav.title}</a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
