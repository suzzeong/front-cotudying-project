import styled from 'styled-components';

const CategoryIcon = ({ src }) => {
  return (
    <StIconContainer>
      <img src={src} alt='아이콘' />
    </StIconContainer>
  );
};

export default CategoryIcon;

const StIconContainer = styled.div`
  width: 64px;
  cursor: pointer;

  img {
    width: 100%;
  }

  & + & {
    margin-left: 50px;
  }
`;
