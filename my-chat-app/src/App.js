import { useState } from "react";
import "./App.css";
import { LoginContext } from "./context/LoginContext";
import Routes from "./routes";
import mockFriends from "./mock-friends.json";
function App() {
  const [user, setUser] = useState(null);
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
        }}
      >
        <Routes />
      </LoginContext.Provider>
    </div>
  );
}

export default App;
