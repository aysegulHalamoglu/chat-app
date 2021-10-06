import { useState, useEffect } from "react";
import "./App.css";
import Routes from "./routes";
import mockFriends from "./mock-friends.json";
import { v4 as uuidv4 } from "uuid";

import { LoginContext } from "./context/LoginContext";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const [user, setUser] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [friendList, setFriendList] = useState(mockFriends.friends);
  const [clickedMore, setClickedMore] = useState(false);
  const [theming, setTheming] = useState("light");
  // Login
  const login = (username) => {
    const user = { username };
    setUser({ user });
    localStorage.setItem("chat_app_user", JSON.stringify(user));
  };

  useEffect(() => {
    const usernameFromStorage = localStorage.getItem("chat_app_user");
    if (usernameFromStorage) {
      const userObj = JSON.parse(usernameFromStorage);
      setUser(userObj);
    }
  }, []);

  // Logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem("chat_app_user");
  };

  // Selecting user
  const handleSetSelectedUser = (userID) => {
    const friend = friendList.find((friend) => friend.id === userID);
    if (user) setSelectedUser(friend);
  };

  // Chat messages : sending new message
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

  // UserProfile details go
  const onClickedMore = (clickedMore) => {
    setClickedMore(true);
  };

  const handleCancel = () => {
    setClickedMore(false);
  };

  useEffect(() => {
    handleCancel();
  }, [selectedUser]);

  // Theming
  const toggleTheme = () => {
    if (theming === "light") {
      setTheming("dark");
    } else {
      setTheming("light");
    }
  };

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
