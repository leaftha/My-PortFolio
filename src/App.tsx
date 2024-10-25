import style from "./style/App.module.css";
import Header from "./components/header";
import Introduce from "./components/introduce";
import { IsClickProvider } from "./components/isClickedContext";
import Projects from "./components/projects";
import Contact from "./components/contact";
import ProjectsStart from "./components/projectsStart";
import { useState } from "react";

function App() {
  const [end, setEnd] = useState(false);

  return (
    <div className={end ? `${style.main} ${style.active}` : style.main}>
      <IsClickProvider>
        <Header />
        <Introduce />
      </IsClickProvider>
      <ProjectsStart />
      <Projects />
      <Contact setEnd={setEnd} />
    </div>
  );
}

export default App;
