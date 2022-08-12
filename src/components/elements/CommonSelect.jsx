import React from 'react';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';

const CommonSelect = (props) => {
  const { ariaLabel, width, height, name, value1, value2, value3, value4 } =
    props;
  return (
    <StSelect aria-label={ariaLabel} width={width} height={height}>
      <option>{name}</option>
      <option value={value1}>{value1}</option>
      <option value={value2}>{value2}</option>
      <option value={value3}>{value3}</option>
      <option value={value4}>{value4}</option>
    </StSelect>
  );
};

export default CommonSelect;

const StSelect = styled(Form.Select)`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
`;
