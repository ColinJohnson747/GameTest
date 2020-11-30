import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import NoMatch from "./pages/NoMatch";
import Search from "./pages/Search";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {}, []);

  return (
    <div className="App">
      <div>
        <Nav />
        <div className="main-view">
          <Switch>
            <Route exact path="/" component={Search} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
