import Banner from "../Component/Banner";
import Services from "../Component/Services";
import Marquee from "../Component/Marquee";
import Mission from "../Component/Mission";
import ClientTestimonials from "../Component/Client-Testimonials ";
import bannerbg from "../images/bannerbg.png"
import Contact from "../Component/Contact"
import { motion } from "framer-motion";

const Home = () => {
    return (
      <>
        <section><Banner/></section>
        <section className="pb-8">
          <motion.div
            className=""
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }} // triggers once when 30% in view
            transition={{
              duration: 0.8,
              ease: "easeOut"
            }}
          >
            <Services/>
        </motion.div></section>
        <section className='mt-28'>
          <motion.div
            className=""
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }} // triggers once when 30% in view
            transition={{
              duration: 0.8,
              ease: "easeOut"
            }}>
            <Mission title='About Us'/>
            </motion.div>
        </section>
        <section>
          <motion.div
            className=""
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }} // triggers once when 30% in view
            transition={{
              duration: 0.8,
              ease: "easeOut"
            }}> <ClientTestimonials/></motion.div></section>
        <section className='Contact_section mt-5 mb-14'>
             <motion.div
            className=""
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }} // triggers once when 30% in view
            transition={{
              duration: 0.8,
              ease: "easeOut"
            }}> <Contact/></motion.div></section>
      </>

    )
}

export default Home;