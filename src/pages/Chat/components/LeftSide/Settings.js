import React, { useContext } from "react";
import { LoginContext } from "../../../../context/LoginContext";
import { ThemeContext } from "../../../../context/ThemeContext";
import iconLogout from "../../../../assets/img/logout.svg";
import iconDarkmode from "../../../../assets/img/darkmode.svg";

export default function Settings() {
  const { logout } = useContext(LoginContext);
  const { toggleTheme, theming } = useContext(ThemeContext);
  return (
    <div className={theming === "light" ? "settings" : "settingsDark"}>
      <div className="settingsWrap">
        <button
          className={
            theming === "light" ? "buttonSettings" : "buttonSettingsDark"
          }
          onClick={toggleTheme}
        >
          <img src={iconDarkmode} alt="darkModeIcon" />
        </button>
        <button
          className={
            theming === "light" ? "buttonSettings" : "buttonSettingsDark"
          }
          onClick={logout}
        >
          <img src={iconLogout} alt="logoutIcon" />
        </button>
      </div>
    </div>
  );
}
