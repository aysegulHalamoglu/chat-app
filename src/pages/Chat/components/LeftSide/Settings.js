import React, { useContext } from "react";
import { LoginContext } from "../../../../context/LoginContext";
import iconLogout from "../../../../assets/img/logout.svg";
import iconDarkmode from "../../../../assets/img/darkmode.svg";

export default function Settings() {
  const { logout } = useContext(LoginContext);
  return (
    <div className="settings">
      <div className="settingsWrap">
        <button className="buttonSm">
          <img src={iconDarkmode} alt="darkModeIcon" />
        </button>
        <button className="buttonSm" onClick={logout}>
          <img src={iconLogout} alt="logoutIcon" />
        </button>
      </div>
    </div>
  );
}
