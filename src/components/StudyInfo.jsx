import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import js from '../assets/img/icon-js.png';
import { colors } from '../theme/theme';
import CommonButton from './elements/CommonButton';
import CommonText from './elements/CommonText';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { __deleteCotudy, __getCotudy } from '../redux/modules/boardSlice';

const StudyInfo = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isIng, setIsIng] = useState(true);
  const [disabled, setDisabled] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cotudy.cotudy);
  const { id, category, title, content, startDate, endDate, user, num } = data;
  const param = useParams();
  const datas = data.find((data) => data.id === parseInt(param.id));
  console.log(datas)
  // console.log(datas.startDate)

  const dateStart = datas.startDate.substr(0, 10);
  const dateEnd = datas.endDate.substr(0, 10);

  useEffect(() => {
    dispatch(__getCotudy());
  }, [dispatch]);

  const onClickDeleteBtnHandler = (e) => {
    // e.stopPropagation();
    // window.confirm("삭제하시겠습니까?")
    dispatch(__deleteCotudy(param.id));
    navigate('/');
  };

  return (
    <StInfo>
      <InfoHeader>
        <InfoLanguage>
          <StIcon>
            <img src={js} alt='아이콘' />
          </StIcon>
          <React.Fragment>
            {/* {datas.user.length === datas.num ? (
              <CommonText fs='30px'>모집완료</CommonText>
            ) : ( */}
            <CommonText fs='30px'>모집중</CommonText>
            {/* )} */}
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
                  bgchover={colors.dangerhover}
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
                  // disabled={datas.user.length === datas.num ? 'disabled' : ''}
                />
              </>
            )}
          </React.Fragment>
          <CommonButton
            bgcolor={colors.danger}
            fontcolor={colors.white}
            bgchover={colors.dangerhover}
            text='삭제하기'
            onClick={onClickDeleteBtnHandler}
            margin='0 0 0 10px'
          ></CommonButton>
          <CommonButton
            bgcolor={colors.primary}
            fontcolor={colors.white}
            text='이전으로'
            onClick={() => {
              navigate(-1);
            }}
            margin='0 0 0 10px'
          />
        </StButton>
      </InfoHeader>
      <InfoContainer>
        <InfoFlex>
          <Infotitle>{datas.title}</Infotitle>
          <Infonum>
            {datas.user.length}/{datas.num}
          </Infonum>
        </InfoFlex>
        <Infocontent>
          {/* {datas.startDate} ~ {datas.endDate} */}
          {dateStart} ~ {dateEnd}
        </Infocontent>
        <Infocontent>{datas.content}</Infocontent>
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
  margin-left: 0px;
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
