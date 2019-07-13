import hash from "object-hash";
import React, { useCallback, useState } from "react";
import Div from "./Div";
import Text from "./Text";

export default () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const onKeyDown = useCallback(e => {
    if (e.key === "Enter") {
      setTodos([...todos, { text: input, prev: todos[todos.length - 1] }]);
      setInput("");
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
      {todos.reverse().map(todo => (
        <Div key={hash(todo)}>{todo.text}</Div>
      ))}
    </Div>
  );
};
