import styled from 'styled-components';
import { COLORS } from 'assets/colors';

export const Wrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  background: rgb(2, 23, 42);
  color: rgba(255, 255, 255, 0.4);
  font-size: 12px;
  line-height: 31px;

  @media (max-width: 576px) {
    font-size: 18px;
  }
`;

export const Link = styled.a`
  color: rgba(255, 255, 255, 0.5);
  transition: color 0.2s linear;

  &:hover {
    color: ${COLORS.orange};
  }
`;
