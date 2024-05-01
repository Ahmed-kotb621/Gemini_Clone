import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import { FaRegMoon, FaSun } from "react-icons/fa";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import "./ToggleTheme.css";
function ToggleTheme() {
  // Toggle Theme context and icon
  const { isDark, toggleTheme } = useContext(ThemeContext);
  return (
    <button className="toggle-btn" onClick={() => toggleTheme()}>
      {isDark ? (
        <IoSunnyOutline style={{ color: "#fff" }} />
      ) : (
        <IoMoonOutline />
      )}
    </button>
  );
}

export default ToggleTheme;
