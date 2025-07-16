import { dovio, sights, wallet, prism } from "../assets";
import styles from "../style";
import { motion } from "framer-motion";

const products = [
  {
    name: "Dovio",
    description: "An AI-powered messaging revolution that gives you total freedom to speak, vanish, connect—and earn from your data like a digital sovereign in control of your own intelligent network.",
    image: dovio,
  },
  {
    name: "WeSperr Sights",
    description: "An insights platform that visualizes processed raw data for better decision-making, following a freemium model.",
    image: sights,
  },
  {
    name: "WeSperr Wallet",
    description: "A secure digital wallet for managing earnings and transactions within the WeSperr data economy ecosystem.",
    image: wallet,
  },
  {
    name: "Prism",
    description: "Prism is the AI-powered platform that flips the narrative—turning AI into a job creator, not a job taker, by matching real people to real opportunities with precision, speed, and dignity.",
    image: prism,
  },
];

const Billing = () => (
  <>
    <h1 className="mt-10 text-gradient text-center text-5xl font-bold">Our Products</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
      {products.map((product, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: index * 0.3 }}
          viewport={{ once: true }}
          className="bg-black-gradient-2 rounded-[20px] p-8 flex flex-col items-center"
        >
          <img src={product.image} alt={product.name} className="w-full h-auto object-contain rounded-[20px]" />
          <h2 className="text-white text-2xl font-bold mt-4">{product.name}</h2>
          <p className={`${styles.paragraph} text-center mt-2`}>{product.description}</p>
        </motion.div>
      ))}
    </div>
  </>
);

export default Billing;
