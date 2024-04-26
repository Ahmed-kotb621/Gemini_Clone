import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ContextProvider from "./Context/Context.jsx";
import ThemeContextProvider from "./Context/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeContextProvider>
    <ContextProvider>
      <App />
    </ContextProvider>
  </ThemeContextProvider>
);
