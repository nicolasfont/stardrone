import hash from "object-hash";
import { map, reverse } from "ramda";
import React, { useCallback, useEffect, useState } from "react";
import Div from "./Div";
import Text from "./Text";

export default () => {
  const [todos, setTodos] = useState({});
  const [head, setHead] = useState();
  const [input, setInput] = useState("");
  const onKeyDown = useCallback(e => {
    if (e.key === "Enter") {
      const todo = { text: input, prev: head };
      const todoHash = hash(todo);
      setTodos({ ...todos, [todoHash]: todo });
      setHead(todoHash);
      setInput("");
    }
  });
  useEffect(() => {
    console.log({ todos });
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
      <Todos head={head} todos={todos} />
    </Div>
  );
};

const Todos = ({ head, todos }) => {
  const todo = todos[head];
  return todo ? (
    <>
      <Div key={hash(todo)}>{todo.text}</Div>
      <Todos head={todo.prev} todos={todos} />
    </>
  ) : null;
};
