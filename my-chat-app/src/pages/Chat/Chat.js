import React from "react";
import "./Chat.css";
import UserHeader from "./components/UserHeader";
import SearchInput from "./components/SearchInput";
import FriendList from "./components/FriendList";
import Settings from "./components/Settings";
import MessageInput from "./components/MessageInput";
import Messages from "./components/Messages";
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
