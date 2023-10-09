import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import { useState } from "react";

const menuVariants = {
  hidden: {
    x: "100%",
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, -0.05, 0.01, 0.9],
    },
  },
};

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className="lg:hidden text-primary dark:text-slate-200">
      <div className="text-3xl cursor-pointer">
        <i className="fa-solid fa-bars" onClick={() => setOpenMenu(true)}></i>
      </div>
      <motion.div
        variants={menuVariants}
        initial="hidden"
        animate={openMenu ? "show" : ""}
        className="bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-10 dark:bg-slate-900"
      >
        <div className="absolute text-4xl left-4 top-14 z-30 text-primary cursor-pointer">
          <i
            className="fa-solid fa-xmark dark:text-slate-200"
            onClick={() => setOpenMenu(false)}
          ></i>
        </div>
        <ul className="h-full flex flex-col justify-center items-center gap-y-8 text-primary font-bold text-3xl">
          <li className="hover:scale-110 duration-300 dark:text-slate-300">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:scale-110 duration-300 dark:text-slate-300">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:scale-110 duration-300 dark:text-slate-300">
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li className="hover:scale-110 duration-300 dark:text-slate-300">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default MobileNav;
