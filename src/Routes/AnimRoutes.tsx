import Home from "../components/pages/Home";
import About from "../components/pages/About";
import Contact from "../components/pages/Contact";
import Portfolio from "../components/pages/Portfolio";
import { AnimatePresence } from "framer-motion";

import { Route, Routes, useLocation } from "react-router-dom";

// function App() {
//
//   console.log(location);

const AnimRoutes = () => {
  const location = useLocation();

  return (
    <>
      <AnimatePresence initial={true} mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="portfolio" element={<Portfolio />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default AnimRoutes;
