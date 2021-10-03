import React, { useState, useContext } from "react";
import "./Chat.css";
import SearchInput from "./components/LeftSide/SearchInput";
import FriendList from "./components/LeftSide/FriendList";
import Settings from "./components/LeftSide/Settings";
import MessageInput from "./components/RightSide/MessageInput";
import Messages from "./components/RightSide/Messages";
import UserHeader from "./components/RightSide/UserHeader";
import { LoginContext } from "../../context/LoginContext";
import UserProfile from "../UserProfile";
export default function Chat() {
  const { clickedMore, selectedUser } = useContext(LoginContext);
  const [search, setSearch] = useState("");

  return (
    <div className="chatContainer">
      <div className="left-side">
        <SearchInput searchText={search} handleOnChange={setSearch} />
        <FriendList searchText={search} />
        <Settings />
      </div>
      <div className="right-side">
        {selectedUser ? (
          clickedMore === true ? (
            <UserProfile />
          ) : (
            <>
              <UserHeader />
              <Messages />
              <MessageInput />
            </>
          )
        ) : null}
      </div>
    </div>
  );
}
