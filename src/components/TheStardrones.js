import React from "react";
import Div from "./Div";
import HomeLink from "./HomeLink";
import Music from "./Music";
import image from "../images/TheStardrones.jpg";
import { Link as BaseLink } from "react-router-dom";

const Link = ({ children, ...props }) => (
  <BaseLink
    style={{
      color: "black",
      fontFamily: "Amsterdam",
      textDecoration: "none",
      fontSize: "12px",
      padding: 0,
      margin: 0
    }}
    {...props}
  >
    {children}
  </BaseLink>
);

const size = 250;

export default () => (
  <Div centered flex={1}>
    <Div border centered style={{ padding: 0, margin: 0, width: 500, height: 500 }}>
      <Div centered flex={1}>
      </Div>
      <Div centered flex={1}>
        <img src={image} width={size} height={size} />
      </Div>
      <Div centered flex={1} style={{ padding: 0, margin: 0 }}>
        <Link to="/">The Stardrones</Link>
        <Link to="/">Les Trous Noirs N'Existent Pas</Link>
      </Div>
    </Div>
  </Div>
);
