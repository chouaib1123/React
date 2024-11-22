import logo from "./logo.svg";
import React, { useContext } from "react";
import "./App.css";
import { AppContext } from "./AppContext";
function App() {
  const { isAuthenticated, theme, toggleAuth, toggleTheme } =
    useContext(AppContext);

  return (
    <div className="App">
      <button onClick={toggleAuth}>
        {isAuthenticated ? "Log Out" : "Log In"}
      </button>
      <button onClick={toggleTheme}>
        {theme === "light" ? "light" : "dark"}
      </button>
    </div>
  );
}

export default App;
