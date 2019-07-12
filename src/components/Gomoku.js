import hash from "hash-index";
import React from "react";
import HomeLink from "./HomeLink";
import Div from "./Div";

const Cell = ({ value }) => <button>{value}</button>;

const Board = ({ values }) => (
  <Div centered flex={1}>
    {values.map(row => (
      <Div centered flex={1} key={row.map(val => hash(val))} row>
        {row.map(value => (
          <Div centered flex={1} key={hash(value)}>
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
    <Board values={[[0, 1], [2, 3]]} />
  </Div>
);
