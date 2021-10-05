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
      className={
        theming === "light"
          ? "messageInputContainer bgGray2 btL"
          : "messageInputContainer bgGray4 btD"
      }
    >
      <CustomInput
        value={message}
        className={
          theming === "light"
            ? "messageInput bgGray2 bL"
            : "messageInput bgGray3 bD cWhite"
        }
        placeholder="Type..."
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <CustomButton
        className={
          theming === "light"
            ? "messageButton CustomButton bgBlue2 "
            : "messageButton CustomButton bgBlue3 "
        }
        text="SEND"
        onClick={() => {
          sendNewMessage(message);
          setMessage("");
        }}
      />
    </div>
  );
}
