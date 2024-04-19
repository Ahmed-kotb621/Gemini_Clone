import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./Search.css";
import { Context } from "../../Context/Context";
function Search() {
  const { onSent, input, setInput } = useContext(Context);
  return (
    <div className="search">
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
