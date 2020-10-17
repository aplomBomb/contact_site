import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, About, Four0Four } from "./views";
import "./App.css";

function App() {
  let routes = (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route>
        <Four0Four />
      </Route>
    </Switch>
  );
  return <div className="App"><Router>{routes}</Router></div>;
}

export default App;
