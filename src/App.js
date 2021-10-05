import { useState, useEffect } from "react";
import { LoginContext } from "./context/LoginContext";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Routes from "./routes";

import mockFriends from "./mock-friends.json";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const [user, setUser] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [friendList, setFriendList] = useState(mockFriends.friends);
  const [clickedMore, setClickedMore] = useState(false);
  const [theming, setTheming] = useState("light");

  const handleSetSelectedUser = (userID) => {
    const friend = friendList.find((friend) => friend.id === userID);
    if (user) setSelectedUser(friend);
  };

  const sendNewMessage = (messageText) => {
    setSelectedUser({
      ...selectedUser,
      messages: [
        ...selectedUser.messages,
        {
          id: uuidv4(),
          text: messageText,
          sender: user.userID,
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

  const toggleTheme = () => {
    if (theming === "light") {
      setTheming("dark");
    } else {
      setTheming("light");
    }
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
      <ThemeContext.Provider
        value={{
          theming,
          toggleTheme,
        }}
      >
        <LoginContext.Provider
          value={{
            user,
            login,
            logout,
            friendList,
            selectedUser,
            setSelectedUser: handleSetSelectedUser,
            sendNewMessage,
            onClickedMore,
            clickedMore,
            handleCancel,
          }}
        >
          <Routes />
        </LoginContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
