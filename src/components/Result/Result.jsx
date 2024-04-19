import { useContext } from "react";
import { assets } from "../../assets/assets";
import { Context } from "../../Context/Context";
import "./Result.css";
import Loader from "../Loader/Loader";

function Result() {
  const { recentPrompt, isLoading, result } = useContext(Context);
  return (
    <div className="result-main">
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
          <div dangerouslySetInnerHTML={{ __html: result }} />
        )}
      </div>
    </div>
  );
}

export default Result;
