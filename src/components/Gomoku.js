import { map, range } from "ramda";
import React, { useState } from "react";
import { useRotation } from "../hooks";
import HomeLink from "./HomeLink";
import Div from "./Div";

const Cell = ({ onClick, turn, value }) => (
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

const Board = ({ values }) => {
  const [turn, nextTurn] = useRotation(["X", "O"]);
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
              <Cell value={value} onClick={onClick} />
            </Div>
          ))}
        </Div>
      ))}
    </Div>
  );
};

const emptyMatrix = size =>
  map(() => map(() => " ", range(0, size)), range(0, size));

export default () => {
  const [values, setValues] = useState(emptyMatrix(19));
  return (
    <Div flex={1} row>
      <HomeLink to="/" />
      <Board values={values} />
    </Div>
  );
};
