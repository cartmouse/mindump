import React from "react";
import Home from "./Home/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="banner">
        <h1>Mindump</h1>
        <div className="nav">
          <i>Dumper</i>
          <i>Viewer</i>
        </div>
      </div>
      <main>
        <Home />
      </main>
      <footer>
        <p>
          <a
            href="https://github.com/cartmouse"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>
        <p>
          <a
            href="https://twitter.com/cartmouse"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
