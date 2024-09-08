import React from "react";

import style from "./style/App.module.css";
import Header from "./components/header";
import Introduce from "./components/introduce";
import { IsClickProvider } from "./components/isClickedContext";

function App() {
  return (
    <div className={style.main}>
      <IsClickProvider>
        <Header />
        <Introduce />
      </IsClickProvider>
    </div>
  );
}

export default App;
