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
    <Div centered row flex={1}>
      <Link to="/">Something like a spaceship</Link>
    </Div>
    <Div centered row flex={1}>
      <Link to="music">Music</Link>
      <Link to="colors">Colors</Link>
      <Link to="space">Space</Link>
    </Div>
    <Div centered flex={1}>
      <Div centered>
        <Link to="/">Something like a spaceship</Link>
        <Link to="space">Les Trous Noirs N'Existent Pas</Link>
        <Link to="thestardrones">The Stardrones</Link>
        <Link to="music">Music</Link>
      <Link to="colors">Colors</Link>
      <Link to="space">Space</Link>
      </Div>
    </Div>
  </Div>
);
