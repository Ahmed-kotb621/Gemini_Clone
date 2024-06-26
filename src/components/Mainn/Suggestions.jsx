import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./suggestions.scss";
import { Context } from "../../Context/Context";
import { ThemeContext } from "../../Context/ThemeContext";
function Suggestions() {
  const { onSent, setRecentPrompt } = useContext(Context);
  const { isDark } = useContext(ThemeContext);
  const suggestions = [
    {
      message: "Suggest beautiful places to see on an upcoming road trip",
      source: assets.compass_icon,
    },
    {
      message: "Briefly summarize this concept: urban planning",
      source: assets.bulb_icon,
    },
    {
      message: "Brainstorm team bonding activities for our work retreat",
      source: assets.message_icon,
    },
    {
      message: "Tell me about React js and React native",
      source: assets.code_icon,
    },
  ];

  function handleSuggestions(suggest) {
    onSent(suggest.message);
    setRecentPrompt(suggest.message);
  }
  return (
    <div className="suggestions">
      {suggestions.map((suggest, index) => {
        return (
          <div
            className={`${isDark ? "card-dark" : "card"}`}
            key={index}
            onClick={() => handleSuggestions(suggest)}
          >
            <p>{suggest.message}</p>
            <img src={suggest.source} alt="" />
          </div>
        );
      })}
    </div>
  );
}

export default Suggestions;
