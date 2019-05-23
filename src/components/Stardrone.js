import React from "react";
import Div from "./Div";
import { Link as BaseLink } from "react-router-dom";

const Link = BaseLink;


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
