import React from "react";
import { Link } from "react-router-dom";

const Div = ({ children }) =>
  <div style={{
    padding: 4,
    margin: 4
  }}>{children}</div>;

export default () => (
  <Div row>
    <Div>Stardrone</Div>
    <Div><Link to="space">Space</Link></Div>
  </Div>
);
