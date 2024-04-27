import { useState } from "react";
import { assets } from "../../assets/assets";
import { useContext } from "react";
import { Context } from "../../Context/Context";
//import "./SideBar.css";
import "./SideBar.module.css";

function SideBar() {
  const [expanded, setIsExpanded] = useState(true);
  const { prevPrompt, onSent, setRecentPrompt, setShowResult } =
    useContext(Context);

  // negate side bar expand
  function handleExpanded() {
    setIsExpanded((isExpanded) => !isExpanded);
  }

  // show prev. prompt again
  function handlePreviousPrompt(prompt) {
    onSent(prompt);
    setRecentPrompt(prompt);
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

        <div className="new-chat" onClick={() => setShowResult(false)}>
          <img src={assets.plus_icon} alt="" />
          {expanded && <p>New Chat</p>}
        </div>

        {expanded && (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompt.map((element) => {
              return (
                <>
                  <div
                    className="recent-chats"
                    onClick={() => handlePreviousPrompt(element)}
                  >
                    <img src={assets.message_icon} alt="message" />
                    <p>{element.slice(0, 18) + "..."}</p>
                  </div>
                </>
              );
            })}
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
