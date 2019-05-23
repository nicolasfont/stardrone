import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Stardrone from "./components/Stardrone";
import Space from "./components/Space";
import Div from './components/Div';

render(
  <Router>

      <Div row>
        <Div><Link to="/">/</Link></Div>
        <Div><Link to="space">Space</Link></Div>
      </Div>
      <Div>
        <Route path="/" exact component={Stardrone} />
        <Route path="/space" exact component={Space} />
      </Div>

  </Router>,
  document.getElementById("app")
);
