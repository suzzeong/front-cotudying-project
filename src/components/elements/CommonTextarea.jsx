import React from 'react';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const CommonTextarea = ({
  rows,
  cols,
  value,
  onChange,
  placeholder,
  width,
  height,
}) => {
  return (
    <StLabel controlId='floatingTextarea2'>
      <StTextarea
        as='textarea'
        width={width}
        height={height}
        rows={rows}
        wrap='hard'
        cols={cols}
        defaultValue={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </StLabel>
  );
};

export default CommonTextarea;

const StLabel = styled(FloatingLabel)`
  font-size: 16px;
`;

const StTextarea = styled(Form.Control)`
  border-radius: 8px;
  width: 100%;
  min-height: 250px;
  padding: 12px;
  border: 1px solid #ced4da;
`;
