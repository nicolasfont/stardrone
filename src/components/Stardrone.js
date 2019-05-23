import React from "react";
import { Link } from "react-router-dom";

const Div = ({ children }) =>
  <div style={{
    display: "flex",
    flexDirection: "row",
    margin: 4,
    padding: 4,
  }}>{children}</div>;

export default () => (
  <Div>
    <Div>Stardrone</Div>
    <Div><Link to="space">Space</Link></Div>
  </Div>
);
