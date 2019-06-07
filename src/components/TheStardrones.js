import React from "react";
import Div from "./Div";
import HomeLink from "./HomeLink";
import Music from "./Music";
import image from "../images/TheStardrones.jpg";
import soundtrack from "../sounds/The Stardrones - The Tremecula Dance.mp3";
import { Link as BaseLink } from "react-router-dom";

const Link = ({ children, small, ...props }) => (
  <BaseLink
    style={{
      color: "black",
      fontFamily: "Amsterdam",
      textDecoration: "none",
      fontSize: small ? "12px" : "16px",
      padding: 0,
      margin: 0
    }}
    {...props}
  >
    {children}
  </BaseLink>
);

const size = 300;

export default () => (
  <Div centered flex={1}>
    <Div centered>
      <Div centered flex={1}>
        <img src={image} width={size} height={size} />
      </Div>
      <Div centered style={{ padding: 28 }}>
        <Link to="/">The Stardrones</Link>
      </Div>
      <audio autoplay controls loop src={soundtrack}/>
    </Div>
  </Div>
);
