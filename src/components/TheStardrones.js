import React from "react";
import Div from "./Div";
import HomeLink from "./components";
import { Link as BaseLink } from "react-router-dom";

const Link = ({ children, ...props }) => (
  <Div>
    <BaseLink
      style={{
        color: "black",
        fontFamily: "Amsterdam",
        textDecoration: "none"
      }}
      {...props}
    >
      {children}
    </BaseLink>
  </Div>
);

export default () => (
  <Div centered flex={1}>
    <Link to="/">The Stardrones</Link>
  </Div>
);
