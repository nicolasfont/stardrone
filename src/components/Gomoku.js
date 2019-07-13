import { lensPath, map, range, set } from "ramda";
import React, { useCallback, useState } from "react";
import { useRotation } from "../hooks";
import HomeLink from "./HomeLink";
import Div from "./Div";

export default () => {
  return (
    <Div flex={1} row>
      <Board />
    </Div>
  );
};

const checkWinner = values => {
  return undefined;
};

const Board = () => {
  const [values, setValues] = useState(emptyMatrix(19));
  const [turn, nextTurn] = useRotation(["X", "O"]);
  const [winner, setWinner] = useState();
  const onClick = (i, j) =>
    useCallback(() => {
      setValues(set(lensPath([i, j]), turn, values));
      setWinner(checkWinner(values));
      nextTurn();
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
              <Cell value={value} winner={winner} onClick={winner ? () => {} :  onClick(i, j)} />
            </Div>
          ))}
        </Div>
      ))}
    </Div>
  );
};

const Cell = ({ onClick, value, winner }) => (
  <button
    onClick={onClick}
    style={{
      cursor: "pointer",
      display: "flex",
      flex: 1,
      justifyContent: "center",
      margin: 0,
      padding: 0,
      backgroundColor: value === winner ? "gold" : undefined
    }}
  >
    {value}
  </button>
);

const emptyMatrix = size =>
  map(() => map(() => " ", range(0, size)), range(0, size));
