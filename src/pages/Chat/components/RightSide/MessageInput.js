import React, { useContext, useState } from "react";
import CustomButton from "../../../../components/CustomButton";
import CustomInput from "../../../../components/CustomInput";
import { LoginContext } from "../../../../context/LoginContext";
import { ThemeContext } from "../../../../context/ThemeContext";
import "../../Chat.css";

export default function MessageInput() {
  const { sendNewMessage } = useContext(LoginContext);
  const { theming } = useContext(ThemeContext);
  const [message, setMessage] = useState("");
  return (
    <div
      style={{
        background: theming === "light" ? "#f2f2f2" : "#6A6A6A",
      }}
      className="messageInputContainer"
    >
      <CustomInput
        value={message}
        className="messageInput"
        placeholder="Type..."
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <CustomButton
        style={{
          background: theming === "light" ? "#68b7ff" : "#4D8DC8",
        }}
        className="messageButton CustomButton"
        text="SEND"
        onClick={() => {
          sendNewMessage(message);
          setMessage("");
        }}
      />
    </div>
  );
}
