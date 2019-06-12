import React from "react";
import Body from "./Body";
import Div from "./Div";
import Text from "./Text";
import HomeLink from "./HomeLink";

export default () => (
  <Body title="Stardrone">
    <Div centered flex={1}>
      <HomeLink />
      <Div style={{ fontFamily: "Impact", fontSize: 48, fontStyle: "italic" }}>
        STARDRONE.ONLINE
      </Div>
      <Div>
        <Text>
          Music, film, visual, and code by Nicolás Font except where noted
        </Text>
      </Div>
    </Div>
  </Body>
);
