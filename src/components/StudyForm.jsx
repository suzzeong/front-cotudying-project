import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { colors } from '../theme/theme';
import CommonSelect from './elements/CommonSelect';
import CommonInput from './elements/CommonInput';
import CommonDatePicker from './elements/CommonDatePicker';
import CommonTextarea from './elements/CommonTextarea';
import CommonButton from './elements/CommonButton';
import CommonText from './elements/CommonText';
import { __postCotudy } from '../redux/modules/boardSlice';

const StudyForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [num, setNum] = useState(1);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');
  const [user, setUser] = useState([]);
  const [isActive, setIsActive] = useState(true);

  const cotudying = {
    title: title,
    num: num,
    startDate: startDate,
    endDate: endDate,
    category: category,
    content: content,
    user: user
  }
  

  // console.log(startDate, endDate);
  // const { id, category, title, content, startDate, endDate, user, num } = data;

  useEffect(() => {
    if (
      title !== '' &&
      startDate !== '' &&
      endDate !== '' &&
      content !== '' &&
      category !== '' &&
      num !== ''
      ) {
        setIsActive(false);
      } else {
        setIsActive(true);
      }
    }, [title, startDate, endDate, content, num, category]);
    
    const onSubmithandler = (e) => {
      e.preventDefault();
      dispatch(__postCotudy(cotudying))
      navigate(-1);
    }
  // console.log(title)

  return (
    <StContainer>
      <CommonText fs='30px'>스터디 모집하기</CommonText>
      <StFormContainer onSubmit={onSubmithandler}>
        <StBlock>
          <StTopFormBox>
            <CommonInput
              placeholder='스터디명'
              label='스터디명'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </StTopFormBox>
          <StTopFormBox>
            <CommonSelect
              ht='100%'
              name='모집 인원'
              value={num}
              values={[1, 2, 3, 4]}
              onChange={(e) => {
                setNum(e.target.value);
              }}
            />
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
                onChange={(date) => {
                  setStartDate(date);
                }}
                minDate={new Date()}
              />
              <StText> ~ </StText>
              <CommonDatePicker
                selected={endDate}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                onChange={(date) => {
                  setEndDate(date);
                }}
                minDate={startDate}
              />
            </StDateBox>
            <CommonSelect
              ht='100%'
              width='200px'
              name='배울 언어'
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
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
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
        </StTextBlock>
        <StButton>
          <CommonButton
            type='submit'
            text='제출하기'
            fz='20px'
            width='150px'
            disabled={isActive}
          />
        </StButton>
      </StFormContainer>
    </StContainer>
  );
};

export default StudyForm;

const StContainer = styled.div`
  width: 900px;
  margin: 70px auto 0;
`;

const StFormContainer = styled.form`
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
  display: flex;
  width: 100%;

  /* & + & {
    margin-left: 20px;
  } */
  &:nth-child(2) {
    width: 30%;
  }
`;

const StDateBox = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
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
