import userImage from "../../assets/user_icon.png";
import "./Header.css";
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
    </nav>
  );
}

export default Header;
