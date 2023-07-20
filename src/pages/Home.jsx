import React from "react";
import hero from "../assets/hero.png";
import { motion } from "framer-motion";
import "./Home.scss";

const Home = () => {
  const container = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 2.3,
        staggerChildren: 0.3,
      },
    },
  };
  const item = {
    hidden: { y: 0, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <>
      <div className="relative bg-gradient-to-r from-[#00031d] to-[#000536]">
      <div className="absolute  w-full h-full overflow-x-hidden">
      <div className="snowflake"></div>      <div className="snowflake"></div>
      <div className="snowflake"></div>      <div className="snowflake"></div>
      <div className="snowflake"></div>      <div className="snowflake"></div>
      <div className="snowflake"></div>      <div className="snowflake"></div>
      <div className="snowflake"></div>      <div className="snowflake"></div> 
      <div className="snowflake"></div>      <div className="snowflake"></div>
      <div className="snowflake"></div>      <div className="snowflake"></div> 
      <div className="snowflake"></div>      <div className="snowflake"></div>
      <div className="snowflake"></div>      <div className="snowflake"></div> 
      <div className="snowflake"></div>      <div className="snowflake"></div>
      <div className="snowflake"></div>      <div className="snowflake"></div> 
      <div className="snowflake"></div>      <div className="snowflake"></div>
      <div className="snowflake"></div>      <div className="snowflake"></div> 
      <div className="snowflake"></div>      <div className="snowflake"></div>
      <div className="snowflake"></div>      <div className="snowflake"></div> 
      <div className="snowflake"></div>      <div className="snowflake"></div>
      <div className="snowflake"></div>      <div className="snowflake"></div> 
      <div className="snowflake"></div>      <div className="snowflake"></div>
      <div className="snowflake"></div>      <div className="snowflake"></div> 
      <div className="snowflake"></div>      <div className="snowflake"></div>
      <div className="snowflake"></div>      <div className="snowflake"></div> 
      <div className="snowflake"></div>      <div className="snowflake"></div>
      <div className="snowflake"></div>      <div className="snowflake"></div> 
      <div className="snowflake"></div>      <div className="snowflake"></div>
      <div className="snowflake"></div>      <div className="snowflake"></div> 
      <div className="snowflake"></div>      <div className="snowflake"></div>
      <div className="snowflake"></div>      <div className="snowflake"></div> 
      <div className="snowflake"></div>      <div className="snowflake"></div>
      <div className="snowflake"></div>      <div className="snowflake"></div> 
      <div className="snowflake"></div>      <div className="snowflake"></div>
      <div className="snowflake"></div>      <div className="snowflake"></div> 
      <div className="snowflake"></div>      <div className="snowflake"></div>
      <div className="snowflake"></div>      <div className="snowflake"></div> 
      <div className="snowflake"></div>      <div className="snowflake"></div>
      <div className="snowflake"></div>      <div className="snowflake"></div> 
      <div className="snowflake"></div>      <div className="snowflake"></div>
      <div className="snowflake"></div>      <div className="snowflake"></div> 
      <div className="snowflake"></div>      <div className="snowflake"></div>
      <div className="snowflake"></div>      <div className="snowflake"></div> 
      <div className="snowflake"></div>      <div className="snowflake"></div>
      <div className="snowflake"></div>      <div className="snowflake"></div> 
      <div className="snowflake"></div>      <div className="snowflake"></div>
      <div className="snowflake"></div>      <div className="snowflake"></div> 
      <div className="snowflake"></div>      <div className="snowflake"></div>
      <div className="snowflake"></div>      <div className="snowflake"></div> 
      <div className="snowflake"></div>      <div className="snowflake"></div>
      <div className="snowflake"></div>      <div className="snowflake"></div> 
      <div className="snowflake"></div>      <div className="snowflake"></div>
      <div className="snowflake"></div>      <div className="snowflake"></div> 
      <div className="snowflake"></div>      <div className="snowflake"></div>
      <div className="snowflake"></div>      <div className="snowflake"></div> 
      <div className="snowflake"></div>      <div className="snowflake"></div>
      <div className="snowflake"></div>      <div className="snowflake"></div>
      <div className="snowflake"></div>      <div className="snowflake"></div>
      <div className="snowflake"></div>      <div className="snowflake"></div>
      <div className="snowflake"></div>      <div className="snowflake"></div> 
      <div className="snowflake"></div>      <div className="snowflake"></div>
      <div className="snowflake"></div>      <div className="snowflake"></div> 
      <div className="snowflake"></div>      <div className="snowflake"></div>
      <div className="snowflake"></div>      <div className="snowflake"></div> 
      <div className="snowflake"></div>      <div className="snowflake"></div>
      <div className="snowflake"></div>      <div className="snowflake"></div> 
      <div className="snowflake"></div>      <div className="snowflake"></div>
      <div className="snowflake"></div>      <div className="snowflake"></div> 
      <div className="snowflake"></div>      <div className="snowflake"></div>
      <div className="snowflake"></div>      <div className="snowflake"></div> 
      <div className="snowflake"></div>      <div className="snowflake"></div>
      <div className="snowflake"></div>      <div className="snowflake"></div> 
      <div className="snowflake"></div>      <div className="snowflake"></div>
      <div className="snowflake"></div>      <div className="snowflake"></div> 
      <div className="snowflake"></div>      <div className="snowflake"></div>
      <div className="snowflake"></div>      <div className="snowflake"></div> 
      <div className="snowflake"></div>      <div className="snowflake"></div>
      <div className="snowflake"></div>      <div className="snowflake"></div> 
      <div className="snowflake"></div>      <div className="snowflake"></div>
      <div className="snowflake"></div>      <div className="snowflake"></div> 
      <div className="snowflake"></div>      <div className="snowflake"></div>
      <div className="snowflake"></div>      <div className="snowflake"></div> 
      <div className="snowflake"></div>      <div className="snowflake"></div>
      <div className="snowflake"></div>      <div className="snowflake"></div> 
      <div className="snowflake"></div>      <div className="snowflake"></div>
      <div className="snowflake"></div>      <div className="snowflake"></div> 
      <div className="snowflake"></div>      <div className="snowflake"></div>
      <div className="snowflake"></div>      <div className="snowflake"></div> 
      <div className="snowflake"></div>      <div className="snowflake"></div>
      <div className="snowflake"></div>      <div className="snowflake"></div> 
      <div className="snowflake"></div>      <div className="snowflake"></div>
      <div className="snowflake"></div>      <div className="snowflake"></div> 
      <div className="snowflake"></div>      <div className="snowflake"></div>
      <div className="snowflake"></div>      <div className="snowflake"></div> 
      <div className="snowflake"></div>      <div className="snowflake"></div>
      <div className="snowflake"></div>      <div className="snowflake"></div> 
      <div className="snowflake"></div>      <div className="snowflake"></div>
      <div className="snowflake"></div>      <div className="snowflake"></div> 
      <div className="snowflake"></div>      <div className="snowflake"></div>
      <div className="snowflake"></div>      <div className="snowflake"></div> 
      <div className="snowflake"></div>      <div className="snowflake"></div>
      <div className="snowflake"></div>      <div className="snowflake"></div> 
      <div className="snowflake"></div>      <div className="snowflake"></div>
      <div className="snowflake"></div>      <div className="snowflake"></div> 
      <div className="snowflake"></div>      <div className="snowflake"></div>
      <div className="snowflake"></div>      <div className="snowflake"></div> 
      <div className="snowflake"></div>      <div className="snowflake"></div>
      <div className="snowflake"></div>      <div className="snowflake"></div>
      <div className="snowflake"></div>      <div className="snowflake"></div>
      <div className="snowflake"></div>      <div className="snowflake"></div>
      <div className="snowflake"></div>      <div className="snowflake"></div> 
      <div className="snowflake"></div>      <div className="snowflake"></div>
      <div className="snowflake"></div>      <div className="snowflake"></div> 
      <div className="snowflake"></div>      <div className="snowflake"></div>
      <div className="snowflake"></div>      <div className="snowflake"></div> 
      <div className="snowflake"></div>      <div className="snowflake"></div>
      <div className="snowflake"></div>      <div className="snowflake"></div> 
      <div className="snowflake"></div>      <div className="snowflake"></div>
      <div className="snowflake"></div>      <div className="snowflake"></div> 
      <div className="snowflake"></div>      <div className="snowflake"></div>
      <div className="snowflake"></div>      <div className="snowflake"></div> 
      <div className="snowflake"></div>      <div className="snowflake"></div>
      <div className="snowflake"></div>      <div className="snowflake"></div> 
      <div className="snowflake"></div>      <div className="snowflake"></div>
      <div className="snowflake"></div>      <div className="snowflake"></div> 
      <div className="snowflake"></div>      <div className="snowflake"></div>
      <div className="snowflake"></div>      <div className="snowflake"></div> 
      <div className="snowflake"></div>      <div className="snowflake"></div>
      <div className="snowflake"></div>      <div className="snowflake"></div> 
      <div className="snowflake"></div>      <div className="snowflake"></div>
      <div className="snowflake"></div>      <div className="snowflake"></div> 
      <div className="snowflake"></div>      <div className="snowflake"></div>
      <div className="snowflake"></div>      <div className="snowflake"></div> 
      <div className="snowflake"></div>      <div className="snowflake"></div>
      <div className="snowflake"></div>      <div className="snowflake"></div> 
      <div className="snowflake"></div>      <div className="snowflake"></div>
      <div className="snowflake"></div>      <div className="snowflake"></div> 
      <div className="snowflake"></div>      <div className="snowflake"></div>
      <div className="snowflake"></div>      <div className="snowflake"></div> 
      <div className="snowflake"></div>      <div className="snowflake"></div>
      <div className="snowflake"></div>      <div className="snowflake"></div> 
      <div className="snowflake"></div>      <div className="snowflake"></div>
      <div className="snowflake"></div>      <div className="snowflake"></div> 
      <div className="snowflake"></div>      <div className="snowflake"></div>
      <div className="snowflake"></div>      <div className="snowflake"></div> 
      <div className="snowflake"></div>      <div className="snowflake"></div>
      <div className="snowflake"></div>      <div className="snowflake"></div> 
      <div className="snowflake"></div>      <div className="snowflake"></div>
      <div className="snowflake"></div>      <div className="snowflake"></div> 
      <div className="snowflake"></div>      <div className="snowflake"></div>
      <div className="snowflake"></div>      <div className="snowflake"></div> 
      <div className="snowflake"></div>      <div className="snowflake"></div>
      <div className="snowflake"></div>      <div className="snowflake"></div> 
      <div className="snowflake"></div>      <div className="snowflake"></div>
      <div className="snowflake"></div>      <div className="snowflake"></div> 
      <div className="snowflake"></div>      <div className="snowflake"></div>
      <div className="snowflake"></div>      <div className="snowflake"></div> 
      
    </div>
        <div className="section pt-2 md:pt-20 px-6 mt-10 font-Nunito" id="home">
          <div className="flex flex-col md:flex-row gap-6 md:justify-between items-center justify-center">
            <div className="mt-16 md:mt-20">
              <div className="text-[30px] md:text-[2.813rem] font-extrabold text-white mb-6 -translate-x-20 opacity-0 animate-slideLeft">
                Discover. Connect. Collaborate.
              </div>
              <p className="leading-7 text-[16px] sm-text-[18px] md:text-[22px] text-[#EEEEEE] font-thin mb-6 md:mb-12 -translate-x-20 opacity-0 animate-slideLeft1">
                An ecosystem for Social media Influencers and Brands.
              </p>
              <div className=" flex flex-col sm:flex-row mt-6 gap-7 w-full">
                <button className="px-9 py-4 font-[400] text-[#222] text-center bg-[#1adb80] border-[#1adb80] rounded-lg text-[16px] uppercase translate-y-20 opacity-0 animate-slideUp w-full">
                  I'm an Influencer
                </button>
                <button className="px-9 py-4 font-[400] bg-[#1adb80] text-center text-[#222] border border-solid border-[#1adb80] rounded-lg text-[16px] uppercase translate-y-20 opacity-0 animate-slideUp w-full">
                  I'm an brand
                </button>
              </div>
            </div>
            <div className="w-full md:w-[60%] ">
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                className="flex items-center justify-center flex-wrap gap-8 pt-2"
              >
                <motion.div variants={item} className="w-full z-10">
                  <img src={hero} alt="" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="main">
                  <div className="wave wave1"></div>
                  <div className="wave wave2"></div>
                  <div className="wave wave3"></div>
                  {/* <div className="wave wave4"></div> */}
        </div>
      </div>
    </>
  );
};

export default Home;
