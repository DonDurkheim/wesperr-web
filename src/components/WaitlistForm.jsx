import React from "react";
import styles from "../style";

const WaitlistForm = () => (
  <div>
    <form className="flex flex-row items-center">
      <input
        type="email"
        placeholder="Enter your email"
        className="font-poppins font-normal text-[16px] leading-[24px] text-white bg-transparent border border-white rounded-l-[10px] py-2 px-4 w-full focus:outline-none"
      />
      <button
        type="submit"
        className="font-poppins font-medium text-[16px] leading-[24px] text-white bg-blue-gradient rounded-r-[10px] py-2 px-4"
      >
        Join Waitlist
      </button>
    </form>
  </div>
);

export default WaitlistForm;
