import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Div from "./Div";
import TheStardrones from "./components/TheStardrones";
import image from "./images/12524041_10153845708099354_6990004252861025374_n.jpg";
import "./fonts/billy-argel_amsterdam/Amsterdam Personal Use.ttf";

export default ({ style }) => (
  <Div style={{ position: "absolute", ...style }}>
    <Link to="/">
      <img src={image} width={40} height={40} style={{ borderRadius: "50%" }} />
    </Link>
  </Div>
);
