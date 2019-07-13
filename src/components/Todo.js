import React, { useState } from "react";
import Div from "./Div";
import Text from "./Text";

export default () => {
  const [todos, setTodos] = useState(["banans", "pords"]);
  return (
    <Div alignItems="center" flex={1} justifyContent="center">
      <Text>Todos</Text>
      <input type="text" onKeyDown={e => console.log(e.key)}/>
      {todos.map(todo => <Div key={todo}>{todo}</Div>)}
    </Div>
  );
};
