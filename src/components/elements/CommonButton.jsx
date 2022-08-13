import React from "react";
import styled, { css } from "styled-components";
import Button from "react-bootstrap/Button";

const CommonButton = (props) => {
  const { onClick, type, btnname, bgcolor, text, disabled, fontcolor } = props;
  return (
    <StBtn
      onClick={onClick}
      type={type}
      btnname={btnname}
      bgcolor={bgcolor}
      disabled={disabled}
      fontcolor={fontcolor}
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
  ${(props) => {
    return (
      props.btnname === "basicBtn" &&
      css`
        width: 100px;
        height: 36px;
      `
    );
  }}
  ${(props) => {
    return (
      props.btnname === "longBtn" &&
      css`
        width: 100%;
        height: 40px;
      `
    );
  }}
`;

export default CommonButton;
