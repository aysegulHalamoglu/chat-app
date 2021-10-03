import React, { useContext } from "react";
import { LoginContext } from "../../../../context/LoginContext";
import { ThemeContext } from "../../../../context/ThemeContext";
import iconLogout from "../../../../assets/img/logout.svg";
import iconDarkmode from "../../../../assets/img/darkmode.svg";

export default function Settings() {
  const { logout } = useContext(LoginContext);
  const { toggleTheme, theming } = useContext(ThemeContext);
  return (
    <div
      className="settings"
      style={{
        background: theming === "light" ? "#f2f2f2" : "#6A6A6A",
      }}
    >
      <div className="settingsWrap">
        <button
          style={{
            background: theming === "light" ? "#f2f2f2" : "#6A6A6A",
          }}
          className="buttonSm"
          onClick={toggleTheme}
        >
          <img src={iconDarkmode} alt="darkModeIcon" />
        </button>
        <button
          style={{
            background: theming === "light" ? "#f2f2f2" : "#6A6A6A",
          }}
          className="buttonSm"
          onClick={logout}
        >
          <img src={iconLogout} alt="logoutIcon" />
        </button>
      </div>
    </div>
  );
}
