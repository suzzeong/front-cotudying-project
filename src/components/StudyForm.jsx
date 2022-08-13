import styled from 'styled-components';
import { colors } from '../theme/theme';
import CommonSelect from './elements/CommonSelect';
import CommonInput from './elements/CommonInput';

const StudyForm = () => {
  return (
    <StContainer>
      <div>
        <CommonInput placeholder='스터디명' label='스터디명' />
        <CommonSelect />
      </div>
    </StContainer>
  );
};

export default StudyForm;

const StContainer = styled.div`
  width: 900px;
  padding: 30px;
  margin: 70px auto;
  background-color: ${colors.boxColor};
`;

// const
