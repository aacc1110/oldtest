import React from "react";
import { produce } from "immer";
import TodoView from "./TodoView";
import { TodoContext } from "./TodoContext";

// https://github.com/mweststrate/use-immer/blob/master/index.js
function useImmerReducer(reducer, initialState) {
  return React.useReducer(produce(reducer), initialState);
}

const todosReducer = (todos, action) => {
  switch (action.type) {
    case "ADD_TODO":
      todos.unshift({ text: action.text, complete: false });
      return;
    case "TOGGLE_COMPLETE":
      // eslint-disable-next-line no-param-reassign
      todos[action.i].complete = !todos[action.i].complete;
      return;
    case "RESET":
      // eslint-disable-next-line consistent-return
      return [];
    default:
      // eslint-disable-next-line consistent-return
      return todos;
  }
};

export default () => {
  const [todos, dispatch] = useImmerReducer(todosReducer, []);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      <TodoView />
    </TodoContext.Provider>
  );
};
