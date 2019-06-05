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
  <Div flex={1}>
    <Div centered>
      <img src={image} width={200} style={{ borderRadius: "50%" }} />
    </Div>
  </Div>
);
