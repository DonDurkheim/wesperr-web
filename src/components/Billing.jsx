import { dovio, sights } from "../assets";
import styles from "../style";
import { motion } from "framer-motion";

const products = [
  {
    name: "Dovio",
    description: "The world’s first messaging app where users don’t just chat—they gain control of their data, enjoy personalized AI support, and earn real rewards for sharing feedback on their own terms.",
    image: dovio,
  },
  {
    name: "WeSperr Sights",
    description: "The world’s first business engine built on ethical data exchange, giving companies authentic, consent-driven insights while helping them design better products, launch smarter campaigns, and build lasting trust with customers.",
    image: sights,
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
