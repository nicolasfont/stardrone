import React from "react";
import Div from "./Div";
import { Link as BaseLink } from "react-router-dom";

const Link = ({ children, ...props }) => (
  <BaseLink style={{ color: "black", fontFamily: "Amsterdam", textDecoration: "none" }} {...props}>
    {children}
  </BaseLink>
);

export default () => (
  <Div row>
    <Div>
      <Link to="music">Music</Link>
    </Div>
    <Div>
      <Link to="colors">Colors</Link>
    </Div>
    <Div>
      <Link to="space">Space</Link>
    </Div>
  </Div>
);
