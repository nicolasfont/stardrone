import React, { useState } from "react";
import Div from "./Div";
import Text from "./Text";

export default () => {
  const [todos, setTodos] = useState([]);
  return (
    <Div alignItems="center" flex={1} justifyContent="center">
      <Text>Todos</Text>
      {todos.map(todo => <Div>{todo}</Div>)}
    </Div>
  );
};
