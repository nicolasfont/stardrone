import hash from "object-hash";
import { map, reverse } from "ramda";
import React, { useCallback, useEffect, useState } from "react";
import Div from "./Div";
import Text from "./Text";

const Todos = ({ head, todos }) => {
  const todo = todos[head];
  return (
    todo ? (
      <>
        <Div key={hash(todo)}>{todo.text}</Div>
        <Todos head={todo.prev} todos={todos} />
      </>
    ) : null
  );
};

export default () => {
  const [todos, setTodos] = useState([]);
  const [todosMap, setTodosMap] = useState({});
  const [head, setHead] = useState();
  const [input, setInput] = useState("");
  const onKeyDown = useCallback(e => {
    if (e.key === "Enter") {
      const todo = { text: input, prev: head };
      setTodosMap({ ...todosMap, [hash(todo)]: todo });
      setHead(hash(todo));
      setInput("");
    }
  });
  useEffect(() => {
    console.log({ todosMap });
  }, [todosMap]);
  return (
    <Div alignItems="center" flex={1} justifyContent="center">
      <Text>Todos</Text>
      <input
        type="text"
        onChange={e => setInput(e.target.value)}
        onKeyDown={onKeyDown}
        value={input}
      />
      <Todos head={head} todos={todosMap} />
    </Div>
  );
};
