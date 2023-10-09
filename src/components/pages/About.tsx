import { Link } from "react-router-dom";
import { useContext } from "react";

import { CursorContext } from "../../context/CursorContext";

import womenImg from "../../assets/images/woman.jpg";

// import motion
import { motion } from "framer-motion";
// import transition
import { transition1 } from "../../assets/transitions";

const About = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <section className="section">
      <motion.div
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "100%" }}
        transition={transition1}
        className="container mx-auto h-full"
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
      >
        <div className="flex flex-col-reverse md:flex-row justify-center items-center lg:text-left h-full gap-x-24 lg:pt-32">
          <div className="md:flex-1 md:flex justify-center items-center max-h-96 lg:max-w-max">
            <img src={womenImg} alt="womenImg" className="rounded-lg" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="md:flex-1 flex flex-col justify-center items-center md:items-start max-[485px]:mt-28"
          >
            <h1 className="h1 dark:text-slate-100">About Me</h1>
            <p className="text-gray-500 lg:pb-10 max-w-md max-lg:mb-8 text-sm md:text-base dark:text-slate-400 max-md:text-center">
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
            <Link to="portfolio" className="btn max-lg:p-5 text-sm max-lg:mb-6">
              view my work
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
