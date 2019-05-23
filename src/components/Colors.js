import React from "react";
import Div from "./Div";
import { Motion, spring } from 'react-motion';

export default () =>
  <Div row>
      <Motion defaultStyle={{ x: 0 }} style={{ x: spring(10) }}>{value => <span>{value.x}</span>}</Motion>
    <Div style={{ backgroundColor: "red", width: 10 }}></Div>
    <Div style={{ backgroundColor: "purple" }}></Div>
    <Div style={{ backgroundColor: "blue" }}></Div>
    <Div style={{ backgroundColor: "lightblue" }}></Div>
    <Div style={{ backgroundColor: "green" }}></Div>
    <Div style={{ backgroundColor: "yellow" }}></Div>
  </Div>;
