import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Stardrone from "./components/Stardrone";
import Body from "./components/Body";
import Colors from "./components/Colors";
import Div from "./components/Div";
import Space from "./components/Space";
import image from "./images/12524041_10153845708099354_6990004252861025374_n.jpg";
import webfont from 'webfont';

const Fonts = () => {

};

render(
  <Router>
    <Body margin={0}>
      <Div flex={1}>
        <Div style={{ position: "absolute" }}>
          <Link to="/">
            <img src={image} width={40} height={40} />
          </Link>
        </Div>
        <Div centered flex={1}>
          <Route path="/" exact component={Stardrone} />
          <Route path="/space" exact component={Space} />
          <Route path="/colors" exact component={Colors} />
        </Div>
      </Div>
    </Body>
  </Router>,
  document.getElementById("app")
);
