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
        fontSize: small ? "10px" : "16px",
        textDecoration: "none"
      }}
      {...props}
    >
      {children}
    </BaseLink>
  </Div>
);

export default ({ small }) => (
  <Body title="Stardrone">
    <Div centered flex={1}>
      <HomeLink />
      <Link small={small} to="/thestardrones">
        Something Like A Spaceship
      </Link>
      <Link small={small} to="/thestardrones">
        The Tremecula Dance
      </Link>
      <Link small={small} to="/thestardrones">
        The Gazing Hour
      </Link>
      <Link small={small} to="/thestardrones">
        Here To Fuck Shit Up
      </Link>
      <Link small={small} to="/thestardrones">
        Les Trous Noirs N'Existent Pas
      </Link>
    </Div>
  </Body>
);
