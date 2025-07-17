import { motion } from "framer-motion";

const FeedbackCard = ({ name, title, img }) => (
  <motion.div
    whileHover={{ y: -10, scale: 1.05, transition: { duration: 0.3 } }}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
    viewport={{ once: true }}
    className="flex flex-col items-center text-center p-6 rounded-[20px] max-w-[280px] mx-auto my-5 feedback-card"
  >
    <motion.img
      src={img}
      alt={name}
      className="w-[240px] h-[240px] rounded-full object-cover border-4 border-transparent group-hover:border-secondary transition-all duration-300"
      whileHover={{ scale: 1.1 }}
    />
    <div className="mt-4">
      <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
        {name}
      </h4>
      <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
        {title}
      </p>
    </div>
  </motion.div>
);

export default FeedbackCard;
