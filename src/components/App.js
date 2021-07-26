import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./Header";
import HeroMain from "./HeroMain";
import Footer from "./Footer";
import "../stylesheets/App.scss";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Main from "./Main";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <HeroMain />
        <Switch>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
        <Footer />
      </div>
    </>
  );
}

export default App;
