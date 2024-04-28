import { useContext } from "react";
import { assets } from "../../assets/assets";
import { Context } from "../../Context/Context";
import Loader from "../Loader/Loader";
import "./result.scss";

import MyCodeComponent from "../Mainn/CodeBlock";
import MyCoolCodeBlock from "../Mainn/CodeBlock";
import { ThemeContext } from "../../Context/ThemeContext";

function Result() {
  const { recentPrompt, isLoading, result } = useContext(Context);
  const { isDark } = useContext(ThemeContext);
  return (
    <div className={`${isDark ? "result-main-dark" : "result-main"}`}>
      <div className="prompt">
        <img src={assets.user_icon} alt="user avatar" />
        <p>{recentPrompt}</p>
      </div>
      <div className="answer">
        <div className="image">
          <img src={assets.gemini_icon} alt="result icon" />
        </div>

        {isLoading ? (
          <Loader />
        ) : (
          /*
          <MyCoolCodeBlock
            code="const x = 50;"
            language="jsx"
            showLineNumbers="true"
          />
          */
          <div
            className="result-text"
            dangerouslySetInnerHTML={{ __html: result }}
          />
          // </MyCoolCodeBlock>
        )}
      </div>
    </div>
  );
}

export default Result;
