import React, { useEffect, useState } from "react";
import { navLinks } from "../../Data";
import { HiMenu, HiX } from "react-icons/hi";
import MobileNavLinks from "./MobileNavLinks";
import NavLink from "./NavLink";
import { motion } from "framer-motion";
import TitleLogo from "../../../public/TitleLogo.png";
import "./Navbar.scss"

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(null);
  useEffect(() => {
    const scrollActive = () => {
      setActive(window.scrollY > 20);
    };
    window.addEventListener("scroll", scrollActive);
    return () => window.removeEventListener("scroll", scrollActive);
  }, [active]);

  return (
    <div
      className={`${
        active
          ? "bg-gradient-to-r from-[#00031d] to-[#000536]"
          : "bg-transparent"
      } fixed w-full top-0 left-0 z-20 font-Nunito`}
    >
      
      <div className="mx-w-[1160px] px-6 sm:px-24 mx-auto">
        <div
          className={`${
            active ? "py-2 transition-all duration-300" : "py-0"
          }  mx-auto flex justify-between lg:max-w-[1160px] mt-2 h-[76px] w-full`}
        >
              <a to="/StudyNation" className="flex items-center justify-center gap-1 md:h-8">
                <img
                  src={TitleLogo}
                  alt=""
                  className="h-[60px] my-auto pt-2"
                />
              </a>
          <div className="md:flex items-center hidden my-[13px]">
            {navLinks.map((navLink) => {
              return <NavLink key={navLink.id} {...navLink} />;
            })}
          </div>

          <div className="flex items-center gap-4 md:hidden">
            { toggle == true ? <HiX
                className="text-2xl text-white sm:text-3xl md:hidden cursor-pointer"
                onClick={(prev) => setToggle(!prev)}
              /> : <HiMenu
              className="text-2xl text-white sm:text-3xl md:hidden cursor-pointer"
              onClick={() => setToggle(true)}
            />
            }
          </div>
          {toggle && (
            <motion.div
              initial={{ x: 500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="fixed block md:hidden h-[100vh] w-48 sm:w-96 top-[76px] right-0 sm:right-10 md:right-0 z-20 bg-gradient-to-r from-[#fff] to-[#e1f2ea] text-[#ffffffb3] shadow-lg py-8"
            >
              
              {navLinks.map((navLink) => {
                return (
                  <MobileNavLinks
                    key={navLink.id}
                    {...navLink}
                    setToggle={setToggle}
                  />
                );
              })}
              <div>
              <div className="absolute top-0 right-0 z-50 w-full h-full overflow-hidden ">
      <div className="snowflake1"></div>      <div className="snowflake1"></div>
      <div className="snowflake1"></div>      <div className="snowflake1"></div>
      <div className="snowflake1"></div>      <div className="snowflake1"></div>
      <div className="snowflake1"></div>      <div className="snowflake1"></div>
      <div className="snowflake1"></div>      <div className="snowflake1"></div> 
      <div className="snowflake1"></div>      <div className="snowflake1"></div>
      <div className="snowflake1"></div>      <div className="snowflake1"></div> 
      <div className="snowflake1"></div>      <div className="snowflake1"></div>
      <div className="snowflake1"></div>      <div className="snowflake1"></div> 
      <div className="snowflake1"></div>      <div className="snowflake1"></div>
      <div className="snowflake1"></div>      <div className="snowflake1"></div> 
      <div className="snowflake1"></div>      <div className="snowflake1"></div>
      <div className="snowflake1"></div>      <div className="snowflake1"></div> 
      <div className="snowflake1"></div>      <div className="snowflake1"></div>
      <div className="snowflake1"></div>      <div className="snowflake1"></div> 
      <div className="snowflake1"></div>      <div className="snowflake1"></div>
      <div className="snowflake1"></div>      <div className="snowflake1"></div> 
      <div className="snowflake1"></div>      <div className="snowflake1"></div>
      <div className="snowflake1"></div>      <div className="snowflake1"></div> 
      <div className="snowflake1"></div>      <div className="snowflake1"></div>
      <div className="snowflake1"></div>      <div className="snowflake1"></div> 
      <div className="snowflake1"></div>      <div className="snowflake1"></div>
      <div className="snowflake1"></div>      <div className="snowflake1"></div> 
      <div className="snowflake1"></div>      <div className="snowflake1"></div>
      <div className="snowflake1"></div>      <div className="snowflake1"></div> 
      <div className="snowflake1"></div>      <div className="snowflake1"></div>
      <div className="snowflake1"></div>      <div className="snowflake1"></div> 
      <div className="snowflake1"></div>      <div className="snowflake1"></div>
      <div className="snowflake1"></div>      <div className="snowflake1"></div> 
      <div className="snowflake1"></div>      <div className="snowflake1"></div>
      <div className="snowflake1"></div>      <div className="snowflake1"></div> 
      <div className="snowflake1"></div>      <div className="snowflake1"></div>
      <div className="snowflake1"></div>      <div className="snowflake1"></div> 
      <div className="snowflake1"></div>      <div className="snowflake1"></div>
      <div className="snowflake1"></div>      <div className="snowflake1"></div> 
      <div className="snowflake1"></div>      <div className="snowflake1"></div>
      <div className="snowflake1"></div>      <div className="snowflake1"></div> 
      <div className="snowflake1"></div>      <div className="snowflake1"></div>
      <div className="snowflake1"></div>      <div className="snowflake1"></div> 
      <div className="snowflake1"></div>      <div className="snowflake1"></div>
      <div className="snowflake1"></div>      <div className="snowflake1"></div> 
      <div className="snowflake1"></div>      <div className="snowflake1"></div>
      <div className="snowflake1"></div>      <div className="snowflake1"></div> 
      <div className="snowflake1"></div>      <div className="snowflake1"></div>
      <div className="snowflake1"></div>      <div className="snowflake1"></div> 
      <div className="snowflake1"></div>      <div className="snowflake1"></div>
      <div className="snowflake1"></div>      <div className="snowflake1"></div> 
      <div className="snowflake1"></div>      <div className="snowflake1"></div>
      <div className="snowflake1"></div>      <div className="snowflake1"></div> 
      <div className="snowflake1"></div>      <div className="snowflake1"></div>
      <div className="snowflake1"></div>      <div className="snowflake1"></div> 
               </div>
               </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
