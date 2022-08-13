import React, { useState } from 'react';
import styled from 'styled-components';
import Layout from '../layout/Layout';
import { colors } from '../theme/theme';
import CommonButton from './elements/CommonButton';
import Logo from './Logo';

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <StHeader>
      <Layout>
        <StHeaderInner>
          <Logo />
          <StLoginGroup>
            <React.Fragment>
              {isLogin ? (
                <StUser>
                  <StLoginText>
                    <StName>홍길동</StName>님 환영합니다.
                  </StLoginText>
                  <StButton>
                    <CommonButton
                      bgcolor={colors.white}
                      fontcolor={colors.black}
                      text="로그아웃"
                      width="100px"
                      height="36px"
                    />
                  </StButton>
                </StUser>
              ) : (
                <>
                  <CommonButton
                    bgcolor={colors.white}
                    fontcolor={colors.black}
                    width="100px"
                    height="36px"
                    text="로그인"
                  />
                  <CommonButton
                    bgcolor={colors.white}
                    fontcolor={colors.black}
                    width="100px"
                    height="36px"
                    text="회원가입"
                  />
                </>
              )}
            </React.Fragment>
          </StLoginGroup>
        </StHeaderInner>
      </Layout>
    </StHeader>
  );
};

export default Header;

const StHeader = styled.header`
  height: 150px;
  background: ${colors.primary};
`;

const StHeaderInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const StUser = styled.div`
  display: flex;
  align-items: center;
`;

const StLoginGroup = styled.div`
  position: absolute;
  right: 0;
  bottom: 20px;
  display: flex;

  button + button {
    margin-left: 10px;
  }
`;

const StLoginText = styled.div`
  color: white;
  font-size: 20px;
  margin-right: 10px;
`;

const StButton = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StName = styled.span`
  font-weight: bold;
`;
