import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../theme/theme';
import CommonButton from './elements/CommonButton';
import CommonInput from './elements/CommonInput';
import Logo from './Logo';

const Signup = () => {
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');

  const handleInputId = (e) => {
    setInputId(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  return (
    <LoginContainer>
      <Logo />
      <LoginTitle>회원가입</LoginTitle>
      <LoginForm>
        <div>
          <EmailInput>
            <CommonInput
              value={inputId}
              name='user_id'
              onChange={handleInputId}
              label='Email'
              placeholder='Email'
              margin='0 0 20px 0'
            />
          </EmailInput>
          <PasswordInput>
            <CommonInput
              value={inputPw}
              name='user_pw'
              onChange={handleInputPw}
              label='Password'
              placeholder='Password'
              margin='0 0 20px 0'
            />
          </PasswordInput>
        </div>
        <LoginButton>
          <CommonButton
            bgcolor={colors.primary}
            fontcolor={colors.white}
            // width='100%'
            height='40px'
            text='회원가입'
          />
        </LoginButton>
      </LoginForm>
    </LoginContainer>
  );
};

export default Signup;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const LoginTitle = styled.h1`
  color: ${colors.white};
  margin: 40px 0;
  font-weight: 700;
  font-size: 30px;
`;

const LoginForm = styled.form`
  background-color: ${colors.white};
  border-radius: 10px;
  width: 500px;
  height: 300px;
  padding: 30px 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const EmailInput = styled.div``;

const PasswordInput = styled.div``;

const LoginButton = styled.div`
  display: flex;
  justify-content: center;
  button + button {
    margin-left: 20px;
  }
`;
