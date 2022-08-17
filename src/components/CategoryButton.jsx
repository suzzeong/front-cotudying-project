import { useState } from 'react';
import styled, { css } from 'styled-components';
import { colors } from '../theme/theme';

const CategoryButton = ({ src, onClick, category, value, isSelect }) => {
  return (
    <StIconContainer onClick={onClick}>
      <img src={src.icon} alt={src.value} />
    </StIconContainer>
  );
};

export default CategoryButton;

const StIconContainer = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  cursor: pointer;
  border: ${(props) => (props.isSelect ? '3px solid blue' : '')};

  img {
    width: 100%;
  }

  & + & {
    margin-left: 50px;
  }
`;
