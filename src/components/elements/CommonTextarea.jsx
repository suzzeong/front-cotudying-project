import React from 'react';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';

const CommonTextarea = ({
  controlId,
  rows,
  cols,
  label,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <Form.Group controlId={controlId}>
      <StLabel>{label}</StLabel>
      <StTextarea
        as='textarea'
        rows={rows}
        wrap='hard'
        cols={cols}
        defaultValue={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </Form.Group>
  );
};

export default CommonTextarea;

const StLabel = styled(Form.Label)`
  font-size: ${(props) => props.fz};
`;

const StTextarea = styled(Form.Control)`
  width: 100%;
  min-height: 250px;
  padding: 10px;
  border: 1px solid #ced4da;
`;
