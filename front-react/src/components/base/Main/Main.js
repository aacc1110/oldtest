import React from 'react';
/* import { Link } from 'react-router-dom'; */
import styled from 'styled-components';
import { media } from '../../../lib/styleUtils';

// 해더의 내용
const MainContents = styled.div`
  background: white;
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
  <MainContents>
    <div>Main</div>
  </MainContents>
);

export default Main;
