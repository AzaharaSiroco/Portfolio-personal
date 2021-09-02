import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./Header";
import HeroMain from "./HeroMain";
import Footer from "./Footer";
import "../stylesheets/App.scss";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Work from "./Work";
import Photography from "./Photography";
import Programming from "./Programming";
import Design from "./Design";

import aboutme from "../data/aboutme.json";
import designdata from "../data/designdata.json";
import programmingdata from "../data/programmingdata.json";
import photographydata from "../data/photographydata.json";

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
            <Route path="/Photography">
              <Photography />
            </Route>
            <Route path="/Programming">
              <Programming />
            </Route>
            <Route path="/Design">
              <Design />
            </Route>
          </Switch>
          <Footer />
        </div>
      </>
    </Router>
  );
}

export default App;
