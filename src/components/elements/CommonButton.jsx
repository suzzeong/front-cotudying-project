import React from 'react';
import styled, { css } from 'styled-components';
import Button from 'react-bootstrap/Button';

const CommonButton = (props) => {
  const { onClick, type, btnname, variant, text, disabled } = props;
  return (
    <StBtn
      onClick={onClick}
      type={type}
      btnname={btnname}
      variant={variant}
      disabled={disabled}
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
  ${(props) => {
    return (
      props.btnname === 'basicBtn' &&
      css`
        width: 100px;
        height: 40px;
      `
    );
  }}
  ${(props) => {
    return (
      props.btnname === 'longBtn' &&
      css`
        width: 100%;
        height: 40px;
      `
    );
  }}
`;

export default CommonButton;
