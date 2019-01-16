import React from 'react';
import styled from 'styled-components';

// 흰 배경, 내용 중간 정렬
const Background = styled.div`
  justify-content: center;

  padding-top: 80px;
`;

const Home = () => (
  <Background>
    <div>Home</div>
  </Background>
);

export default Home;
