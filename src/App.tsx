import React from "react";

import style from "./style/App.module.css";
import Header from "./components/header";
import Introduce from "./components/introduce";

function App() {
  return (
    <div className={style.main}>
      <Header />
      <Introduce />
    </div>
  );
}

export default App;
