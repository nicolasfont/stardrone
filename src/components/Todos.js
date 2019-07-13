import hash from "object-hash";
import { map, reverse } from "ramda";
import React, { useCallback, useEffect, useState } from "react";
import Div from "./Div";
import Text from "./Text";

const Todos = ({ head, todos }) => {
  const todo = todos[head];
  return todo && <><Div key={hash(todo)}>{todo.text}</Div><Todos head={todo.prev} todos={todos} /></>;
};

export default () => {
  const [todos, setTodos] = useState([]);
  const [todosMap, setTodosMap] = useState({});
  const [head, setHead] = useState();
  const [input, setInput] = useState("");
  const onKeyDown = useCallback(e => {
    if (e.key === "Enter") {
      const last = todos[todos.length - 1];
      const todo = { text: input, prev: last && hash(last) };
      setTodos([...todos, todo]);
      setTodosMap({ ...todosMap, [hash(todo)]: todo });
      setHead(hash(todo));
      setInput("");
    }
  });
  useEffect(() => {
    console.log({ todos });
    console.log({ todosMap });
  }, [todos]);
  return (
    <Div alignItems="center" flex={1} justifyContent="center">
      <Text>Todos</Text>
      <input
        type="text"
        onChange={e => setInput(e.target.value)}
        onKeyDown={onKeyDown}
        value={input}
      />
      {map(
        todo => (
          <Div key={hash(todo)}>{todo.text}</Div>
        ),
        reverse(todos)
      )}
    </Div>
  );
};
