import hash from "hash-index";
import React from "react";
import HomeLink from "./HomeLink";
import Div from "./Div";

const Cell = ({ value }) => <button>{value}</button>;

const Board = ({ values }) => (
  <Div centered flex={1}>
    {values.map((row, i) => (
      <Div centered flex={1} key={i} row>
        {row.map((value, j) => (
          <Div centered flex={1} key={i + j}>
            <Cell value={value} />
          </Div>
        ))}
      </Div>
    ))}
  </Div>
);
export default () => (
  <Div centered flex={1} row>
    <HomeLink />
    <Board values={[[" ", " "], [" ", " "]]} />
  </Div>
);
