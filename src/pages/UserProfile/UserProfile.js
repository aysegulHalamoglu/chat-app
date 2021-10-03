import React, { useContext } from "react";
import "./UserProfile.css";
import { LoginContext } from "../../context/LoginContext";
import profilePic from "../../assets/img/profilPic.png";
import ActionBox from "./components/ActionBox";
//icons
import messaging from "../..//assets/img/messaging.svg";
import call from "../..//assets/img/call.svg";
import video from "../..//assets/img/video.svg";

export default function UserProfile() {
  const { handleCancel } = useContext(LoginContext);
  return (
    <div className="userProfileContainer">
      <div className="cancelButton" onClick={handleCancel}>
        x
      </div>
      <div className="userDetails">
        <div className="profilePicContainer">
          <img className="profilePic" src={profilePic} alt="profile" />
        </div>
        <span className="profileName">JohnDoe</span>
        <span className="lastSeen">last seen</span>
      </div>

      <div className="actions">
        <ActionBox
          text="Message"
          className="messaging"
          src={messaging}
          alt="messaging"
        />

        <ActionBox text="Video" className="video" src={video} alt="video" />
        <ActionBox text="Call" className="call" src={call} alt="call" />
      </div>
    </div>
  );
}
