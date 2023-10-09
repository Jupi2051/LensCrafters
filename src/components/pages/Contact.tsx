import { useContext } from "react";
import { CursorContext } from "../../context/CursorContext";

import HomeImg from "../../assets/images/woman.png";
// import motion
import { motion } from "framer-motion";
// import transition
import { transition1 } from "../../assets/transitions";

const Contact = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <section className="section z-10">
      <div className="container mx-auto h-full">
        <motion.div
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "100%" }}
          transition={transition1}
          className="hidden lg:flex absolute w-full left-0 top-72 bottom-0 bg-[#eef7f9] z-0"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "100%" }}
          transition={transition1}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="flex flex-col lg:flex-row h-full justify-start items-center text-center pt-36 gap-x-8 lg:text-left"
        >
          <div className="lg:flex-1 lg:pt-32 px-4 z-20">
            <h1 className="h1">Contact me</h1>
            <p className="text-gray-500 lg:pb-10 max-w-md max-lg:mb-8 text-sm md:text-base max-md:text-center">
              I would love to get suggestions from you.
            </p>
            <form className="flex flex-col gap-y-4">
              <div className="flex gap-x-10">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your name"
                  className="outline-none border-b border-b-primary bg-transparent h-[60px] w-full font-secondary placeholder:text-black pl-3"
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your e-mail address"
                  className="outline-none border-b border-b-primary bg-transparent h-[60px] w-full font-secondary placeholder:text-black pl-3"
                />
              </div>
              <input
                type="text"
                name="message"
                id="message"
                placeholder="Your Message"
                className="outline-none border-b border-b-primary bg-transparent h-[60px] w-full font-secondary placeholder:text-black pl-3"
              />
              <button
                type="submit"
                className="btn mb-[30px] mx-auto lg:mx-0 self-start dark:bg-black"
              >
                Send it
              </button>
            </form>
          </div>
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ transition: transition1, duration: 1.5 }}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="lg:flex-1 rounded-t-3xl z-20"
          >
            <img src={HomeImg} alt="" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
