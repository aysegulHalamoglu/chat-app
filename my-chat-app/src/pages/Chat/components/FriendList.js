import React, { useContext } from "react";
import { LoginContext } from "../../../context/LoginContext";

export default function FriendList() {
  const { friendList } = useContext(LoginContext);
  return (
    <div className="friendList">
      {friendList.map((item) => {
        return <div>{`${item.first_name} ${item.last_name}`} </div>;
      })}
    </div>
  );
}
