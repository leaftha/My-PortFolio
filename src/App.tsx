import Header from "./components/header";
import Introduce from "./components/introduce";
import { IsClickProvider } from "./components/isClickedContext";
import Projects from "./components/projects";
import Footer from "./components/footer";
import { useEffect } from "react";
import Lenis from "lenis";

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: DOMHighResTimeStamp) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <div>
      <IsClickProvider>
        <Header />
        <Introduce />
      </IsClickProvider>
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
