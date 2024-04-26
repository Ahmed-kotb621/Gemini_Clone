import userImage from "../../assets/user_icon.png";
import "./Header.css";
import ToggleTheme from "../ToggleTheme/ToggleTheme";

function Header() {
  return (
    <nav>
      <ul className="head-nav">
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
