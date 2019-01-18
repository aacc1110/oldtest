/* eslint-disable no-use-before-define */
import React, { useEffect, useState, useContext } from 'react';
import { Label, Icon, Input } from 'semantic-ui-react';
import { ThemeContext } from 'ztest/context/TextContext';

export default function Greeting() {
  const name = useFormInput('Mary');
  const surName = useFormInput('Poppins');
  const theme = useContext(ThemeContext);
  const width = useWindowWidth();
  useDocumnetTitle(`${name.value} : ${surName.value}`);

  return (
    <section>
      <div>
        <div>Test : Counter is {theme}</div>
        <Label>
          Name :
          <Icon name="mail" />
          <Input {...name} />
        </Label>
        <Label>
          Sign :
          <Icon name="sign language" />
          <Input {...surName} />
        </Label>
        <Label>Resize : {width}</Label>
      </div>
    </section>
  );
}

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  const handleChange = e => {
    setValue(e.target.value);
  };
  return {
    value,
    onChange: handleChange,
  };
}

function useDocumnetTitle(title) {
  useEffect(
    () => {
      document.title = title;
      console.log('useEffectTest');
    },
    [title],
  );
}

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
  return width;
}
