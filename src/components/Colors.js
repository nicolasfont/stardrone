import React from "react";
import Div from "./Div";
import { Motion, spring } from 'react-motion';

export default () =>
  <Div row>
      <Motion defaultStyle={{ width: 0 }} style={{ width: spring(30) }}>
        {({ width }) =>
          <>
            <Div style={{ backgroundColor: "red", height: x, width: width }}></Div>
            <Div style={{ backgroundColor: "purple" }}></Div>
            <Div style={{ backgroundColor: "blue" }}></Div>
            <Div style={{ backgroundColor: "lightblue" }}></Div>
            <Div style={{ backgroundColor: "green" }}></Div>
            <Div style={{ backgroundColor: "yellow" }}></Div>
          </>
        }
      </Motion>
  </Div>;
