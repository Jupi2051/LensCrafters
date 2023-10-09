import { Link } from "react-router-dom";
import { useContext } from "react";

import { CursorContext } from "../../context/CursorContext";

import img1 from "../../assets/images/Portfolio/1.png";
import img2 from "../../assets/images/Portfolio/2.png";
import img3 from "../../assets/images/Portfolio/3.png";
import img4 from "../../assets/images/Portfolio/4.png";

// import motion
import { motion } from "framer-motion";
// import transition
import { transition1 } from "../../assets/transitions";

const Portfolio = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <section className="section">
      <motion.div
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "100%" }}
        transition={transition1}
        className="container mx-auto h-full"
      >
        <div className="flex flex-col md:flex-row justify-center items-center lg:text-left h-full gap-x-24 lg:pt-32">
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="md:flex-1 flex flex-col justify-center items-center md:items-start max-[485px]:mt-28"
          >
            <h1 className="h1 dark:text-slate-100">Portfolio</h1>
            <p className="text-gray-400 lg:pb-10 max-w-md max-lg:mb-8 text-sm md:text-base dark:text-slate-400 max-md:text-center">
              Enim sint velit veniam consectetur deserunt in est velit quis.
              Ipsum consectetur dolor sint ad anim <b>amet adipisicing</b>.
              Aliqua laborum ut nisi nostrud mollit laboris deserunt consectetur
              cillum.
              <br />
              <br />
              Enim sint velit veniam consectetur deserunt in est velit quis.
              Ipsum consectetur dolor sint ad anim amet adipisicing. Aliqua
              laborum ut nisi nostrud mollit laboris deserunt consectetur
              cillum.
            </p>
            <Link to="/contact" className="btn max-lg:p-5 text-sm max-lg:mb-6">
              Hire me
            </Link>
          </motion.div>
          <div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="md:flex-1 grid grid-cols-2 gap-2 dark:drop-shadow-[10px_10px_10px_gray]"
          >
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden rounded-lg">
              <img
                src={img1}
                alt="portfolio1"
                className="h-full object-cover hover:scale-110 duration-500"
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden rounded-lg">
              <img
                src={img2}
                alt="portfolio2"
                className="h-full object-cover hover:scale-110 duration-500"
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden rounded-lg">
              <img
                src={img3}
                alt="portfolio3"
                className="h-full object-cover hover:scale-110 duration-500"
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden rounded-lg">
              <img
                src={img4}
                alt="portfolio4"
                className="h-full object-cover hover:scale-110 duration-500"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Portfolio;
