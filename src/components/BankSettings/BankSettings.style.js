import styled from 'styled-components';
import { COLORS } from 'assets/colors';

export const Wrapper = styled.div`
  position: relative;
`;

export const WrapperEmpty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TitleModal = styled.h3`
  text-align: center;
  margin-bottom: 25px;
  text-transform: uppercase;
`;

export const BanksList = styled.ul`
  @media (max-width: 768px) {
  }
  @media (max-width: 576px) {
  }
`;

export const ListItem = styled.li`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: #495057;
  padding: 8px;
  border-bottom: 1px solid #eff2f7;
  font-size: 0.8125rem;
  line-height: 1.5;
  transition: all 0.2s linear;
  &:hover {
    background-color: rgba(115, 102, 255, 0.15);
  }
`;

export const Thead = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: #495057;
  padding: 8px;
  font-size: 0.9rem;
  font-weight: 700;
  background-color: #eff2f7;
`;

export const HeadOrderTD = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5%;
  padding: 10px;
  text-align: left;
  font-size: 16px;
  cursor: pointer;
  background-color: transparent;
  font-weight: 700;
  &:first-letter {
    text-transform: uppercase;
  }
`;

export const HeadNameTD = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 1px solid ${COLORS.lightestGrey};
  width: 15%;
  padding: 10px;
  text-align: left;
  font-size: 16px;
  cursor: pointer;
  background-color: transparent;
  font-weight: 700;
  &:first-letter {
    text-transform: uppercase;
  }
`;

export const HeadItemTD = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 1px solid ${COLORS.lightestGrey};
  width: 15%;
  padding: 10px;
  text-align: left;
  font-size: 16px;
  cursor: pointer;
  background-color: transparent;
  font-weight: 700;
  &:first-letter {
    text-transform: uppercase;
  }
`;

export const HeadNotesTD = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 1px solid ${COLORS.lightestGrey};
  width: 20%;
  padding: 10px;
  font-size: 16px;
  background-color: transparent;
  font-weight: 700;
  &:first-letter {
    text-transform: uppercase;
  }
`;

export const OrderTD = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5%;
  font-size: 16px;
  padding: 10px;
  text-align: left;
  background-color: transparent;
`;

export const NameTD = styled.div`
  display: flex;
  align-items: center;
  width: 15%;
  padding: 10px;
  font-size: 16px;
  text-align: left;
  background-color: transparent;

  &::first-letter {
    text-transform: uppercase;
  }
`;

export const ItemTD = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
  font-size: 16px;
  padding: 10px;
  text-align: center;
  background-color: transparent;
`;

export const NotesTD = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  padding: 10px;
  font-size: 16px;
  text-align: left;
  background-color: transparent;

  &:first-letter {
    text-transform: uppercase;
  }
`;
export const ButtonWrap = styled.div`
  display: flex;
  position: absolute;
  top: -60px;
  right: 0;
`;

export const ListItemButton = styled.button`
  opacity: 20%;
  position: absolute;
  background: transparent;
  margin-right: 3px;
  cursor: pointer;
  padding: 2px;
  top: 8px;
  right: ${props => (props.right ? props.right : '8px')};
  font-size: 14px;
  transition: all 0.2s linear;

  &:hover {
    color: ${COLORS.red};
    opacity: 70%;
  }
`;
