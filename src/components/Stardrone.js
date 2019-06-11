import React from "react";
import Body from "./Body";
import Div from "./Div";
import HomeLink from "./HomeLink";

export default () => (
  <Body title="Stardrone">
    <Div flex={1}>
      <HomeLink />
      <Div centered style={{ fontFamily: "Impact" }}>
          STARDRONE
      </Div>
    </Div>
  </Body>
);
