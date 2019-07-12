import React from "react";
import HomeLink from "./HomeLink";
import Div from "./Div";

const Cell = () => <button />;

const Board = ({ values }) => 
  values.map(row =>
    <Div centered flex={1}>
        {row.map(value =>
    <Div centered flex={1} row>
          <Cell />
    </Div>
            )}
    </Div>
  );

export default () => (
  <Div centered flex={1}>
    <HomeLink />
    <Board values={[[0, 1], [2, 3]]} />
  </Div>
);
