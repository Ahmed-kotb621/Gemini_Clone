import { createContext, useEffect, useState } from "react";
import { useLocalStorageHook } from "../Hooks/useLocalStorageHook";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  // retrieve stored theme in local storage api using custom Hook
  const [isDark, setIsDark] = useLocalStorageHook("isDark", false);

  function toggleTheme() {
    setIsDark((isDark) => !isDark);
  }

  // Change root Dom if dark mode button toggled.
  useEffect(() => {
    if (!isDark) {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
    } else {
      document.documentElement.classList.add("light-mode");
      document.documentElement.classList.remove("dark-mode");
    }
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
