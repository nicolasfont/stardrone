import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Stardrone from "./components/Stardrone";
import Space from "./components/Space";
import Div from './components/Div';

const Div2 = ({ children, row }) => (
  <div
    style={{
      display: "flex",
      flexDirection: row ? "row" : "column",
      margin: 4,
      padding: 4
    }}
  >
    {children}
  </div>
);

render(
  <Router>
    <Div>
      <Div row>
        <Link to="space">Space</Link>
      </Div>
      <Div>
        <Route path="/" exact component={Stardrone} />
        <Route path="/space" exact component={Space} />
      </Div>
    </Div>
  </Router>,
  document.getElementById("app")
);
