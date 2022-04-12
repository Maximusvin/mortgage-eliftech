import styled from 'styled-components';
import { COLORS } from 'assets/colors';

export const FormWrap = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: 16px;
  padding-right: 21.5px;
`;

export const InputWrap = styled.div`
  width: 49%;
  margin-bottom: 10px;
`;

export const InputForm = styled.input`
  width: 100%;
  padding: 5px 16px;
  background: ${COLORS.lightGrey};
  border-radius: 5px;

  &::placeholder {
    font-size: 12px;
    line-height: 19px;
    color: ${COLORS.liteGrey};
  }
`;

export const ErrorMessage = styled.p`
  font-size: 12px;
  color: ${COLORS.red100};
`;
