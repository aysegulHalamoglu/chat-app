import React, { useContext } from "react";
import { LoginContext } from "../../../../context/LoginContext";
import { ThemeContext } from "../../../../context/ThemeContext";

export default function EmptyComponent() {
  const { theming } = useContext(ThemeContext);
  const { selectedUser } = useContext(LoginContext);
  return (
    <div
      style={{
        background: theming === "light" ? "#f2f2f2" : "#6A6A6A",
        flex: selectedUser === null ? 1 : 0,
      }}
      className="empty"
    ></div>
  );
}
