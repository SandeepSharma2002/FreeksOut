import React from "react";

const NavLink = ({ href, link }) => {
  return (
    
    <li className="list-none flex ml-8 cursor-pointer text-[#ffffffb3]">
      <a
        to={href}
        className="transition-all duration-300 font-Poppins font-thin uppercase"
      >
        {link}
      </a>
    </li>
  );
};

export default NavLink;
