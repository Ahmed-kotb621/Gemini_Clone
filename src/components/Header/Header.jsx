import userImage from "../../assets/user_icon.png";
import ToggleTheme from "../ToggleTheme/ToggleTheme";
import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import "./header.scss";
function Header() {
  const { isDark } = useContext(ThemeContext);
  return (
    <nav>
      <ul className={`${isDark ? "head-nav-dark" : "head-nav"}`}>
        <li>
          <p>Gemini</p>
        </li>
        <li>
          <img src={userImage} />
        </li>
      </ul>
      <ToggleTheme />
    </nav>
  );
}

export default Header;
