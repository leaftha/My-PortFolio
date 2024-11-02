import Header from "./components/header";
import Introduce from "./components/introduce";
import { IsClickProvider } from "./components/isClickedContext";
import Projects from "./components/projects";

function App() {
  return (
    <div>
      <IsClickProvider>
        <Header />
        <Introduce />
      </IsClickProvider>
      <Projects />
    </div>
  );
}

export default App;
