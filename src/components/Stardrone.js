import React from "react";
import Div from "./Div";
import { Link } from "react-router-dom";

export default () => (
  <Div>
    <Div>
      <Link style={{ textDecoration: "none" }} to="space">Space</Link>
    </Div>
    <Div>
      <Link to="colors">Colors</Link>
    </Div>
  </Div>
);
