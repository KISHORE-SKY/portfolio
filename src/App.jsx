import Navbar from "./navbarSection/navbar";
import Home from "./homeSection/home";
import AboutMe from "./aboutSection/aboutme";
import Projects from "./projectSection/projects";
import Skills from "./techSkills/skills";
import ConnectMe from "./contactSection/connect";
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

function App() {

  const isDesktop=window.innerHeight>=768;

  useEffect(()=>{
    setTimeout(()=>{
      AOS.init({
      duration:1000,
      easing:"ease-in-out",
      once:true,
      offset:!isDesktop ? 190 : 300,
      anchorPlacement:'top-bottom'
    })
    },200)
  },[])

  return(
    <>
      <main className="overflow-hidden">
        <Navbar />
        <Home />
        <AboutMe />
        <Projects />
        <Skills />
        <ConnectMe />
      </main>
    </>
  );
}

export default App
