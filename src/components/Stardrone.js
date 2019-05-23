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
    <Div flex={1}>
      <Link to="space">Space</Link>
    </Div>
    <Div flex={1}>
      <Link to="colors">Colors</Link>
    </Div>
  </Div>
);
