import React from "react";
import Div from "./Div";
import HomeLink from "./HomeLink";
import { Motion, spring } from "react-motion";

export default () => (
  <Div centered row flex={1}>
    <HomeLink/>
    <Motion
      defaultStyle={{ height: 0, width: 0 }}
      style={{ height: spring(30), width: spring(30) }}
    >
      {({ height, width }) => (
        <>
          <Div style={{ backgroundColor: "red", height, width }} />
          <Div style={{ backgroundColor: "purple", height, width }} />
          <Div style={{ backgroundColor: "blue", height, width }} />
          <Div style={{ backgroundColor: "lightblue", height, width }} />
          <Div style={{ backgroundColor: "green", height, width }} />
          <Div style={{ backgroundColor: "yellow", height, width }} />
        </>
      )}
    </Motion>
  </Div>
);
