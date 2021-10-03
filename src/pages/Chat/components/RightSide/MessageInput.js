import React, { useContext, useState } from "react";
import CustomButton from "../../../../components/CustomButton";
import CustomInput from "../../../../components/CustomInput";
import { LoginContext } from "../../../../context/LoginContext";
import "../../Chat.css";

export default function MessageInput() {
  const { sendNewMessage } = useContext(LoginContext);
  const [message, setMessage] = useState("");
  return (
    <div className="messageInputContainer">
      <CustomInput
        value={message}
        className="messageInput"
        placeholder="Type..."
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <CustomButton
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
