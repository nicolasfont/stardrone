import React from "react";
import Body from "./Body";
import Div from "./Div";
import HomeLink from "./HomeLink";

export default () => (
  <Body title="Stardrone">
    <Div centered flex={1}>
      <Div style={{ fontFamily: "Impact", fontSize: 48, fontStyle: "italic" }}>
        <HomeLink />
        STARDRONE
      </Div>
    </Div>
  </Body>
);
