import { useState } from "react";
import { assets } from "../../assets/assets";
import "./SideBar.css";
import { useContext } from "react";
import { Context } from "../../Context/Context";
function SideBar() {
  const [expanded, setIsExpanded] = useState(true);

  function handleExpanded() {
    setIsExpanded((isExpadned) => !isExpadned);
  }
  return (
    <div className="sidebar">
      <div className="top">
        <img
          src={assets.menu_icon}
          className="menu"
          alt="menu icon"
          onClick={() => handleExpanded()}
        />

        <div className="new-chat">
          <img src={assets.plus_icon} alt="" />
          {expanded && <p>New Chat</p>}
        </div>

        {expanded && (
          <div className="recent">
            <p className="recent-title">Recent</p>
            <div className="recent-chats">
              <img src={assets.message_icon} alt="message" />
              <p>What is React...</p>
            </div>
          </div>
        )}
      </div>

      <div className="down">
        <div className="down-entry help">
          <img src={assets.question_icon} alt="help icon" />
          {expanded && <p>Help</p>}
        </div>

        <div className="down-entry activity">
          <img src={assets.history_icon} alt="activity icon" />
          {expanded && <p>Activity</p>}
        </div>

        <div className="down-entry settings">
          <img src={assets.setting_icon} alt="settings icon" />
          {expanded && <p>Settings</p>}
        </div>
      </div>
    </div>
  );
}

export default SideBar;
