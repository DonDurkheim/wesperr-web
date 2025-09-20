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
      src={img? img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAmgMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUBAwYCB//EADUQAAIBAwIEAwUGBwEAAAAAAAABAgMEEQUSITFBURMiYTNScZGxBiOBocHhFTJCQ3LR8BT/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A+ogAAAAAAAAGqtc0aHtakYvtnj8gNoIL1a1XWb9VER1W1fOU4/GIE4Gqjc0K/sqsZPt1+RtAAAAAAAAAAAAAAAAADK6sFTrN1JJW8HjPGbXbsB5vtVzmnav0dT/RVvLk5Ntt822YADAAAym0002muTXMurLU6UqEVc1MVFwbw+PqUgA6yLUoqUWmnyaZkpNFuHCs6EuMJ8V6NF2AAAAAAAAAAAAAADmr+Tle189JtfLgdKc5qNKX8QqQivNOScV3b/cCKZw1zTWfQv6GjyoqdVUlVnF7KEJcnLrOXpnLRqlpTptylCre3MnyUWqafrLqBSPPYzFOTwln4Fr/AAi5nUzcqUqj/t0Y8vTL8q+ZOttCnNKNdxoUetKm90pf5S/5AUNta17rf4NNy2RcpPojSd/Qt6VvSVKjBRguhyWu6e7G6coR+4qPMfR9UBCtJbLqlLtNHUHLW/G4pJe/H6nUgAAAAAAAAAAAAAAgV6PiaxY8ODlx9dryTz1G1l/6rG4TWFKSa7Zi/wDQFpw6AAAAABC1qEZ6XcKaziLkvRk0g622tLuFFNtpJJc3loDldLpeJewx/LHzP9DojXZaUrG18SpJ+PLG9LkvRGwAAAAAAAAAAAAAAE+zluope6yASrGSTlFvGeQEwAAAAAMOKljcs4aa+JkARr6XkUe7yQjddzU6z28lwyaQAAAAAAAAAAAAAAOgAFlbz30ovr1NhBs6u2TjLlL8icAAAAiX8v5Ip+rJNSpGnHdL5dyuqynOW+a58gPAAAAAAAAAAAAAAAAAAA9U+M16kyE5QWOa+hDXkipd5Jf9+RP2gZ8Ze6zy6z6RRnaNqA0yi5vLeWar9+DZyqKO7w/M1np1JRzuv6jvk7SjLyxf3jXV9gLCnONSnGpB5jJZTPRSaTeqlPwarxBvyt9GXYAAAAAAAAAAAACHc6jb0MrO+fuxf6gTCHdajRoPZH72py2x7/EqbrUbi4zHPhwf9Mf1ZnSKSq6jRUniMXvbxyxxA6apTlGhSjLG5LzY7k9LgvgQqNfx92+GxZ8vXgSalZR5cWBseEa2zRG6Up7Zx2Ppx4MxfXkLK3lVqcXyjH3n2Aia3qKtKXhUZff1FzX9K7nK/Hme61WdxVlVqy3Tk8tngAS7bUbihiOd8Pdk/oyIAOjtL6jc+VPbP3ZEo5PrknWuq1qPlqrxY/mvxAvgaLa8oXPsp8fdfBm8AAABE1K7dpRTgk5yeI56d2Syh1mr4l3sT4U1j8QI9a7uK/tKkmuy4I0AAC1+z1NTuasu0MfN/sVRefZmKxcPrmK+oF3GOOZlpAyBpqxik3NpJLOWctf3crutnL8KHCmn0Ra/aC92QVrTfmlxm10XYoAAAAAAAAAHHKa6E621SvRwqn3sF35r8SCGB1dOcalONSHGMllM9FbodXfQnSb403lfB/uWQA5WrJzqznLnKTbAA8AAAX/2Z9lcf5R+jAAuQ+EZPsgAOJrVZ1q06lR5lKTbZ5AAAAAAAAAAAACx0STV3JdHDj80XgAH/9k="}
      alt={name}
      className="w-[240px] h-[240px] rounded-full object-cover border-4 border-transparent group-hover:border-secondary transition-all duration-300"
      style={name === "Don Durkheim" ? { transform: "rotate(1.7deg) translateY(2px)" } : {}}
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
