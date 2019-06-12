import React, { useEffect, useRef, useState } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Body from "./Body";
import Colors from "./Colors";
import Div from "./Div";
import Music from "./Music";
import See from "./See";
import Space from "./Space";
import Stardrone from "./Stardrone";
import TheStardrones from "./TheStardrones";
import NicolasFont from "./NicolasFont";
import image from "../images/12524041_10153845708099354_6990004252861025374_n.jpg";
import "../fonts/billy-argel_amsterdam/Amsterdam Personal Use.ttf";

const context = new AudioContext();
const source = context.createBufferSource();
source.connect(context.destination);

const request = new XMLHttpRequest();

// request.open("GET", soundtrack, true);

request.responseType = "arraybuffer";

request.onload = () => {
  context.decodeAudioData(
    request.response,
    response => {
      source.buffer = response;
      source.start(0);
      source.loop = true;
    },
    e => console.error(e)
  );
};

// request.send();

export default ({ children }) => {
  const [playing, play] = useState(false);
  useEffect(() => {
    if (playing) {
      //myAudio.play();
    } else {
      //myAudio.pause();
    }
  }, [playing]);
  return (
    children
  );
};
