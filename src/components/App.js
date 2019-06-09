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

const myAudio = new Audio(soundtrack);
myAudio.ontimeupdate = function(i) {
  if (this.currentTime > this.duration - 0.44) {
    this.currentTime = 0;
    this.play();
  }
};
myAudio.currentTime = 110;
myAudio.play();

export default () => {
  const [playing, play] = useState(false);
  useEffect(() => {
    if (playing) {
      myAudio.play();
    } else {
      //myAudio.pause();
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
