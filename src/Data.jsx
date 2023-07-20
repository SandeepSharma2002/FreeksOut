import {BiLogoBlogger } from "react-icons/bi"
import { LiaRupeeSignSolid } from "react-icons/lia";
import { BsFillPersonFill,BsFillTelephoneFill } from "react-icons/bs";
import {FaSuitcase} from "react-icons/fa"
import {AiFillHome} from "react-icons/ai";

export const navLinks = [
  {
    id: 1,
    icon: <AiFillHome/>,
    href: "homepage",
    link: "Home",
  },
  {
    id: 2,
    icon: <FaSuitcase />,
    href: "brand",
    link: "Brand",
  },
  {
    id: 3,
    icon: <BsFillPersonFill />,
    href: "influencer",
    link: "Influencers",
  },
  {
    id: 4,
    icon: <LiaRupeeSignSolid />,
    href: "price",
    link: "Pricing",
  },
  {
    id: 5,
    icon: <BiLogoBlogger />,
    href: "blog",
    link: "Blogs",
  },
  {
    id: 6,
    icon: <BsFillTelephoneFill />,
    href: "contact",
    link: "Contact",
  },
];