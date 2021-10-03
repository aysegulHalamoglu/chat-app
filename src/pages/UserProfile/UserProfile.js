import React, { useContext } from "react";
import "./UserProfile.css";
import { ThemeContext } from "../../context/ThemeContext";
import { LoginContext } from "../../context/LoginContext";
import profilePic from "../../assets/img/profilPic.png";
import ActionBox from "./components/ActionBox";
//icons
import messaging from "../..//assets/img/messaging.svg";
import call from "../..//assets/img/call.svg";
import video from "../..//assets/img/video.svg";

export default function UserProfile() {
  const { handleCancel, selectedUser } = useContext(LoginContext);
  const { theming } = useContext(ThemeContext);

  return (
    <div
      className="userProfileContainer"
      style={{
        background: theming === "light" ? "#E5E5E5" : "#7A7A7A",
        color: theming === "light" ? "#000000" : "#FFFFFF",
      }}
    >
      <div
        style={{
          background: theming === "light" ? "#E5E5E5" : "#7A7A7A",
          color: theming === "light" ? "#000000" : "#FFFFFF",
        }}
        className="cancelButton"
        onClick={handleCancel}
      >
        x
      </div>
      <div
        className="userDetails"
        style={{
          background: theming === "light" ? "#E5E5E5" : "#7A7A7A",
          color: theming === "light" ? "#000000" : "#FFFFFF",
        }}
      >
        <div className="profilePicContainer">
          <img className="profilePic" src={profilePic} alt="profile" />
        </div>
        <span className="profileName">
          {`${selectedUser.first_name} ${selectedUser.last_name}`}
        </span>
        <span className="lastSeen">Last seen 2 hours ago</span>
      </div>

      <div
        style={{
          background: theming === "light" ? "#E5E5E5" : "#7A7A7A",
          color: theming === "light" ? "#000000" : "#FFFFFF",
        }}
        className="actions"
      >
        <ActionBox
          style={{
            background: theming === "light" ? "#7A7A7A" : "#E5E5E5",
          }}
          text="Message"
          className="messaging"
          src={messaging}
          alt="messaging"
        />

        <ActionBox
          style={{
            background: theming === "light" ? "#7A7A7A" : "#E5E5E5",
          }}
          text="Video"
          className="video"
          src={video}
          alt="video"
        />
        <ActionBox
          style={{
            background: theming === "light" ? "#7A7A7A" : "#E5E5E5",
          }}
          text="Call"
          className="call"
          src={call}
          alt="call"
        />
      </div>
    </div>
  );
}
