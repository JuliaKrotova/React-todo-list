import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Header from "../Header/header";

import Home from "../../pages/home";

const App = () => {
  const [listState, setListState] = useState("show");
  return (
    <Provider store={store}>
      <Router>
        <Header listState={listState} setListState={setListState} />
        <Switch>
          <Route path="/">
            <Home listState={listState} setListState={setListState} />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
