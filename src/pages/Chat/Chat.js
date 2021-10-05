import React, { useState, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { LoginContext } from "../../context/LoginContext";
import "./Chat.css";
import "./Theming.css";
import SearchInput from "./components/LeftSide/SearchInput";
import FriendList from "./components/LeftSide/FriendList";
import Settings from "./components/LeftSide/Settings";
import MessageInput from "./components/RightSide/MessageInput";
import Messages from "./components/RightSide/Messages";
import UserHeader from "./components/RightSide/UserHeader";
import UserProfile from "../UserProfile";
import EmptyComponent from "./components/RightSide/EmptyComponent";
import { Redirect } from "react-router";
export default function Chat() {
  const { user, clickedMore, selectedUser } = useContext(LoginContext);
  const { theming } = useContext(ThemeContext);
  const [search, setSearch] = useState("");
  if (!user) return <Redirect to="/login" />;
  return (
    <div className="chatContainer">
      <div
        className={theming === "light" ? "left-side brL " : "left-side brD  "}
      >
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
        ) : (
          <EmptyComponent />
        )}
      </div>
    </div>
  );
}
