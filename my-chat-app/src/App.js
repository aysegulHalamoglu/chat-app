import { useState } from "react";
import "./App.css";
import { LoginContext } from "./context/LoginContext";
import Routes from "./routes";

function App() {
  const [user, setUser] = useState(null);
  const login = (username, firstName, lastName) => {
    setUser({ username, firstName, lastName });
  };
  return (
    <div className="App">
      <LoginContext.Provider value={{ user, login }}>
        <Routes />
      </LoginContext.Provider>
    </div>
  );
}

export default App;
