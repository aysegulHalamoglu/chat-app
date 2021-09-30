import React from "react";
import "./Chat.css";
export default function Chat() {
  return (
    <div className="chatContainer">
      <div className="left-side">
        <div className="searchbar">searchbar</div>
        <div className="friendList">friendList</div>
        <div className="settings">settings</div>
      </div>
      <div className="right-side">
        <div className="userHeader">
          <div className="userImage">Image</div>
          <div className="userName">userName</div>
          <div className="more">...</div>
        </div>
        <div className="messages">messages</div>
        <div className="messageInput">messageInput</div>
      </div>
    </div>
  );
}
