import React from "react";

const MobileNavLinks = ({ setToggle, href, link,icon}) => {
  return (
    <li className="list-none cursor-pointer mr-8 flex gap-4 pb-12 px-7">
       <span  className="my-auto text-[#030c5f]">{icon}</span>
      <a
        to={href}
        className="text-[#9ab] transition-all duration-300 uppercase text-[16px]"
        onClick={(prev) => setToggle(!prev)}
      >
       {link}
      </a>
    </li>
  );
};

export default MobileNavLinks;
