import React, { useState } from "react";
import Div from "./Div";

export default () => {
  const [todos, setTodos] = useState([]);
  return (
    <Div flex={1} justifyContent="center">
      Todo
    </Div>
  );
};
