import Navbar from "./navbarSection/navbar";
import Home from "./homeSection/home";
import AboutMe from "./aboutSection/aboutme";

function App() {
  return(
    <>
      <main className="overflow-hidden">
        <Navbar />
        <Home />
        <AboutMe />
      </main>
    </>
  );
}

export default App
