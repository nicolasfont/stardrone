import React from "react";
import Div from "./Div";
import HomeLink from "./HomeLink";
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
  <Div flex={1}>
    <Div row>
      <HomeLink />
    </Div>
    <Div centered flex={1}>
      <Div centered>
        <Link to="/">Something Like A Spaceship</Link>
        <Link to="/">The Tremucula Dance</Link>
        <Link to="/">Les Trous Noirs N'Existent Pas</Link>
        <Link to="music">Music</Link>
        <Link to="colors">Colors</Link>
        <Link to="space">Space</Link>
      </Div>
    </Div>
  </Div>
);
