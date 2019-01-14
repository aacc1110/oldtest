import React from 'react';
/* import { Link } from 'react-router-dom'; */
import styled from 'styled-components';
import { shadow, media } from '../../../lib/styleUtils';

// 상단 고정, 그림자
const MainPositioner = styled.div`
  display: block;
  flex-direction: column;
  position: fixed;
  top: 200px;
  width: 100%;
  ${shadow(1)}
`;

// 흰 배경, 내용 중간 정렬
const MainBackground = styled.div`
  background: white;
  display: flex;
  justify-content: center;
  height: auto;
`;

// 해더의 내용
const MainContents = styled.div`
  width: 1200px;
  height: 500px;
  display: flex;
  flex-direction: row;
  align-items: center;

  padding-right: 1rem;
  padding-left: 1rem;
  ${media.wide`
        width: 992px;
    `}

  ${media.tablet`
        width: 100%;
    `}
`;

const Main = () => (
  <MainPositioner>
    <MainBackground>
      <MainContents>
        <div>Main</div>
      </MainContents>
    </MainBackground>
  </MainPositioner>
);

export default Main;
