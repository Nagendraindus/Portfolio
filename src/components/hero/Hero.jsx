import "./Hero.scss";
import { motion } from "framer-motion";
// import styled from 'styled-components';


// takeaway :  However, you've used capital letters (H2 and H1) for your headings, which should be lowercase (h2 and h1) in JSX. JSX uses lowercase for HTML elements.
// const StyledButtons = styled.div`
//   display: flex;

//   button {
//     padding: 20px;
//     border: 1px solid white;
//     border-radius: 10px;
//     background-color: transparent;
//     color: white;
//     margin-right: 20px;
//     cursor: pointer;
//     font-weight: 300;

//     &:hover {
//       background-color: white;
//       color: black;
//     }
//   }
// `;

const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };
  const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-220%",
      transition: {
        repeat: Infinity,
        repeatType:"mirror",
        duration: 30,
      },
    },
  };
const Hero = () => {
  return (
    <div className="hero">
        <div className="wrapper">
        <motion.div className="aboutcontainer" variants={textVariants} initial="initial" animate="animate">
            <motion.h2 variants={textVariants}>
                NAGENDRA KUMAR
            </motion.h2>
            <motion.h1 variants={textVariants}>SOFTWARE DEVELOPER</motion.h1>
            <motion.div className="buttons" variants={textVariants}>
               <a href="/resume.pdf" download="Nagendra_Resume.pdf"> <motion.button variants={textVariants}>Resume</motion.button></a> 
               <a href="#Contact">
                <motion.button variants={textVariants}>Contact me</motion.button>
                </a>
            </motion.div>
            <motion.img className="scroll-img" variants={textVariants}src="/scroll.png" alt="" animate="scrollButton" />
        </motion.div>
        </div>
        <motion.div className="slidingText" variants={sliderVariants} initial="initial" animate="animate"  >
            TECH|GAME DEV | WEB DEV | ANDROID | PROGRAMMING | TECH|GAME DEV | WEB DEV | ANDROID | PROGRAMMING
        </motion.div>
        <div className="imageContainer">
            <img src="/hero.png" alt="" />
        </div>
        </div>
    
  );
};

export default Hero;