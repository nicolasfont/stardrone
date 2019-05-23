import React from "react";
import Div from "./Div";
import { Link as BaseLink } from "react-router-dom";

const Link = ({ children, ...props }) => (
  <Div>
    <BaseLink style={{ color: "black", fontFamily: "Amsterdam", textDecoration: "none" }} {...props}>
      {children}
    </BaseLink>
  </Div>
);

export default () => (
  <Div row>
    <Link to="music">Music</Link>
    <Link to="colors">Colors</Link>
    <Link to="space">Space</Link>
  </Div>
);
