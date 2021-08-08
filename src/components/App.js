import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./Header";
import HeroMain from "./HeroMain";
import Footer from "./Footer";
import "../stylesheets/App.scss";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Main from "./Main";
import Work from "./Work";

function App() {
  return (
    <Router>
      <>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/">
              <HeroMain />
            </Route>
            <Route path="/AboutMe">
              <AboutMe />
            </Route>
            <Route path="/Contact">
              <Contact />
            </Route>
            <Route path="/Work">
              <Work />
            </Route>
          </Switch>
          <Footer />
        </div>
      </>
    </Router>
  );
}

export default App;
