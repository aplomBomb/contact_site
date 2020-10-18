import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Intro, About, Four0Four } from "./views";
import "./App.css";

export const App = () => {
  let routes = (
    <Switch>
      <Route exact path="/">
        <Intro />
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

