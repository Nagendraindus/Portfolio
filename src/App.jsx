import "./app.scss"
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/Service/Services";
import Contact from "./components/Contacts/Contact";
import Portfolio from "./components/Portfolio/Portfolio";
// import Test from "./test";
const App = () => {
  return <div>

    <section id="Homepage">
    <Navbar/>
    <Hero/>
    </section>
    <section id="Services" ><Parallax type ="Services"/></section>
    <section>
        <Services />
      </section>
    <section id = "Portfolio" ><Parallax type="portfolio"/></section>
    <Portfolio />
    <section id = "Contact">
      <Contact/>
    </section>
    {/* <Test/> */}
    </div>;
};

export default App;
