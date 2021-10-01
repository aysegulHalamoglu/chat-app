import React, { useContext } from "react";
import { LoginContext } from "../../../context/LoginContext";

export default function UserHeader() {
  const {} = useContext(LoginContext);
  return (
    <div className="userHeader">
      <div className="userImage">Image</div>
      <div className="userName"> John Doe</div>
      <div className="more">...</div>
    </div>
  );
}
