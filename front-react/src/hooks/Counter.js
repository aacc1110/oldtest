import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  /* useState 함수의 파라미터로는 사용하고 싶은 상태의 기본값을 넣어줍니다. 우리는 현재 0을 기본값으로 사용하고 있습니다. useState 를 호출하면 배열을 반환하는데, 이 배열의 첫번째 원소는 현재 상태 값과, 두번째 원소는 이 값을 설정해주는 setter 함수입니다. */

  useEffect(
    () => {
      console.log('redered:', count);
      document.title = `You clicked ${count} times`;
      /* useEffect 라는 함수에 대하여 알아봅시다. 이 함수는, 컴포넌트가 마운트 되거나 리렌더링이 마치고 나서 실행됩니다. componentDidMount 와 componentDidUpdate 와 비슷하다고 생각하시면 됩니다. */
    },
    [count],
    /* useEffect 를 사용 하실 때 주의하실 점은 우리가 설정해준 함수가 render가 될 때마다 실행된다는 점 입니다. 즉, props 나 state 가 바뀌지 않고 부모컴포넌트가 리렌더링 될 때에도 호출이 됩니다. 만약에 특정 상황에만 이 함수가 실행되게끔 하고 싶다면, useEffect 의 두번째 파라미터로 주시하고 싶은 값들을 배열 형태로 전달해주면 됩니다. */
  );

  console.log('rendering: ', count);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button type="button" onClick={() => setCount(count + 1)}>
        Click +
      </button>
      <button type="button" onClick={() => setCount(count - 1)}>
        Click -
      </button>
    </div>
  );
};

export default Counter;
/* Hooks 의 사용 규칙
리액트 매뉴얼에서는 Hooks 사용에 있어서 두가지 준수해야 할 규칙을 규정하였습니다.

1. Hooks 를 컴포넌트의 Top-level 에서만 사용 할 것
Hooks 는 반복문이나, 조건문이나, 감싸진 함수에선 사용하면 안됩니다.

2. 리액트 함수에서만 사용 할 것
Hooks 는 리액트 함수형 컴포넌트 내부에서만 사용하셔야 합니다. 일반 JavaScript 함수에서는 사용하면 안됩니다. 하지만, Custom Hook 에서는 괜찮습니다. */
