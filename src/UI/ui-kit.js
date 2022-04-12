import styled from 'styled-components';
import { COLORS } from 'assets/colors';

export const Paragraph = styled.p`
  display: ${props => (props.display ? props.display : 'block')};
  justify-content: space-between;
  font-size: 18px;
  line-height: 30px;
  margin-bottom: 6px;
  letter-spacing: 0.02em;
  border-bottom: ${props => (props.borderBottom ? props.borderBottom : null)};
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : 'auto')};
`;

export const Box = styled.div`
  display: ${props => (props.display ? props.display : 'block')};
  align-items: ${props => (props.alignItems ? props.alignItems : null)};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : null};
  width: ${props => (props.width ? props.width : 'auto')};
  margin-top: ${props => (props.marginTop ? props.marginTop : 'auto')};
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : 'auto')};
`;

export const Title = styled.h2`
  margin-top: ${props => (props.marginTop ? props.marginTop : 'auto')};
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : 'auto')};
  text-align: ${props => (props.textAlign ? props.textAlign : 'center')};
`;

export const MainButton = styled.button`
  display: ${props => (props.display ? props.display : 'block')};
  width: ${props => (props.width ? props.width : 'auto')};
  margin-top: ${props => (props.marginTop ? props.marginTop : '0px')};
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : '0px')};
  margin-left: ${props => (props.marginLeft ? props.marginLeft : '0px')};
  margin-right: ${props => (props.marginRight ? props.marginRight : '0px')};
  padding: 5px 22px;
  border-radius: 5px;
  background: ${COLORS.grey};
  font-size: 14px;
  line-height: 22px;
  text-transform: uppercase;
  color: ${COLORS.white};
  opacity: ${props => (props.opacity ? props.opacity : '100%')};
  cursor: pointer;
  transition: all 0.2s linear;

  &:hover {
    background: ${COLORS.lightBlack};
    opacity: 100%;
  }
`;
