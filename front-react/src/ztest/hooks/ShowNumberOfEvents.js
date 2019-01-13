import React, { useEffect, useState, useContext } from 'react';
import { ThemeContext } from '../context/TextContext';

// eslint-disable-next-line react/prop-types
const ShowNumberOfEvents = ({ number = 0 }) => {
  useEffect(
    () => {
      console.log('called On mount () and only number is changed');
      return () => console.log('--- componentWillUnmount ---');
    },
    [number],
  );
  return (
    <div>
      Number of events <span>{number}</span>
    </div>
  );
};

export default () => {
  const [numberOfEvents, setNumberOfEvents] = useState(0);
  const [isHidden, setHidden] = useState(false);
  const theme = useContext(ThemeContext);
  return (
    <div>
      <div>
        <div>ShowNumberOfEvents : {theme}</div>
      </div>
      <div>
        {isHidden && <ShowNumberOfEvents number={numberOfEvents} />}
        <button
          type="button"
          onClick={() => setNumberOfEvents(events => events + 1)}
        >
          addEvent
        </button>
        <button type="button" onClick={() => setHidden(!isHidden)}>
          Show
        </button>
      </div>
    </div>
  );
};
