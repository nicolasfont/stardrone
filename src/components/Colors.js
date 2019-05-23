import React from "react";
import Div from "./Div";
import { Motion, spring } from 'react-motion';

export default () =>
  <Div row>
    <Div style={{ backgroundColor: "red" }}></Div>
    <Div style={{ backgroundColor: "purple" }}></Div>
    <Div style={{ backgroundColor: "blue" }}></Div>
    <Div style={{ backgroundColor: "lightblue" }}></Div>
    <Div style={{ backgroundColor: "green" }}></Div>
    <Div style={{ backgroundColor: "yellow" }}></Div>
  </Div>;
