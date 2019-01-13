import React, { useReducer } from 'react';

const useReducerCount = () => {
  const [count, dispatch] = useReducer((adad, action) => {
    switch (action) {
      case 'add':
        return adad + 1;
      case '-':
        return adad - 1;
      default:
        return adad;
    }
  }, 0);
  return (
    <div>
      {count}
      <button type="button" onClick={() => dispatch('add')}>
        Increment
      </button>
      <button type="button" onClick={() => dispatch('-')}>
        Decrement
      </button>
    </div>
  );
};

export default useReducerCount;
