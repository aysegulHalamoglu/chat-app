import React, { useContext } from "react";
import { LoginContext } from "../../../context/LoginContext";

export default function UserHeader() {
  const { selectedUser } = useContext(LoginContext);
  return (
    <div className="userHeader">
      <div className="userImage">Image</div>
      <div className="userName">
        {`${selectedUser?.first_name} ${selectedUser?.last_name}`}
      </div>
      <div className="more">...</div>
    </div>
  );
}
