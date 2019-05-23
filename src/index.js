import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Stardrone from "./components/Stardrone";
import Space from "./components/Space";


const Div = ({ children }) =>
  <div style={{
    display: "flex",
    flexDirection: "row",
    margin: 4,
    padding: 4,
  }}>{children}</div>;

render(
      <Router>
  <Div>
    <Div>
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
