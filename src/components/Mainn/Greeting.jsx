import { useContext } from "react";
import "./greeting.scss";
import { ThemeContext } from "../../Context/ThemeContext";
function Greeting() {
  const { isDark } = useContext(ThemeContext);
  return (
    <div className="greet-main">
      <p className="greet-grad">Hello, Dev.</p>
      <p className={`${isDark ? "greet-grey-dark" : "greet-grey"}`}>
        How can i help you today?
      </p>
    </div>
  );
}

export default Greeting;
