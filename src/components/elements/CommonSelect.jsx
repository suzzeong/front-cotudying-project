import React from 'react';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';

const CommonSelect = (props) => {
  const { ariaLabel, width, ht, name, values, onChange } = props;

  // const objLen = Object.keys(rest).length;

  return (
    <StSelect aria-label={ariaLabel} width={width} ht={ht} onChange={onChange}>
      <option value=''>{name}</option>
      {values.map((value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </StSelect>
  );
};

export default CommonSelect;

const StSelect = styled(Form.Select)`
  width: ${(props) => props.width};
  height: ${(props) => props.ht};
  margin: ${(props) => props.margin};
`;
