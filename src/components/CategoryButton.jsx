import { useState } from 'react';
import styled, { css } from 'styled-components';
import { colors } from '../theme/theme';

const CategoryButton = ({ src, onClick }) => {
  const [isSelect, setIsSelect] = useState(false);

  // const onClick = (e) => {
  //   // console.log(e.target.alt);
  //   setIsSelect(true);
  // };

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
