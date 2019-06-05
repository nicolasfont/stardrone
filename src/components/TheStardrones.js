import React from "react";
import Div from "./Div";
import HomeLink from "./HomeLink";
import image from "../images/TheStardrones.jpg";
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
    <Div>
      <Link to="/">Solvang & Volturiak</Link>
    </Div>
    <Div>
      <img src={image} width={250} />
    </Div>
    <Div>
      <Link to="/">The Stardrones</Link>
    </Div>
  </Div>
);
