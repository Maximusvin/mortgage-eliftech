import styled from 'styled-components';
import { COLORS } from 'assets/colors';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const EmptyWrap = styled.div`
  width: 32%;
  text-align: center;
  box-shadow: 0px 0px 35px ${COLORS.greyLine};
  padding: 35px;
  border-radius: 15px;
`;

export const WrapResult = styled.div`
  width: 32%;
  box-shadow: 0px 0px 35px ${COLORS.greyLine};
  padding: 35px;
  border-radius: 15px;
`;

export const WrapOffer = styled.div`
  width: 32%;
  box-shadow: 0px 0px 35px
  ${props => (props.status === 'No banks in the system' ? null : 'inset')}

    ${props => {
      if (
        props.status === 'Data pending' ||
        props.status === 'No banks in the system'
      ) {
        return COLORS.greyLine;
      }
      if (props.status === 'Rejected') {
        return COLORS.red50;
      }
      if (props.status === 'Approved') {
        return COLORS.green;
      }
    }};
    
  padding: 35px;
  border-radius: 15px;
  
  }}; ;
`;

export const FormWrap = styled.form`
  width: 400px;
  display: block;
  width: 32%;
  box-shadow: 0px 0px 35px ${COLORS.greyLine};
  padding: 35px;
  border-radius: 15px;
`;

export const InputWrap = styled.div`
  margin-bottom: 10px;
`;

export const InputForm = styled.input`
  width: 100%;
  padding: 5px 16px;
  background: ${COLORS.lightGrey};
  border-radius: 5px;
  margin-top: 3px;
  font-size: 16px;

  &::placeholder {
    font-size: 14px;
    line-height: 19px;
    color: ${COLORS.liteGrey};
  }
`;

export const ErrorMessage = styled.p`
  font-size: 12px;
  color: ${COLORS.red100};
`;

export const Span = styled.span`
  font-weight: 700;
`;

export const InputSpan = styled.span`
  display: block;
  font-size: 12px;
  margin-top: 15px;
  color: ${props => (props.active ? '' : COLORS.lightGrey)};
`;

export const DropdownSpan = styled.span`
  display: block;
  font-size: 12px;
  margin-top: 15px;
`;
