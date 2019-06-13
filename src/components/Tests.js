import React from "react";
import Div from "./Div";
import HomeLink from "./HomeLink";
import Text from "./Text";

export default () => (
  <Div centered flex={1}>
    <HomeLink />
    <Text fontFamily="Impact">No Tests</Text>
  </Div>
);
