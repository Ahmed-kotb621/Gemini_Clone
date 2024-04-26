import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import { FaRegMoon, FaSun } from "react-icons/fa";
import "./ToggleTheme.css";
function ToggleTheme() {
  // Toggle Theme context and icon
  const { isDark, toggleTheme } = useContext(ThemeContext);
  return (
    <button className="toggle-btn" onClick={() => toggleTheme()}>
      {isDark ? <FaSun /> : <FaRegMoon />}
    </button>
  );
}

export default ToggleTheme;
