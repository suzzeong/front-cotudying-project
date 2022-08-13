import React from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";

const CommonButton = (props) => {
  const { onClick, type, bgcolor, text, disabled, fontcolor, width, height } = props;
  return (
    <StBtn
      onClick={onClick}
      type={type}
      bgcolor={bgcolor}
      disabled={disabled}
      fontcolor={fontcolor}
      width={width}
      height={height}
    >
      {text}
    </StBtn>
  );
};

const StBtn = styled(Button)`
  cursor: pointer;
  box-sizing: border-box;
  border-radius: 5px;
  border: none;
  background-color: ${(props) => props.bgcolor};
  color: ${(props) => props.fontcolor};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export default CommonButton;
