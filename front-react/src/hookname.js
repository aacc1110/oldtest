import React, { useState, useContext } from 'react';
import { ThemeContext, LocalContext, useWindowWidth } from './contexts';

const Greeting = () => {
  const [name, setName] = useState('Mary');
  const [surname, setSurname] = useState('Poppins');
  const theme = useContext(ThemeContext);
  const local = useContext(LocalContext);
  const width = useContext(useWindowWidth);

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleSurnameChange = e => {
    setSurname(e.target.value);
  };

  return (
    <section className={theme}>
      <div>
        <input value={name} onChange={handleNameChange} />
        {name}
      </div>
      <div>
        <input value={surname} onChange={handleSurnameChange} />
        {surname}
      </div>
      <div>{local}</div>
      <div>{width}</div>
    </section>
  );
};

export default Greeting;
