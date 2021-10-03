import React, { useContext } from "react";
//context
import { LoginContext } from "../../../../context/LoginContext";
import { ThemeContext } from "../../../../context/ThemeContext";

import profilePic from "./../../../../assets/img/profilPic.png";
export default function FriendList({ searchText }) {
  const { theming } = useContext(ThemeContext);
  const { friendList, selectUser } = useContext(LoginContext);
  const filteredFriendList = friendList.filter((f) =>
    `${f.username}${f.first_name}${f.last_name}`
      .toLowerCase()
      .includes(searchText.toLowerCase())
  );

  return (
    <div
      style={{
        background: theming === "light" ? "#F3F3F3" : "#6A6A6A",
        color: theming === "light" ? "#000000" : "#FFFFFF",
      }}
      className="friendList"
    >
      {filteredFriendList.map((item) => {
        return (
          <div
            style={{
              background: theming === "light" ? "#FFFFFF" : "#7A7A7A",
              color: theming === "light" ? "#000000" : "#FFFFFF",
            }}
            key={item.id}
            className="users"
            onClick={() => selectUser(item.id)}
          >
            <img className="userPic" src={profilePic} alt="profile" />
            <div className="userName">
              <h4> {`${item.first_name} ${item.last_name}`}</h4>
            </div>
          </div>
        );
      })}
    </div>
  );
}
