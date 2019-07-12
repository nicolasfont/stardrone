import React from "react";
import ReactBoard from "react-board";
import HomeLink from "./HomeLink";
import Div from "./Div";

export default () => (
  <Div centered flex={1}>
    <HomeLink />
    <ReactBoard size={2} values={[[0, 1], [2, 3]]} />
  </Div>
);
