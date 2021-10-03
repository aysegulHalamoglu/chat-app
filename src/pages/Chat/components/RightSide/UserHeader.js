import React, { useContext } from "react";
import { LoginContext } from "../../../../context/LoginContext";
import profilePic from "./../../../../assets/img/profilPic.png";
import "../../Chat.css";
import CustomButton from "../../../../components/CustomButton";
export default function UserHeader() {
  const { selectedUser, onClickedMore } = useContext(LoginContext);

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
      <div className="more">
        <CustomButton
          className="moreButton"
          text="..."
          onClick={onClickedMore}
        />
      </div>
    </div>
  );
}
