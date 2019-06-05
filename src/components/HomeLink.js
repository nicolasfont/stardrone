import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Body from "./components/Body";
import Colors from "./components/Colors";
import Div from "./components/Div";
import Music from "./components/Music";
import Space from "./components/Space";
import Stardrone from "./components/Stardrone";
import TheStardrones from "./components/TheStardrones";
import image from "./images/12524041_10153845708099354_6990004252861025374_n.jpg";
import "./fonts/billy-argel_amsterdam/Amsterdam Personal Use.ttf";

export default () =>
        <Div style={{ position: "absolute" }}>
          <Link to="/">
            <img
              src={image}
              width={40}
              height={40}
              style={{ borderRadius: "50%" }}
            />
          </Link>
        </Div>
 

render(
  <Router>
    <Body margin={0}>
      <Div flex={1}>
    </Div>
    </Body>
  </Router>,
  document.getElementById("app")
);
