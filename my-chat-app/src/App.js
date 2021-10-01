import { useState } from "react";
import { LoginContext } from "./context/LoginContext";
import "./App.css";
import Routes from "./routes";

import mockFriends from "./mock-friends.json";

function App() {
  const [user, setUser] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  const selectUser = (userID) => {
    const friend = mockFriends.friends.find((friend) => friend.id === userID);
    setSelectedUser(friend);
  };

  const login = (username, firstName, lastName) => {
    setUser({ username, firstName, lastName });
  };
  return (
    <div className="App">
      <LoginContext.Provider
        value={{
          user,
          login,
          friendList: mockFriends.friends,
          selectUser,
          selectedUser,
        }}
      >
        <Routes />
      </LoginContext.Provider>
    </div>
  );
}

export default App;
