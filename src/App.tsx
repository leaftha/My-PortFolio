import React from "react";

import style from "./style/App.module.css";
import Header from "./components/header";
import Introduce from "./components/introduce";
import { IsClickProvider } from "./components/isClickedContext";
import MySkils from "./components/mySkils";
import Projects from "./components/projects";

function App() {
  return (
    <div className={style.main}>
      <IsClickProvider>
        <Header />
        <Introduce />
      </IsClickProvider>
      <MySkils />
      <Projects />
    </div>
  );
}

export default App;
