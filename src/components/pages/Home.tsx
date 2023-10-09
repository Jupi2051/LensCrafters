import { useContext } from "react";
import { Link } from "react-router-dom";
import HomeImg from "../../assets/images/Home.jpg";

// import motion
import { motion } from "framer-motion";
// import transition
import { transition1 } from "../../assets/transitions";
import { CursorContext } from "../../context/CursorContext";

const Home = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <section className="section">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={transition1}
        className="contaienr mx-auto h-full"
      >
        <div className="flex flex-col lg:flex-row justify-center">
          <motion.div
            initial={{ opacity: 0, y: "-50%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-50%" }}
            transition={transition1}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="w-full lg:w-auto pt-36 pb-10 lg:pt-0 lg:pb-0 z-10 flex flex-col justify-center items-center lg:items-start lg:-mr-10"
          >
            <h1 className="h1 dark:text-slate-400">
              Photographer <br /> & Film Maker
            </h1>
            <p className="text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12 dark:text-slate-600">
              Alexandria, EG
            </p>
            <Link to="/contact" className="btn">
              Hire Me
            </Link>
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            transition={transition1}
            className="flex justify-center max-h-[550px] w-auto lg:max-w-[800px] lg:max-h-max"
          >
            <img src={HomeImg} alt="HomeImg" className="object-cover" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
