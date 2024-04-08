import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
    initial: {
      x: -500,
      y: 100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };
  

const Services = () => {
    const ref = useRef();

    const isInView = useInView(ref, { margin: "-100px" });
    return (
        <motion.div
          className="services"
          variants={variants}
          initial="initial"
          // animate="animate"
          // whileInView="animate"
          ref={ref}
          animate={"animate"}
        >
          
          <motion.div className="titleContainer" variants={variants}>
            <div className="title">
              <img src="/dev.jpeg" alt="" />
              <h1>
                


                <motion.b whileHover={{color:"orange"}}>Innovative</motion.b> Solutions
              </h1>
            </div>
            <div className="title">
              <h1>
                <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Digital Presence.
              </h1>
              
            </div>
          </motion.div>
          <motion.div className="listContainer" variants={variants}>
            <motion.div
              className="box"
              whileHover={{ background: "lightgray", color: "black" }}
            >
              <h2><u>Custom Website Development</u></h2>
              <p>
             I craft engaging online experiences that resonate with your audience and boost conversions. Whether it's a basic informational site or a full fledged web app , I utilize cutting-edge technologies to get it done.
              </p>
              
            </motion.div>
            <motion.div
              className="box"
              whileHover={{ background: "lightgray", color: "black" }}
            >
              <h2><u>Search Engine Optimization (SEO)</u></h2>
              <p>
              I specialize in boosting website visibility using top SEO practices. From keyword research to on-page optimization, I'll help you climb search engine rankings and reach your target audience effectively.
              </p>
              
            </motion.div>
            <motion.div
              className="box"
              whileHover={{ background: "lightgray", color: "black" }}
            >
              <h2><u>Content Management Systems (CMS)</u></h2>
              <p>
              I provide tailored CMS solutions, empowering you to effortlessly manage website content. With expertise in WordPress and Drupal, I'll implement user-friendly CMS platforms to streamline your workflow and enhance your online presence.
              </p>
              
            </motion.div>
            <motion.div
              className="box"
              whileHover={{ background: "lightgray", color: "black" }}
            >
              <h2> <u>Mobile App Development</u></h2>
              <p>
              Enhance your business with a personalized mobile app designed to fit your specific needs. With expertise in creating intuitive interfaces and seamless functionality.
              </p>
              
            </motion.div>
          </motion.div>
        </motion.div>
      );
    };
    
export default Services;
