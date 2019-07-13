import { map, range } from "ramda";
import React, { useCallback, useState } from "react";
import { useRotation } from "../hooks";
import HomeLink from "./HomeLink";
import Div from "./Div";

export default () => {
  return (
    <Div flex={1} row>
      <HomeLink to="/" />
      <Board />
    </Div>
  );
};

const Board = () => {
  const [values, setValues] = useState(emptyMatrix(19));
  const [turn, nextTurn] = useRotation(["X", "O"]);
  const onClick = i => useCallback(() => {
    console.log(i);
  });
  return (
    <Div flex={1}>
      {values.map((row, i) => (
        <Div flex={1} key={i} margin={0} padding={0} row>
          {row.map((value, j) => (
            <Div
              justifyContent="center"
              flex={1}
              key={i + "" + j}
              margin={0}
              padding={0}
            >
              <Cell value={value} onClick={onClick(i + " " + j)} />
            </Div>
          ))}
        </Div>
      ))}
    </Div>
  );
};

const Cell = ({ onClick, value }) => (
  <button
    onClick={onClick}
    style={{
      cursor: "pointer",
      display: "flex",
      flex: 1,
      justifyContent: "center",
      margin: 0,
      padding: 0
    }}
  >
    {value}
  </button>
);

const emptyMatrix = size =>
  map(() => map(() => " ", range(0, size)), range(0, size));

