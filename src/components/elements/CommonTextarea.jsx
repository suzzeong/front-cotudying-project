import React from 'react';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const CommonTextarea = ({
  rows,
  cols,
  label,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <StLabel controlId='floatingTextarea2' label={label}>
      <StTextarea
        // as='textarea'
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
  padding: 10px;
  border: 1px solid #ced4da;
`;
