import React from "react";
import ReactDOM from "react-dom";
import Nav from "./component/header/Nav";
import Main from "./component/dashboard";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <header>
        <Nav style={{ background: "#2E3B55" }} />
      </header>
      <Main />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
