import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Login from "./components/Login/Login";
import Loading from "./components/Login/Loading";
import Game from "./components/Game/Game";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/loading" component={Loading} />
        <Route exact path="/game" component={Game} />
      </Switch>
    </Router>
  );
}

export default App;
