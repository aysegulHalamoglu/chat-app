import React, { useContext } from "react";
import { LoginContext } from "../../../../context/LoginContext";

export default function Messages() {
  const { selectedUser } = useContext(LoginContext);
  return (
    <div className="messages">
      {selectedUser?.messages.map((message, index) => {
        return (
          <div className="messageContainer">
            <div className="message" key={index}>
              {message.text}
            </div>
          </div>
        );
      })}
    </div>
  );
}