import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  z-index: 999;
  width: 100%;
  padding: 5px 20px;
  color: rgba(128, 128, 128, 1);
  display: flex;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 0 20px rgb(89 102 122 / 10%);

  @media (max-width: 768px) {
    padding: 10px 5px;
  }

  @media (max-width: 576px) {
    flex-direction: column;
    padding: 25px 0;
  }
`;

export const LogoWrap = styled(Link)`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  width: 50px;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-right: 35px;
`;

export const LinkName = styled.p`
  margin-left: 5px;
`;

export const ControlsWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const ControlBtn = styled.div`
  margin-right: 25px;
  display: flex;
  align-items: center;
  color: rgba(43, 43, 43, 0.7);
  cursor: pointer;
  transition: all 0.2s linear;
  &:hover {
    color: rgba(43, 43, 43, 1);
  }
`;
