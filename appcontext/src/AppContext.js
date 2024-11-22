import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [theme, setTheme] = useState("light");

  const toggleAuth = () => setIsAuthenticated(!isAuthenticated);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <AppContext.Provider
      value={{ isAuthenticated, theme, toggleAuth, toggleTheme }}
    >
      {children}
    </AppContext.Provider>
  );
};
