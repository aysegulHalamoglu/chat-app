import React, { useContext } from "react";
import { LoginContext } from "../../../../context/LoginContext";
import { ThemeContext } from "../../../../context/ThemeContext";
export default function Messages() {
  const { selectedUser } = useContext(LoginContext);
  const { theming } = useContext(ThemeContext);
  return (
    <div
      style={{
        background: theming === "light" ? "#FFFFFF" : "#7A7A7A",
        color: theming === "light" ? "#000000" : "#FFFFFF",
      }}
      className="messages"
    >
      {selectedUser?.messages.map((message, index) => {
        return (
          <div className="messageContainer">
            <div
              style={{
                background: theming === "light" ? "#f2f2f2" : "#515151",
                color: theming === "light" ? "#000000" : "#FFFFFF",
              }}
              className="message"
              key={index}
            >
              {message.text}
            </div>
          </div>
        );
      })}
    </div>
  );
}
