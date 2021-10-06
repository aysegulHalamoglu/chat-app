import React, { useContext } from "react";
//context
import { LoginContext } from "../../../../context/LoginContext";
import { ThemeContext } from "../../../../context/ThemeContext";

import profilePic from "./../../../../assets/img/profilPic.png";
export default function FriendList({ searchText }) {
  const { theming } = useContext(ThemeContext);
  const { friendList, setSelectedUser } = useContext(LoginContext);

  // Friends filtering for searchbar
  const filteredFriendList = friendList.filter((f) =>
    `${f.username}${f.first_name}${f.last_name}`
      .toLowerCase()
      .includes(searchText.toLowerCase())
  );

  return (
    <div
      className={
        theming === "light" ? "friendList bgGray2 " : "friendList bgGray5  "
      }
    >
      <div className="scrollbar">
        {filteredFriendList.map((user) => {
          return (
            <div
              key={user.id}
              className={
                theming === "light"
                  ? "user bgGray1 hov1"
                  : "user bgGray3 hov3 cWhite scrolbar1"
              }
              onClick={() => setSelectedUser(user.id)}
            >
              <div className="users">
                <img className="userPic" src={profilePic} alt="profile" />
                <div className="friendLeftDetails">
                  <h4 className="userNameLeft">
                    {`${user.first_name} ${user.last_name}`}
                  </h4>
                  <h4
                    className={
                      theming === "light"
                        ? "userLastMessage cGray3"
                        : "userLastMessage cGray2"
                    }
                  >
                    {`${
                      user.messages[user.messages.length - 1].text
                    }`.substring(0, 20)}
                    ...
                  </h4>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
