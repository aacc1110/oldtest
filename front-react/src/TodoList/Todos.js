/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useContext } from 'react';
import { TodoContext } from './TodoContext';

export default () => {
  const { todos, dispatch } = useContext(TodoContext);

  return (
    <div>
      {todos.map(({ text, complete }, i) => (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
        <div
          key={text}
          onClick={() => dispatch({ type: 'TOGGLE_COMPLETE', i })}
          style={{
            textDecoration: complete ? 'line-through' : '',
          }}
        >
          {text}
        </div>
      ))}
    </div>
  );
};
