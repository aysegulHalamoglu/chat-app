import React, { useContext } from "react";
import { LoginContext } from "../../../../context/LoginContext";
import profilePic from "./../../../../assets/img/profilPic.png";
export default function FriendList({ searchText }) {
  const { friendList, selectUser } = useContext(LoginContext);
  const filteredFriendList = friendList.filter((f) =>
    `${f.username}${f.first_name}${f.last_name}`
      .toLowerCase()
      .includes(searchText.toLowerCase())
  );

  return (
    <div className="friendList">
      {filteredFriendList.map((item) => {
        return (
          <div
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
