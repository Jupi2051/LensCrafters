import { useContext } from "react";
import { CursorContext } from "../context/CursorContext";

import { Link } from "react-router-dom";
import Socials from "./Socials";
import MobileNav from "./MobileNav";

const Header = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <header className="fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center">
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        <div className="flex justify-start lg:justify-center items-center">
          <Link
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            to="/"
            className="h1 text-[50px] flex justify-center items-center dark:text-slate-200"
          >
            LensCrafters
          </Link>
        </div>
        <nav
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="hidden lg:flex justify-center items-center gap-x-24"
        >
          <Link
            to="/"
            className="text-[#545657] dark:text-[#9c9f9f] hover:text-primary duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-[#545657] dark:text-[#9c9f9f] hover:text-primary duration-300"
          >
            About
          </Link>
          <Link
            to="/portfolio"
            className="text-[#545657] dark:text-[#9c9f9f] hover:text-primary duration-300"
          >
            Portfolio
          </Link>
          <Link
            to="/contact"
            className="text-[#545657] dark:text-[#9c9f9f] hover:text-primary duration-300"
          >
            Contact
          </Link>
        </nav>
      </div>
      <Socials />
      <MobileNav />
    </header>
  );
};

export default Header;
