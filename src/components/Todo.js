import React, { useState } from "react";
import Div from "./Div";
import Text from "./Text";

export default () => {
  const [todos, setTodos] = useState(["banans", "pords"]);
  const [input, setInput] = useState("");
  return (
    <Div alignItems="center" flex={1} justifyContent="center">
      <Text>Todos</Text>
      <input type="text" onChange={e => setInput(e.target.value)} onKeyDown={e => console.log(e.key)} value={input}/>
      {todos.map(todo => <Div key={todo}>{todo}</Div>)}
    </Div>
  );
};
