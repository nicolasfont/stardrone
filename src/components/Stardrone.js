import React from "react";
import Body from "./Body";
import Div from "./Div";
import HomeLink from "./HomeLink";
import { Link as BaseLink } from "react-router-dom";

export default () => (
  <Body title="Stardrone">
    <Div flex={1}>
      <HomeLink />
    </Div>
  </Body>
);
