import SmoothScroll from "./components/SmoothScroll";
import CustomCursor from "./components/CustomCursor";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Works from "./components/Works";
import HaloHelm from "./components/HaloHelm";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <Nav />
      <main>
        <Hero />
        <Works />
        <HaloHelm />
        <About />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}

export default App;
