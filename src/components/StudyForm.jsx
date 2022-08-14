import styled from 'styled-components';
import { useState } from 'react';
import { colors } from '../theme/theme';
import CommonSelect from './elements/CommonSelect';
import CommonInput from './elements/CommonInput';
import CommonDatePicker from './elements/CommonDatePicker';
import CommonTextarea from './elements/CommonTextarea';
import CommonButton from './elements/CommonButton';
import CommonText from './elements/CommonText';

const StudyForm = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [content, setContent] = useState('');

  // console.log(startDate, endDate);
  // console.log(content);

  return (
    <StContainer>
      <CommonText fs='30px'>스터디 모집하기</CommonText>
      <StFormContainer>
        <StBlock>
          <StTopFormBox>
            <CommonInput placeholder='스터디명' label='스터디명' />
          </StTopFormBox>
          <StTopFormBox>
            <CommonSelect ht='100%' name='모집 인원' values={[1, 2, 3, 4]} />
          </StTopFormBox>
        </StBlock>

        <StBlock>
          <StMidFormBox>
            <StDateBox>
              <StDateText>스터디 기간</StDateText>
              <CommonDatePicker
                selected={startDate}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                onChange={(date) => setStartDate(date)}
                minDate={new Date()}
              />
              <StText> ~ </StText>
              <CommonDatePicker
                selected={endDate}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                onChange={(date) => setEndDate(date)}
                minDate={startDate}
              />
            </StDateBox>
          </StMidFormBox>

          <StMidFormBox>
            <CommonSelect
              ht='100%'
              name='배울 언어'
              values={['spring', 'java', 'react', 'js', 'python', 'c', 'etc']}
            />
          </StMidFormBox>
        </StBlock>

        <StTextBlock>
          <CommonTextarea
            rows='3'
            cols='30'
            placeholder='내용'
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </StTextBlock>
      </StFormContainer>

      <StButton>
        <CommonButton text='제출하기' fz='20px' width='150px' />
      </StButton>
    </StContainer>
  );
};

export default StudyForm;

const StContainer = styled.div`
  width: 900px;
  margin: 70px auto 0;
`;

const StFormContainer = styled.div`
  width: 100%;
  padding: 30px;
  margin-top: 20px;
  background-color: ${colors.boxColor};
`;

const StBlock = styled.div`
  display: flex;

  & + & {
    margin-top: 20px;
  }
`;

const StTopFormBox = styled.div`
  width: 100%;
  & + & {
    margin-left: 20px;
  }

  &:nth-child(2) {
    width: 30%;
  }
`;

const StMidFormBox = styled.div`
  width: 100%;

  /*
  & + & {
    margin-left: 20px;
  } */
  &:nth-child(2) {
    width: 30%;
  }
`;

const StDateBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const StDateText = styled.span`
  display: inline-block;
  width: 200px;
  margin-right: 20px;
`;

const StText = styled.span`
  display: inline-block;
  margin: 0 20px;
`;

const StTextBlock = styled.div`
  width: 100%;
  margin-top: 20px;
`;

const StButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;
