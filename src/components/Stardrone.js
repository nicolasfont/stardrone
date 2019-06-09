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
        fontSize: "16px",
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
    <Div flex={1}>
      <HomeLink />
      <Div centered flex={1}>
        <Div centered>
          <Link small={small} to="/thestardrones">Something Like A Spaceship</Link>
          <Link small={small} to="/thestardrones">The Tremecula Dance</Link>
          <Link small={small} to="/thestardrones">The Gazing Hour</Link>
          <Link small={small} to="/thestardrones">Here To Fuck Shit Up</Link>
          <Link small={small} to="/thestardrones">Les Trous Noirs N'Existent Pas</Link>
        </Div>
      </Div>
    </Div>
  </Body>
);
