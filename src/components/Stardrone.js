import React from "react";
import Div from "./Div";
import { Link } from "react-router-dom";

export default () => (
  <Div flex={1}>
    <Div><Link to="space">Space</Link></Div>
    <Div><Link to="colors">Colors</Link></Div>
  </Div>
);
