import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import js from '../assets/img/icon-js.png';
import { colors } from '../theme/theme';
import CommonButton from './elements/CommonButton';
import CommonText from './elements/CommonText';
import CategoryButton from './CategoryButton';
import { createPath, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { __deleteCotudy, __getDetail } from '../redux/modules/boardSlice';
import { __getUser } from '../redux/modules/userSlice';

import iconAll from '../assets/img/icon-all.png';
import iconEtc from '../assets/img/icon-etc.png';
import iconJs from '../assets/img/icon-js.png';
import iconPython from '../assets/img/icon-python.png';
import iconC from '../assets/img/icon-c.png';
import iconJava from '../assets/img/icon-java.png';
import iconNode from '../assets/img/icon-node.png';
import iconSpring from '../assets/img/icon-spring.png';
import iconReact from '../assets/img/icon-react.png';
import { getCookie } from '../shared/Cookie';

const icons = [
  { icon: iconAll, value: 'All' },
  { icon: iconSpring, value: 'Spring' },
  { icon: iconJava, value: 'Java' },
  { icon: iconReact, value: 'React' },
  { icon: iconJs, value: 'JavaScript' },
  { icon: iconNode, value: 'Node' },
  { icon: iconPython, value: 'Python' },
  { icon: iconC, value: 'C' },
  { icon: iconEtc, value: 'Etc' },
];

const StudyInfo = () => {
  const [isIng, setIsIng] = useState(true);
  const [disabled, setDisabled] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const { isLoading } = useSelector((state) => state.cotudy);
  const cotudy = useSelector((state) => state.cotudy.detail);
  const { user, isLogin } = useSelector((state) => state.users);
  const { startDate, endDate } = cotudy;
  const icon = icons.filter((i) => i.value === cotudy.category);
  const token = getCookie('ACCESS_TOKEN');

  const dateStart = startDate && startDate.substr(0, 10);
  const dateEnd = endDate && endDate.substr(0, 10);
  const userId = getCookie('userid');

  const onClickDeleteBtnHandler = () => {
    if (window.confirm('글을 삭제하시겠습니까?')) {
      dispatch(__deleteCotudy(id));
      navigate('/');
    }
  };

  useEffect(() => {
    dispatch(__getDetail(id));
    if (token !== undefined) {
      dispatch(__getUser(userId));
    }
  }, [dispatch, id]);

  if (isLoading) {
    return <div>로딩 중</div>;
  }

  console.log('icon', icon);

  return (
    <>
      {Object.keys(cotudy).length !== 0 && (
        <StInfo>
          <InfoHeader>
            <InfoLanguage>
              <StIcon>
                <img src={icon[0].icon} alt={icon[0].icon} />
              </StIcon>
              <React.Fragment>
                {/* {cotudy.user.length === cotudy.num ? (
              <CommonText fs='30px'>모집완료</CommonText>
            ) : ( */}
                <CommonText fs='30px'>모집중</CommonText>
                {/* )} */}
              </React.Fragment>
            </InfoLanguage>
            <StButton>
              <React.Fragment>
                {Object.keys(user).length !== 0 &&
                user.result.data.id === cotudy.registerUserId ? (
                  <React.Fragment>
                    <CommonButton
                      bgcolor={colors.danger}
                      fontcolor={colors.white}
                      bgchover={colors.dangerhover}
                      text='삭제하기'
                      onClick={onClickDeleteBtnHandler}
                      margin='0 0 0 10px'
                    />
                  </React.Fragment>
                ) : (
                  <>
                    {/* <CommonButton
                      onClick={() => setDisabled(true)}
                      bgcolor={colors.primary}
                      fontcolor={colors.white}
                      text={disabled ? '참여완료' : '참여하기'}
                      disabled={disabled}
                      // disabled={cotudy.user.length === cotudy.num ? 'disabled' : ''}
                    /> */}
                  </>
                )}
              </React.Fragment>
              {/* <CommonButton
                bgcolor={colors.danger}
                fontcolor={colors.white}
                bgchover={colors.dangerhover}
                text='삭제하기'
                onClick={onClickDeleteBtnHandler}
                margin='0 0 0 10px'
              ></CommonButton> */}
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
              <Infotitle>{cotudy.title}</Infotitle>
              <Infonum>{cotudy.num}명 모집</Infonum>
            </InfoFlex>
            <Infocontent>
              {/* {cotudy.startDate} ~ {cotudy.endDate} */}
              {dateStart} ~ {dateEnd}
            </Infocontent>
            <Infocontent minHt='200px'>
              {cotudy.content.split('\n').map((line, i) => {
                return (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                );
              })}
            </Infocontent>
          </InfoContainer>
        </StInfo>
      )}
    </>
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
  min-height: ${(props) => props.minHt};
`;
