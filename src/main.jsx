import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ContextProvider from "./Context/Context.jsx";
import ThemeContextProvider from "./Context/ThemeContext.jsx";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeContextProvider>
    <ContextProvider>
      <App />
    </ContextProvider>
  </ThemeContextProvider>
);
