import { useState, useEffect } from "react";
import { LoginContext } from "./context/LoginContext";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Routes from "./routes";

import mockFriends from "./mock-friends.json";

function App() {
  const [user, setUser] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [clickedMore, setClickedMore] = useState(false);

  const selectUser = (userID) => {
    const friend = mockFriends.friends.find((friend) => friend.id === userID);
    setSelectedUser(friend);
  };

  const sendNewMessage = (messageText) => {
    setSelectedUser({
      ...selectedUser,
      messages: [
        ...selectedUser.messages,
        {
          id: uuidv4(),
          text: messageText,
          sender: user.id,
        },
      ],
    });
  };
  const login = (username, firstName, lastName) => {
    const user = { username, firstName, lastName };
    setUser({ user });
    localStorage.setItem("chat_app_user", JSON.stringify(user));
  };
  const logout = () => {
    setUser(null);
    localStorage.removeItem("chat_app_user");
  };

  const onClickedMore = (clickedMore) => {
    setClickedMore(true);
  };

  const handleCancel = () => {
    setClickedMore(false);
  };
  useEffect(() => {
    handleCancel();
  }, [selectedUser]);

  useEffect(() => {
    const usernameFromStorage = localStorage.getItem("chat_app_user");
    if (usernameFromStorage) {
      const userObj = JSON.parse(usernameFromStorage);
      setUser(userObj);
    }
  }, []);
  return (
    <div className="App">
      <LoginContext.Provider
        value={{
          user,
          login,
          logout,
          friendList: mockFriends.friends,
          selectUser,
          selectedUser,
          sendNewMessage,
          onClickedMore,
          clickedMore,
          handleCancel,
        }}
      >
        <Routes />
      </LoginContext.Provider>
    </div>
  );
}

export default App;
