import React, { useContext } from "react";
import { LoginContext } from "../../../../context/LoginContext";
import { ThemeContext } from "../../../../context/ThemeContext";
export default function Messages() {
  const { selectedUser, user } = useContext(LoginContext);
  const { theming } = useContext(ThemeContext);
  return (
    <div
      className={theming === "light" ? "messages bgGray1" : "messages bgGray3"}
    >
      <div className="scrollbar">
        {selectedUser?.messages.map((message, index) => {
          return (
            <div
              key={index}
              className={` messageContainer ${
                message.sender === user.id ? "fromUser" : "fromFriend"
              }`}
            >
              <div
                className={
                  theming === "light"
                    ? "message bgGray2"
                    : "message bgGray5 cWhite"
                }
              >
                {message.text}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
