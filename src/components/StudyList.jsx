import styled from 'styled-components';
import StudyCard from './StudyCard';

const StudyList = ({ className, data }) => {
  return (
    <StListContainer className={className}>
      {data.map((item) => (
        <StudyCard key={item.id} data={item} />
      ))}
    </StListContainer>
  );
};

export default StudyList;

const StListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
`;
