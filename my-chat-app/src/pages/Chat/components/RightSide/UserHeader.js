import React, { useContext } from "react";
import { LoginContext } from "../../../../context/LoginContext";
import profilePic from "./../../../../assets/img/profilPic.png";
import "../../Chat.css";
export default function UserHeader() {
  const { selectedUser } = useContext(LoginContext);
  return (
    <div className="userHeader">
      <div className="userImage">
        <img className="userPic" src={profilePic} alt="profile" />
      </div>
      <div className="userName">
        <h3>
          {selectedUser
            ? `${selectedUser.first_name} ${selectedUser.last_name}`
            : "No selected user"}
        </h3>
      </div>
      <div className="more">...</div>
    </div>
  );
}
