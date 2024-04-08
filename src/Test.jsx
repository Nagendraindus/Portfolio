import {motion} from "framer-motion"
const Test = () => {
  return (
    <div className='course'>
        <motion.div className="box" 
        initial={{scale:0.5, opacity: 0}}
        animate={{opacity:1, scale : 1, }}
        // whileTap={{opacity:1, scale:2}} 
        whileInView={{opacity:1, scale:2}}
        drag
        transition={{duration:2, }}></motion.div>
    </div>
  )
}

export default Test