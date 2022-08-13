import React from 'react';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const CommonTextarea = (props) => {
  const {
    controlId,
    label,
    maxLength,
    title,
    id,
    name,
    value,
    onChange,
    placeholder,
    width,
    height,
  } = props;

  return (
    <StTextarea>
      <StTextareaLabel controlId={controlId} label={label}>
        <StTextareaForm
          as='textarea'
          wrap='hard'
          maxLength={maxLength}
          title={title}
          id={id}
          type='text'
          value={value}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          width={width}
          height={height}
        />
      </StTextareaLabel>
    </StTextarea>
  );
};

export default CommonTextarea;

const StTextarea = styled.div``;

const StTextareaLabel = styled(FloatingLabel)``;

const StTextareaForm = styled(Form.Control)`
  box-sizing: border-box;
  width: ${({ width }) => `${width}`};
  height: ${({ height }) => `${height}`};
  border-radius: 5px;
  font-size: 14px;
`;
