import React from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import { colors } from '../../theme/theme';

const CommonButton = (props) => {
  const { onClick, type, bgcolor, text, disabled, fontcolor, width, height, bgchover } = props;
  return (
    <StBtn
      onClick={onClick}
      type={type}
      bgcolor={bgcolor}
      disabled={disabled}
      fontcolor={fontcolor}
      width={width}
      height={height}
      bgchover={bgchover}
    >
      {text}
    </StBtn>
  );
};

const StBtn = styled(Button)`
  cursor: pointer;
  box-sizing: border-box;
  border-radius: 8px;
  border: none;
  background-color: ${(props) => props.bgcolor};
  color: ${(props) => props.fontcolor};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  :hover {
    background-color: ${(props) => props.bgchover}
  }
  :disabled {
    background-color: ${colors.disabled};
    color: ${colors.disabledText};
  }
`;

export default CommonButton;
