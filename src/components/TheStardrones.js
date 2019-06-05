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
    <Div centered>
      <img src={image} width={250} />
    </Div>
    <Div>
      <Link to="/">The Stardrones</Div></Link>
      <Link to="/"><Div>Les Trous Noirs N'Existent Pas</Div></Link>
    </Div>
    <Div>
    </Div>
  </Div>
);
