import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "movie-recommender",
    img: "https://th.bing.com/th/id/OIG3.kiOzRzg3WMgPt_0r8.zm?w=1024&h=1024&rs=1&pid=ImgDetMain",
    desc: "Recommends movie based on the Genre of the movie search , has autocompletion feature of search of the  movie , shows a description of movie , casting , their respective wikipedia , and trailer of the respective movie.",
    href:"https://github.com/Nagendraindus/movie-recommender",
  },
  {
    id: 2,
    title: "Pictory : text to image ",
    img: "https://images.openai.com/blob/5f1ce4c2-c06b-4d4d-828a-e90c89680db4/dall-e-now-available-without-waitlist.jpg?trim=0,0,0,0&width=2000",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    href:"https://github.com/Nagendraindus/pictory",
  },
  {
    id: 3,
    title: "Bubble Game",
    img: "https://images.unsplash.com/photo-1612855190135-bdbacda2a2b5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Html , css javascript .. a game to make guess of the number inside the bubble in given time",
    href:"https://github.com/Nagendraindus/bubblegame",
  },
  {
    id: 4,
    title: "Chalchitra : movie info",
    img: "https://plus.unsplash.com/premium_photo-1682125771198-f7cbed7cb868?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "A react site to give nfo about searched movie , using omdb api",
    href:"https://github.com/Nagendraindus/chalchitra-react",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.href}target="_blank" rel="noopener noreferrer"><button>See Repo</button></a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="portfolio-title">
          <h1>My Projects </h1>
      </div>
      
      <div className="progress">
        
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;