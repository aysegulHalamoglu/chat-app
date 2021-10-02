import React from "react";
import "./Chat.css";
import SearchInput from "./components/LeftSide/SearchInput";
import FriendList from "./components/LeftSide/FriendList";
import Settings from "./components/LeftSide/Settings";
import MessageInput from "./components/RightSide/MessageInput";
import Messages from "./components/RightSide/Messages";
import UserHeader from "./components/RightSide/UserHeader";
export default function Chat() {
  return (
    <div className="chatContainer">
      <div className="left-side">
        <SearchInput />
        <FriendList />
        <Settings />
      </div>
      <div className="right-side">
        <UserHeader />
        <Messages />
        <MessageInput />
      </div>
    </div>
  );
}
