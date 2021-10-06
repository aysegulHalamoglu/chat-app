import React, { useContext } from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { LoginContext } from "./context/LoginContext";
import Chat from "./pages/Chat/";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
function Routes() {
  const { user, clickedMore, selectedUser } = useContext(LoginContext);
  console.log(user);

  return (
    <div className="Routes">
      <Router>
        <Switch>
          {!user ? (
            <>
              <Redirect to="/login}" />
              <Route>
                <Login exact path="/login" />
              </Route>
            </>
          ) : (
            <>
              {clickedMore === true ? (
                <>
                  <Redirect
                    to={`/chat/:${selectedUser.first_name}${selectedUser.last_name}/${selectedUser.id}`}
                  />
                  <Route>
                    <Chat
                      path={`/chat/:${selectedUser.first_name}${selectedUser.last_name}/${selectedUser.id}`}
                    >
                      <UserProfile />
                    </Chat>
                  </Route>
                </>
              ) : (
                <>
                  <Redirect to="/chat" />
                  <Route>
                    <Chat exact path="/chat" />
                  </Route>
                </>
              )}
            </>
          )}
        </Switch>
      </Router>
    </div>
  );
}

export default Routes;
