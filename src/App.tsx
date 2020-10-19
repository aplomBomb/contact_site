import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Intro, About, Four0Four } from "./views";
import "./App.css";

export const App = () => {
  const pageVariants = {
    initial: {
      x: 2000,
    },
    in: {
      x: 0,
    },
    out: {
      x: -2000,
    },
  };
  let routes = (
    <AnimatePresence>
      <Switch>
        <Route exact path="/">
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
          >
            <Intro />
          </motion.div>
        </Route>
        <Route path="/about">
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
          >
            <About />
          </motion.div>
        </Route>
        <Route>
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
          >
            <Four0Four />
          </motion.div>
        </Route>
      </Switch>
    </AnimatePresence>
  );
  return (
    <div className="App">
      <Router>{routes}</Router>
    </div>
  );
};
