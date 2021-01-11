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
        <p>A CartMouse App //</p>
        <span>
          <i className="fab fa-github"></i>
          <a
            href="https://github.com/cartmouse"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </span>
        <p>//</p>
        <span>
          <i className="fab fa-twitter"></i>
          <a
            href="https://twitter.com/cartmouse"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </span>
      </footer>
    </div>
  );
}

export default App;
