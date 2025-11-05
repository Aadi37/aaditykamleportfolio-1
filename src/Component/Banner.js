import React from "react";
import bgcoloro from "../images/bgcoloro.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const Banner = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Portfolio");
  };
  return (
    <div className="container mx-auto w-4/5 flex items-center justify-between pb-5">
  
      {/* LEFT SECTION (Text) */}
      <motion.div
        className="BannerText w-1/2"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }} // triggers once when 30% in view
        transition={{
          duration: 0.8,
          ease: "easeOut"
        }}
      >
        <div className="BannerHeading">
          <h5 className="text-white">Welcome to My World</h5>
          <h3 className="my-3 text-white">Hi, I'm Aditya Kamle</h3>
          <h4 className="my-3 text-white">Frontend Developer</h4>
        </div>

        <div className="rating my-8">
          <p className="text-white">
            Over 90% of Customers Give Us a Rating 5 or Most Satisfied
          </p>
        </div>

        <div className="Banner_btn">
          <button className="Bubble_btn"  onClick={handleClick}>
            <span className="hover_text">View Portfolio</span>
            <span className="bottom bubble"></span>
            <span className="bottom bubble"></span>
            <span className="bottom bubble"></span>
            <span className="bottom bubble"></span>
          </button>
        </div>
      </motion.div>

      {/* RIGHT SECTION (Image) */}
      <motion.div
        className="Banner-Image w-1/2"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          delay: 0.3 // small delay for smoother entrance
        }}
      >
        <img src={bgcoloro} alt="Banner" className="max-w-full" />
      </motion.div>
    </div>
  );
};

export default Banner;
