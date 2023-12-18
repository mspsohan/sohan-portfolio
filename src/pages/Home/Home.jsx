import AboutMe from "../../components/AboutMe/AboutMe";
import Banner from "../../components/Banner/Banner";
import Contact from "../../components/Contact/Contact";
import Education from "../../components/Education/Education";
import Experience from "../../components/Experience/Experience";
import PerticalesBg from "../../components/Particles/Perticales";
import Projects from "../../components/Projects/Projects";
import Skills from "../../components/Skills/Skills";

const Home = () => {

   return (
      <>
         <div className="max-w-7xl mx-auto">
            <Banner />
            <AboutMe />
            <Skills />
            <Experience />
            <Projects />
            <Education />
            <Contact />
            <PerticalesBg />
         </div>
      </>
   );
};

export default Home;