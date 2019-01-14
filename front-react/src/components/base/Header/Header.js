import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow, media } from '../../../lib/styleUtils';
import LoginButton from './LoginButton';

// 상단 고정, 그림자
const Positioner = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0px;
  width: 100%;
  ${shadow(1)}
`;

// 흰 배경, 내용 중간 정렬
const WhiteBackground = styled.div`
  background: white;
  display: flex;
  justify-content: center;
  height: auto;
`;

// 해더의 내용
const HeaderContents = styled.div`
  width: 1200px;
  height: 55px;
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

// 로고
const Logo = styled.div`
  font-size: 1.8rem;
  letter-spacing: 2px;
  color: ${oc.teal[7]};
  font-family: 'Rajdhani';
  &:active {
    /* 마우스 클릭시 아래로 미세하게 움직임 */
    transform: translateY(2px);
  }
`;

// 중간 여백
const Spacer = styled.div`
  flex-grow: 1;
`;

// 하단 그래디언트 테두리
const GradientBorder = styled.div`
  height: 3px;
  background: linear-gradient(to right, ${oc.teal[6]}, ${oc.cyan[5]});
`;

const Header = () => (
  <Positioner>
    <WhiteBackground>
      <HeaderContents>
        <Logo>
          <Link to="/">AROOM</Link>
        </Logo>
        <Spacer />
        <LoginButton />
      </HeaderContents>
    </WhiteBackground>
    <GradientBorder />
  </Positioner>
);

export default Header;
