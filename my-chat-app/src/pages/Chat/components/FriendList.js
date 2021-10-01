import React, { useContext } from "react";
import { LoginContext } from "../../../context/LoginContext";

export default function FriendList() {
  const { friendList, selectUser } = useContext(LoginContext);
  return (
    <div className="friendList">
      {friendList.map((item) => {
        return (
          <div key={item.id} onClick={() => selectUser(item.id)}>
            {`${item.first_name} ${item.last_name}`}
          </div>
        );
      })}
    </div>
  );
}
