import { assets } from "../../assets/assets";
import "./Suggestions.css";
function Suggestions() {
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
  return (
    <div className="suggestions">
      <div className="card">
        <p>Suggest beautiful places to see on an upcoming road trip</p>
        <img src={assets.compass_icon} alt="" />
      </div>
      <div className="card">
        <p>Briefly summarize this concept: urban planning</p>
        <img src={assets.bulb_icon} alt="" />
      </div>
      <div className="card">
        <p>Brainstorm team bonding activities for our work retreat</p>
        <img src={assets.message_icon} alt="" />
      </div>
      <div className="card">
        <p>Tell me about React js and React native</p>
        <img src={assets.code_icon} alt="" />
      </div>
    </div>
  );
}

export default Suggestions;
