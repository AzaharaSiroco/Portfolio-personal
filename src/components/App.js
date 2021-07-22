import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./Header";
import HeroMain from "./HeroMain";

import "../stylesheets/App.scss";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <HeroMain />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
