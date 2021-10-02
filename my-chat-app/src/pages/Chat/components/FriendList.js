import React, { useContext } from "react";
import { LoginContext } from "../../../context/LoginContext";
import profilePic from "../../../assets/img/profilPic.png";
export default function FriendList() {
  const { friendList, selectUser } = useContext(LoginContext);
  return (
    <div className="friendList">
      {friendList.map((item) => {
        return (
          <div className="users">
            <img className="userPic" src={profilePic} alt="profile" />
            <div
              className="userName"
              key={item.id}
              onClick={() => selectUser(item.id)}
            >
              <h4> {`${item.first_name} ${item.last_name}`}</h4>
            </div>
          </div>
        );
      })}
    </div>
  );
}
