import React from "react";
import Div from "./Div";
import { Link } from "react-router-dom";

export default () => (
  <Div style={{ marginLeft: 60 }}>
    <Div><Link to="space">Space</Link></Div>
  </Div>
);
