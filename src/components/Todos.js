import hash from "object-hash";
import { map, reverse } from "ramda";
import React, { useCallback, useState } from "react";
import Div from "./Div";
import Text from "./Text";

export default () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const onKeyDown = useCallback(e => {
    if (e.key === "Enter") {
      const last = todos[todos.length - 1];
      setTodos([...todos, { text: input, prev: hash(last) }]);
      setInput("");
      console.log({ todos });
    }
  });
  return (
    <Div alignItems="center" flex={1} justifyContent="center">
      <Text>Todos</Text>
      <input
        type="text"
        onChange={e => setInput(e.target.value)}
        onKeyDown={onKeyDown}
        value={input}
      />
      {map(todo => (
        <Div key={hash(todo)}>{todo.text}</Div>
      ), reverse(todos))}
    </Div>
  );
};
