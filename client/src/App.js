import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
