import * as R from "ramda";
import React, { useState } from "react";
import HomeLink from "./HomeLink";
import Div from "./Div";

const Cell = ({ value }) => (
  <button style={{ display: "flex", flex: 1, justifyContent: "center" }}>
    {value}
  </button>
);

const Board = ({ values }) => (
  <Div flex={1}>
    {values.map((row, i) => (
      console.log("i: ", i) ||
      <Div flex={1} key={i} row>
        {row.map((value, j) => (
          console.log("j: ", j) ||
          <Div justifyContent="center" flex={1} key={i + "" + j}>
            <Cell value={value} />
          </Div>
        ))}
      </Div>
    ))}
  </Div>
);

const initialValues = R.range(0, 2).map(() => [R.range(0, 2).map(() => " ")]);

export default () => {
  const [values, setValues] = useState(initialValues);
  return (
    <Div flex={1} row>
      <HomeLink />
      <Board values={values} />
    </Div>
  );
};
