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
import NicolasFont from "./components/NicolasFont";
import image from "./images/12524041_10153845708099354_6990004252861025374_n.jpg";
import "./fonts/billy-argel_amsterdam/Amsterdam Personal Use.ttf";
import "./fonts/Black Diamonds Personal Use.ttf";
import soundtrack from "../sounds/The Stardrones - The Tremecula Dance.mp3";

render(
  <Router>
    <Body margin={0}>
      <Div flex={1}>
        <Div flex={1}>
          <Route path="/" exact component={Stardrone} />
          <Route path="/space" exact component={Space} />
          <Route path="/colors" exact component={Colors} />
          <Route path="/music" exact component={Music} />
          <Route path="/nicolasfont" exact component={NicolasFont} />
          <Route path="/thestardrones" exact component={TheStardrones} />
        </Div>
      </Div>
    </Body>
  </Router>,
  document.getElementById("app")
);
