import React, { useContext } from "react";
import { LoginContext } from "../../../../context/LoginContext";
import profilePic from "./../../../../assets/img/profilPic.png";
import "../../Chat.css";
import CustomButton from "../../../../components/CustomButton";
import { ThemeContext } from "../../../../context/ThemeContext";
export default function UserHeader() {
  const { selectedUser, onClickedMore } = useContext(LoginContext);
  const { theming } = useContext(ThemeContext);

  return (
    <div
      className="userHeader"
      style={{
        background: theming === "light" ? "#f2f2f2" : "#6A6A6A",
      }}
    >
      <div className="userImage">
        <img className="userPic" src={profilePic} alt="profile" />
      </div>
      <div
        className="userName"
        style={{
          color: theming === "light" ? "#000000" : "#FFFFFF",
        }}
      >
        <h3>
          {selectedUser
            ? `${selectedUser.first_name} ${selectedUser.last_name}`
            : "No selected user"}
        </h3>
      </div>
      <div className="more">
        <CustomButton
          style={{
            background: theming === "light" ? "#f2f2f2" : "#6A6A6A",
          }}
          className="moreButton"
          text="..."
          onClick={onClickedMore}
        />
      </div>
    </div>
  );
}
