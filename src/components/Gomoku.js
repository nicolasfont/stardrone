import * as R from "ramda";
import React, { useState } from "react";
import HomeLink from "./HomeLink";
import Div from "./Div";

const Cell = ({ value }) => (
  <button
    style={{
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

const Board = ({ values }) => (
  <Div flex={1}>
    {values.map((row, i) => (
      <Div flex={1} key={i} margin={0} padding={0} row>
        {row.map((value, j) => (
          <Div justifyContent="center" flex={1} key={i + "" + j}>
            <Cell value={value} />
          </Div>
        ))}
      </Div>
    ))}
  </Div>
);

const initialValues = size =>
  R.range(0, size).map(() => R.range(0, size).map(() => " "));

export default () => {
  const [values, setValues] = useState(initialValues(19));
  return (
    <Div flex={1} row>
      <HomeLink />
      <Board values={values} />
    </Div>
  );
};
