import styled from 'styled-components';
import oc from 'open-color';

const ThemeContext = styled.div`
  margin-top: 1rem;
  padding-top: 0.6rem;
  padding-bottom: 0.5rem;

  background: ${oc.teal[6]};
  color: white;

  text-align: center;
  font-size: 1.25rem;
  font-weight: 500;

  cursor: pointer;
  user-select: none;
  transition: 0.2s all;

  &:active {
    background: ${oc.teal[7]};
  }
`;

export default ThemeContext;
