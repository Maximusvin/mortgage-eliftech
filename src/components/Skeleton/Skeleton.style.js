import styled from 'styled-components';
import { COLORS } from 'assets/colors';

export const Item = styled.li`
  position: relative;
  width: 100%;
  background: ${COLORS.lightGrey};
  border: 2px solid ${COLORS.greyLine};
  color: ${COLORS.lightBlack};
  border-radius: 10px;
  padding: 12px 13px 12px 18px;
  margin-bottom: 12px;
`;

export const ItemTopWrap = styled.div`
  width: 25%;
  height: 15px;
  margin-bottom: 5px;
  background-color: ${COLORS.lightestGrey};
  border-radius: 5px;
`;

export const Id = styled.div`
  width: 10%;
  height: 8px;
  background-color: ${COLORS.lightestGrey};
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const ItemBottomWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const BankNameStatus = styled.div`
  width: 30%;
  height: 15px;
  background-color: ${COLORS.lightestGrey};
  border-radius: 5px;
`;

export const Price = styled.div`
  margin-left: auto;
  width: 25%;
  height: 20px;
  background-color: ${COLORS.lightestGrey};
  border-radius: 5px;
`;

export const LoaderWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const CloseButton = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  top: 10px;
  right: 14px;
  background-color: ${COLORS.lightestGrey};
  border-radius: 2px;
`;
