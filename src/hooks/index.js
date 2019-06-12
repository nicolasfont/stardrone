import { useState } from "react";

export const useToggle = initialState => {
  const [toggle, setToggle] = useState(initialState);
  return [toggle, () => setToggle(!toggle)];
};

export const useRotation = initialStates => {
  const [index, setIndex] = useState(0);
  return [initialStates && initialStates[index % initialStates.length], () => setIndex(index + 1)];
};

