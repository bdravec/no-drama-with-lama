import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count,setCount] = useState(0);
  const [isMenuOpen,setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="top-nav">
        <button
          className={"hamburger" + (isMenuOpen ? " is-open" : "")}
          aria-label="Menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        {isMenuOpen && (
          <div className="menu" role="menu">
            <a href="#about-vibe-coding" role="menuitem" onClick={() => setIsMenuOpen(false)}>About Vibe Coding</a>
            <a href="#about-me" role="menuitem" onClick={() => setIsMenuOpen(false)}>About me</a>
            <a href="#offers" role="menuitem" onClick={() => setIsMenuOpen(false)}>Offers</a>
          </div>
        )}
      </nav>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
