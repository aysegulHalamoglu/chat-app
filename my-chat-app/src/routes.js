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
function Routes() {
  const { user } = useContext(LoginContext);
  return (
    <div className="Routes">
      <Router>
        <Switch>
          {user ? (
            <>
              <Redirect exact from="/login" to="/chat" />
              <Route>
                <Chat path="/chat" />
              </Route>
            </>
          ) : (
            <Route>
              <Login path="/login" />
            </Route>
          )}
        </Switch>
      </Router>
    </div>
  );
}

export default Routes;
