import React, { useContext } from "react";
import { LoginContext } from "../../../../context/LoginContext";
import profilePic from "./../../../../assets/img/profilPic.png";
import "../../Chat.css";
import CustomButton from "../../../../components/CustomButton";
import { ThemeContext } from "../../../../context/ThemeContext";
export default function UserHeader() {
  const { selectedUser, onClickedMore, clickedMore } = useContext(LoginContext);
  const { theming } = useContext(ThemeContext);

  return (
    <div
      className={
        theming === "light" ? "userHeader bgGray2" : "userHeader bgGray4"
      }
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
      <div className="more ">
        <CustomButton
          className={
            theming === "light"
              ? "moreButton bgGray2 hov4"
              : "moreButton bgGray4 hov5"
          }
          text="..."
          onClick={onClickedMore}
        />
      </div>
    </div>
  );
}
