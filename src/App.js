import React from "react";
import './App.css';
import  { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import  {Home} from "./components/Home";
import {Todo} from "./components/Todo";


function App() {
  return (
    <Router>
    <Route exact path="/">
    <Home/>
    </Route>
    <Switch>
      <Route path="/todo">
        <Todo/>
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
