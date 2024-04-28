import { useContext } from "react";
import { assets } from "../../assets/assets";
import { Context } from "../../Context/Context";
import { ThemeContext } from "../../Context/ThemeContext";
import "./search.scss";
function Search() {
  const { onSent, input, setInput } = useContext(Context);
  const { isDark } = useContext(ThemeContext);
  return (
    <div className={`${isDark ? "search-dark" : "search"}`}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Enter a promp here "
      />
      <div className="icons">
        <img src={assets.gallery_icon} />
        <img src={assets.mic_icon} />
        <img onClick={() => onSent()} src={assets.send_icon} />
      </div>
    </div>
  );
}

export default Search;
