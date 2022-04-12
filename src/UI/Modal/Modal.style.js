import styled from 'styled-components';

import { COLORS } from 'assets/colors';

export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: ${COLORS.greyTranslucent};
  z-index: 2000;
`;

export const ModalWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${props => (props.width ? props.width : ' auto')};
  height: ${props => (props.height ? props.height : 'auto')};
  background-color: ${COLORS.white};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${props => (props.padding ? props.padding : '20px')};
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;
