import React, { useContext } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { LoginContext } from "./context/LoginContext";
import Chat from "./pages/Chat/";
import Login from "./pages/Login";
function Routes() {
  const { user, clickedMore } = useContext(LoginContext);
  return (
    <div className="Routes">
      <Router>
        <Switch>
          {!user ? (
            <Route>
              <Login path="/login" />
            </Route>
          ) : (
            <>
              {clickedMore ? (
                <Route>
                  <Chat path="/chat/:userid" />
                </Route>
              ) : (
                <Route>
                  <Chat path="/chat" />
                </Route>
              )}
            </>
          )}
        </Switch>
      </Router>
    </div>
  );
}

export default Routes;
