import React, { useEffect, useRef, useState } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Body from "./Body";
import Colors from "./Colors";
import Div from "./Div";
import Gomoku from "./Gomoku";
import Music from "./Music";
import NicolasFont from "./NicolasFont";
import See from "./See";
import Space from "./Space";
import Stardrone from "./Stardrone";
import Tests from "./Tests";
import TheStardrones from "./TheStardrones";
import Todos from "./Todos";
import Tv from "./Tv";
import What from "./What";

import "../fonts/billy-argel_amsterdam/Amsterdam Personal Use.ttf";
import "../fonts/impact/impact.ttf";

export default () => {
  return (
    <Router>
      <Body margin={0}>
        <Div flex={1}>
          <Switch>
            <Route path="/" exact component={Stardrone} />
            <Route path="/colors" exact component={Colors} />
            <Route path="/gomoku" exact component={Gomoku} />
            <Route path="/music" exact component={Music} />
            <Route path="/nicolasfont" exact component={NicolasFont} />
            <Route path="/see" exact component={See} />
            <Route path="/space" exact component={Space} />
            <Route path="/tests" exact component={Tests} />
            <Route path="/thestardrones" exact component={TheStardrones} />
            <Route path="/todos" exact component={Todos} />
            <Route path="/tv" exact component={Tv} />
            <Route component={What} />
          </Switch>
        </Div>
      </Body>
    </Router>
  );
};
