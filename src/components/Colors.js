import React from "react";
import Div from "./Div";
import { Motion, spring } from 'react-motion';

export default () =>
  <Div row>
      <Motion defaultStyle={{ x: 0 }} style={{ x: spring(30) }}>
        {({ x }) =>
          <Div style={{ backgroundColor: "red", height: x, width: x }}></Div>
        }
      </Motion>
    <Div style={{ backgroundColor: "red", height: 20, width: 20 }}></Div>
    <Div style={{ backgroundColor: "purple" }}></Div>
    <Div style={{ backgroundColor: "blue" }}></Div>
    <Div style={{ backgroundColor: "lightblue" }}></Div>
    <Div style={{ backgroundColor: "green" }}></Div>
    <Div style={{ backgroundColor: "yellow" }}></Div>
  </Div>;
