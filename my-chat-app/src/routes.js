import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
function Routes() {
  return (
    <div className="Routes">
      <Router>
        <Switch>
          <Route>
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Routes;
