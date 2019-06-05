import React from "react";
import Div from "./Div";
import HomeLink from "./HomeLink";
import Music from "./Music";
import image from "../images/TheStardrones.jpg";
import { Link as BaseLink } from "react-router-dom";

const Link = ({ children, ...props }) => (
  <Div>
    <BaseLink
      style={{
        color: "black",
        fontFamily: "Amsterdam",
        textDecoration: "none",
        fontSize: "16px",
        fontWeight: "bold"
      }}
      {...props}
    >
      {children}
    </BaseLink>
  </Div>
);

export default () => (
  <Div centered flex={1}>
    <Div centered>
      <img src={image} width={250} />
    </Div>
    <Div>
      <Link to="/">The Stardrones</Link>
      <Link to="/">Les Trous Noirs N'Existent Pas</Link>
    </Div>
    <Div>
    </Div>
  </Div>
);
