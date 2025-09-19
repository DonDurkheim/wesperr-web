import { clients } from "../constants";
import styles from "../style";
import { motion } from "framer-motion";

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client, index) => (
        <motion.div
          key={client.id}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ 
            duration: 0.5,
            delay: index * 0.2,
            type: "spring",
            stiffness: 100
          }}
          whileHover={{ 
            scale: 1.1,
            transition: { duration: 0.2 }
          }}
          viewport={{ once: true }}
          className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}
        >
          <img 
            src={client.logo} 
            alt="client_logo" 
            className="sm:w-[192px] w-[100px] object-contain filter hover:brightness-200 transition-all duration-300" 
          />
        </motion.div>
      ))}
    </div>
  </section>
);

export default Clients;
