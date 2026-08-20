import SmoothScroll from "./components/SmoothScroll";
import CustomCursor from "./components/CustomCursor";
import ImageGuard from "./components/ImageGuard";
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
      <ImageGuard />
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
