import React, { useEffect, useRef, useState } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Body from "./Body";
import Colors from "./Colors";
import Div from "./Div";
import Music from "./Music";
import Space from "./Space";
import Stardrone from "./Stardrone";
import TheStardrones from "./TheStardrones";
import NicolasFont from "./NicolasFont";
import image from "../images/12524041_10153845708099354_6990004252861025374_n.jpg";
import "../fonts/billy-argel_amsterdam/Amsterdam Personal Use.ttf";
import "../fonts/Black Diamonds Personal Use.ttf";
import soundtrack from "../sounds/The Stardrones - The Tremecula Dance.mp3";
import { Howl, Howler } from "howler";

const sound = new Howl({
  buffer: false,
  loop: true,
  src: [soundtrack]
});

export default () => {
  const [playing, play] = useState(false);
  useEffect(() => {
    if (playing) {
      sound.play();
    } else {
      sound.pause();
    }
  }, [playing]);
  return (
    <Router>
      <Body margin={0}>
        <Div flex={1}>
          <Div flex={1}>
            <Route path="/" exact component={Stardrone} />
            <Route path="/space" exact component={Space} />
            <Route path="/colors" exact component={Colors} />
            <Route path="/music" exact component={Music} />
            <Route path="/nicolasfont" exact component={NicolasFont} />
            <Route
              path="/thestardrones"
              exact
              component={() => <TheStardrones playing={playing} play={play} />}
            />
          </Div>
        </Div>
      </Body>
    </Router>
  );
};
