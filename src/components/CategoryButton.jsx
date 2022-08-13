import { useState } from 'react';
import styled, { css } from 'styled-components';
import { colors } from '../theme/theme';

const CategoryButton = ({ src, onClick }) => {
  const [isSelect, setIsSelect] = useState(false);

  const handleIconClick = (e) => {
    console.log(e.target.alt);
    // setIsSelect(e.target.value);
  };

  return (
    <StIconContainer onClick={handleIconClick}>
      <img src={src.icon} alt={src.value} />
    </StIconContainer>
  );
};

export default CategoryButton;

const StIconContainer = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;

  ${(props) =>
    props.isSelect &&
    css`
      border: 4px solid ${colors.primary};
    `}

  cursor: pointer;

  img {
    width: 100%;
  }

  & + & {
    margin-left: 50px;
  }
`;
