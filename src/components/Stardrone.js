import React from "react";
import Div from "./Div";
import { Link } from "react-router-dom";

export default () => (
  <Div centered flex={1}>
    <Div><Link to="space">Space</Link></Div>
    <Div><Link to="space">Space2</Link></Div>
  </Div>
);
