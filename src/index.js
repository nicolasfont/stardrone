import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Stardrone from "./components/Stardrone";
import Space from "./components/Space";
import Div from './components/Div';
import image from "./images/12524041_10153845708099354_6990004252861025374_n.jpg";

render(
  <Router>
    <Div row style={{position: "absolute"}}>
      <Div><Link to="/"><img src={image} width={40} height={40}/></Link></Div>
    </Div>
    <Div>
      <Route path="/" exact component={Stardrone} />
      <Route path="/space" exact component={Space} />
    </Div>
  </Router>,
  document.getElementById("app")
);
