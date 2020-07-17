import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import NotFound from "./screens/NotFound";
import About from "./screens/About";
import Stats from "./screens/Stats";
import Main from "./screens/Main";
import Search from "./screens/Search";
import Package from "./screens/Package";
import withTracker from "./withTracker";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div id="main">
        <Switch>
          <Route exact path="/" component={withTracker(Main)} />
          <Route exact path="/stats" component={withTracker(Stats)} />
          <Route exact path="/about" component={withTracker(About)} />
          <Route exact path="/search" component={withTracker(Search)} />
          <Route
            path="/package/:packagename"
            component={withTracker(Package)}
          />
          <Route component={withTracker(NotFound)} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
