import React from "react";
import Div from "./Div";
import { Motion, spring } from 'react-motion';

export default () =>
  <Div row>
      <Motion defaultStyle={{ height: 0, width: 0 }} style={{ height: spring(30), width: spring(30) }}>
        {({ height, width }) =>
          <>
            <Div style={{ backgroundColor: "red", height, width }}></Div>
            <Div style={{ backgroundColor: "purple" }}></Div>
            <Div style={{ backgroundColor: "blue" }}></Div>
            <Div style={{ backgroundColor: "lightblue" }}></Div>
            <Div style={{ backgroundColor: "green" }}></Div>
            <Div style={{ backgroundColor: "yellow" }}></Div>
          </>
        }
      </Motion>
  </Div>;
