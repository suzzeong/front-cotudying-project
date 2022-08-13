import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import js from '../assets/img/icon-js.png';
import { colors } from '../theme/theme';
import CommonButton from './elements/CommonButton';
import CommonText from './elements/CommonText';

const StudyInfo = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isIng, setIsIng] = useState(true);
  const [disabled, setDisabled] = useState(false);

  return (
    <StInfo>
      <InfoHeader>
        <InfoLanguage>
          <StIcon>
            <img src={js} alt='아이콘' />
          </StIcon>
          <React.Fragment>
            {isIng ? (
              <CommonText fs='30px'>모집 중</CommonText>
            ) : (
              <CommonText fs='30px'>모집완료</CommonText>
            )}
          </React.Fragment>
        </InfoLanguage>
        <StButton>
          <React.Fragment>
            {isLogin ? (
              <React.Fragment>
                <CommonButton
                  bgcolor={colors.danger}
                  fontcolor={colors.white}
                  text='삭제'
                  bgchover={colors.danger}
                />
              </React.Fragment>
            ) : (
              <>
                <CommonButton
                  onClick={() => setDisabled(true)}
                  bgcolor={colors.primary}
                  fontcolor={colors.white}
                  text={disabled ? '참여완료' : '참여하기'}
                  disabled={disabled}
                />
              </>
            )}
          </React.Fragment>
        </StButton>
      </InfoHeader>
      <InfoContainer>
        <InfoFlex>
          <Infotitle>자바스크립트 기초반 모집</Infotitle>
          <Infonum>3/4</Infonum>
        </InfoFlex>
        <Infocontent>2022.08.09~2022.09.09</Infocontent>
        <Infocontent>
          [개발 스터디 모집 내용 예시] <br />
          스터디 주제 <br />
          1. javascript info(공식문서) or deepdive <br />
          2. javascript 코딩테스트
          <br />
          <br />
          스터디 목표
          <br />
          <br />
          빠른 취뽀
          <br />
          <br />
          예상 스터디 일정(횟수)
          <br />
          <br />
          주6일
          <br />
          <br />
          예상 커리큘럼 간략히
          <br />
        </Infocontent>
      </InfoContainer>
    </StInfo>
  );
};

export default StudyInfo;

const StInfo = styled.div`
  width: 900px;
  margin: 70px auto;
`;

const InfoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const InfoLanguage = styled.div`
  display: flex;
  align-items: center;
`;

const StIcon = styled.div`
  margin-right: 20px;
`;

const StButton = styled.div`
  display: flex;
  align-items: center;
`;

const InfoContainer = styled.div`
  background-color: ${colors.boxColor};
  padding: 30px;
`;

const InfoFlex = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Infotitle = styled.div`
  background-color: ${colors.white};
  border-radius: 10px;
  padding: 20px;
  margin: 0 0 20px;
  width: 73%;
`;
const Infonum = styled.div`
  background-color: ${colors.white};
  border-radius: 10px;
  padding: 20px;
  margin: 0 0 20px;
  width: 25%;
  text-align: center;
`;

const Infocontent = styled.div`
  background-color: ${colors.white};
  border-radius: 10px;
  padding: 20px;
  margin: 0 0 20px;
`;
