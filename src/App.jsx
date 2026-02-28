import Navbar from "./navbarSection/navbar";
import Home from "./homeSection/home";
import AboutMe from "./aboutSection/aboutme";
import Projects from "./projectSection/projects";
import Skills from "./techSkills/skills";

function App() {
  return(
    <>
      <main className="overflow-hidden">
        <Navbar />
        <Home />
        <AboutMe />
        <Projects />
        <Skills />
      </main>
    </>
  );
}

export default App
