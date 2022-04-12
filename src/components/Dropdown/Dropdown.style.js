import styled from 'styled-components';
import { COLORS } from 'assets/colors';

export const PopapWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 7px 16px;
  background: #e8e8e8;
  border-radius: 5px;
  margin-top: 3px;
`;

export const PopapActiveItem = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.2s linear;
  width: 100%;
  font-size: 16px;

  &::first-letter {
    text-transform: uppercase;
  }

  &:hover {
    color: ${COLORS.lightBlue};
  }
`;

export const Popap = styled.div`
  z-index: 100;
  position: absolute;
  left: 0;
  top: 30px;
  width: 100%;
  background-color: #2f2f2f;
  padding: 5px 0;
  border: 0 solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
  box-shadow: 0 1rem 3rem rgb(0 0 0 / 18%);
  color: #495057;
  background-color: #fff;
`;

export const PopapList = styled.ul`
  border-radius: 5px;
`;

export const PopapItem = styled.li`
  padding: 10px 15px;
  cursor: pointer;
  background-color: ${props => (props.active ? COLORS.lightBlue : '')};
  color: ${props => (props.active ? '#000' : '')};
  transition: all 0.2s linear;
  font-size: 16px;

  :hover {
    color: ${props => (props.active ? '' : '#fff')};
    background-color: ${props => (props.active ? COLORS.lightBlue : '#7366ff')};
  }
`;
