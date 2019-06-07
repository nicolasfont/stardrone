import React from "react";
import Body from "./Body";
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
  <Body title="Stardrone">
  <Div flex={1}>
    <HomeLink />
    <Div centered flex={1}>
      <Div centered>
        <Link to="/thestardrones">The Stardrones</Link>
        <Link to="/thestardrones">The Gazing Hour</Link>
        <Link to="/thestardrones">Something Like A Spaceship</Link>
        <Link to="/thestardrones">The Tremecula Dance</Link>
        <Link to="/thestardrones">Les Trous Noirs N'Existent Pas</Link>
        <Div row>
          <Link to="music">Music</Link>
          <Link to="colors">Colors</Link>
          <Link to="space">Space</Link>
        </Div>
      </Div>
    </Div>
  </Div>
</Body>
);
