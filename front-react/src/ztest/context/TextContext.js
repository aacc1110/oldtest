import React, { useState } from 'react';
import Test from '../hooks/Test';
import ShowNumberOfEvents from '../hooks/ShowNumberOfEvents';

export const ThemeContext = React.createContext();

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ThemeContext.Provider value={count}>
        <ShowNumberOfEvents />
        <Test />
        <button type="button" onClick={() => setCount(count + 1)}>
          +1
        </button>
      </ThemeContext.Provider>
    </div>
  );
}

export default Example;
