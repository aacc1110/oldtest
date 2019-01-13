import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    alert(`${name}(${description})`);
    setName('');
    setDescription('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input value={name} onChange={e => setName(e.target.value)} />
      <input
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <button type="submit">확인</button>
      <div>
        {name}({description})
      </div>
    </form>
  );
};

export default Form;
