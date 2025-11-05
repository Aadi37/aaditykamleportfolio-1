import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact";
import Navigation from "./Header/Navigation";
import Footer from "./Footer/Footer";
import { motion } from "framer-motion";
import skype from "./images/skype.png"
function App() {
  return (
    <>
          <div class="tm-slider-textarea">
          <a href="skype:live:kamleaditya?call" class="tm-custom-heading">
            <img src={skype}/>
          </a>
          </div>
       <motion.div
            className=""
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }} // triggers once when 30% in view
            transition={{
              duration: 0.8,
              ease: "easeOut"
            }}
          ><Navigation/></motion.div>
    
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
       
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      
      {/* ✅ Footer placed outside Routes so it shows on all pages */}
      <Footer />

    </>
  );
}

export default App;
