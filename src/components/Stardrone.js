import React from "react";
import Body from "./Body";
import Div from "./Div";
import HomeLink from "./HomeLink";
import { Link as BaseLink } from "react-router-dom";

const Link = ({ children, small, ...props }) => (
  <Div>
    <BaseLink
      style={{
        color: "black",
        fontFamily: "Amsterdam",
        fontSize: small ? "12px" : "16px",
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
          <Link small to="/thestardrones">The Stardrones</Link>
          <Link small to="/thestardrones">The Gazing Hour</Link>
          <Link small to="/thestardrones">Something Like A Spaceship</Link>
          <Link small to="/thestardrones">The Tremecula Dance</Link>
          <Link small to="/thestardrones">Les Trous Noirs N'Existent Pas</Link>
          <Div row>
            <Link small to="music">Music</Link>
            <Link small to="colors">Colors</Link>
            <Link small to="space">Space</Link>
          </Div>
        </Div>
      </Div>
    </Div>
  </Body>
);
