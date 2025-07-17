import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-center items-center flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        Our Team
      </h2>
      <div className="w-full md:mt-0 mt-6 text-center">
        <p className={`${styles.paragraph} max-w-[450px] mx-auto`}>
          Meet the dedicated team of innovators and visionaries driving WeSperr's mission to empower users with data ownership.
        </p>
      </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full feedback-container relative z-[1]">
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div>
  </section>
);

export default Testimonials;
