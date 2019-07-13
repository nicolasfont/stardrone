import React from "react";
import { Link } from "react-router-dom";
import Div from "./Div";
import License from "./License";
import HomeLink from "./HomeLink";

export default () => (
  <Div centered flex={1} style={{ fontFamily: "Amsterdam", fontSize: 16 }}>
    <HomeLink />
    <Link
      style={{
        color: "black",
        fontFamily: "Amsterdam",
        textDecoration: "none",
        fontSize: "16px",
        padding: 0,
        margin: 0
      }}
      to="/"
    >
      Who the fuck is Nicolás Font
    </Link>
    <License />
  </Div>
);
