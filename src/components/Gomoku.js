import React from "react";
import HomeLink from "./HomeLink";
import Div from "./Div";

const Cell = () => <button />;

const Board = () => <Cell />;

export default () => (
  <Div centered flex={1}>
    <HomeLink />
    <Board />
  </Div>
);
