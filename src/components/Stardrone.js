import React from "react";
import Div from "./Div";
import { Link as BaseLink } from "react-router-dom";

const Link = ({ children, ...props }) => (
  <BaseLink style={{ textDecoration: "none" }} {...props}>
    {children}
  </BaseLink>
);

export default () => (
  <Div centered flex={1}>
    <Div>
      <Link to="space">Space</Link>
    </Div>
    <Div>
      <Link to="colors">Colors</Link>
    </Div>
  </Div>
);
