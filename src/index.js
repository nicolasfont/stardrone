import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from "./components/App";
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

render(<App />, document.getElementById("app"));
