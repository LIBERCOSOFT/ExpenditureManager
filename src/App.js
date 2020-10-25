import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Manager from "./Component/Manager/Manager";
import LandingPage from "./views/LandingPage/LandingPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact={true} path="/" component={LandingPage} />
          <Route path="/manager" component={Manager} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
