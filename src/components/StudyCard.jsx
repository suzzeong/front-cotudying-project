import styled from 'styled-components';
import { colors } from '../theme/theme';
import CommonText from '../components/elements/CommonText';
import CommonButton from '../components/elements/CommonButton';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StudyCard = ({ data }) => {
  const { id, category, title, content, period, user, num } = data;
  const [isFull, setIsFull] = useState(false);
  const navigate = useNavigate();

  return (
    <StCardContainer>
      <StTextGroup>
        <CommonText fs='20px' fw='bold'>
          {category}
        </CommonText>
        {user.length === num ? (
          <CommonText color={colors.disabledText} fw='bold'>
            모집 완료
          </CommonText>
        ) : (
          <CommonText color={colors.primary} fw='bold'>
            모집 중
          </CommonText>
        )}
      </StTextGroup>
      <StBox>{title}</StBox>
      <StBox>{period}</StBox>
      <StContentBox>{content}</StContentBox>
      <StButtonGroup>
        <CommonButton text='참여하기' />
        <CommonButton
          text='상세보기'
          fontcolor={colors.black}
          bgcolor={colors.white}
          onClick={() => navigate(`/detail/${data.id}`)}
        />
      </StButtonGroup>
    </StCardContainer>
  );
};

export default StudyCard;

const StCardContainer = styled.div`
  width: 100%;
  max-width: 300px;
  padding: 26px;
  border-radius: 6px;
  background: ${colors.boxColor};
`;

const StTextGroup = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 20px;
`;
const StBox = styled.div`
  background-color: ${colors.white};
  padding: 6px;
  text-align: center;
  border-radius: 6px;
  & + & {
    margin-top: 10px;
  }
`;

const StContentBox = styled.div`
  background-color: ${colors.white};
  margin: 10px 0 30px;
  height: 120px;
  padding: 10px;
  border-radius: 6px;
`;
const StButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    width: 100%;
  }

  button + button {
    margin-left: 10px;
  }
`;
