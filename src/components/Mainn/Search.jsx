import { useContext } from "react";
import { assets } from "../../assets/assets";
import { Context } from "../../Context/Context";
import { ThemeContext } from "../../Context/ThemeContext";
import { IoMdSend } from "react-icons/io";
import { IoImage, IoMic } from "react-icons/io5";
import { LuImageMinus, LuImagePlus } from "react-icons/lu";
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
        <button>
          <LuImagePlus />
        </button>
        <button>
          <IoMic />
        </button>
        {input.length > 0 ? (
          <button onClick={() => onSent()}>
            <IoMdSend />
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default Search;
