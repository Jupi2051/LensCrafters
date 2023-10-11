import { useContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";

// import CursorContext
import { CursorContext } from "./context/CursorContext";
// import Routes
import ThemeBtn from "./components/ThemeBtn";
import Header from "./components/Header";
import AnimRoutes from "./Routes/AnimRoutes";

import { motion } from "framer-motion";

function App() {
  const { cursorVariants, cursorBG } = useContext(CursorContext);
  return (
    <>
      <Router>
        <Header />
        <AnimRoutes />
      </Router>
      <ThemeBtn />
      <motion.div
        variants={cursorVariants}
        animate={cursorBG}
        className="fixed w-[32px] h-[32px] pointer-events-none bg-primary top-0 left-0 z-50 rounded-full"
      ></motion.div>
    </>
  );
}

export default App;
