import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../theme/theme';
import CommonButton from './elements/CommonButton';
import CommonInput from './elements/CommonInput';
import Logo from './Logo';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // useEffect(() => {
  //   setDisabled(!(email && password && !errorMessage));
  // }, [email, password, errorMessage]);

  // 공백 제거
  const removeWhitespace = (mail) => {
    const regex = /\s/g;
    // return mail.replace(regex, '');
    console.log(mail)
  };
  

  // email형식 확인
  const validateEmail = (email) => {
    removeWhitespace(email)
    const regex =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    return regex.test(email);
  };

  const handleInputEmail = (e) => {
    // const changedEmail = removeWhitespace(email);
    // setEmail(changedEmail);
    // setErrorMessage(
    //   validateEmail(changedEmail) ? '' : 'Please verify your email'
    // );
    setEmail(e.target.value);
    console.log(e.target);
  };
  console.log(email);

  // const handleInputPassword = (password) => {
  //   // setPassword(removeWhitespace(password));
  // };

  const handleSigninBtnPress = (email) => {
    console.log(validateEmail(email));
  };

  return (
    <LoginContainer>
      <Logo />
      <LoginTitle>로그인</LoginTitle>
      <LoginForm>
        <div>
          <EmailInput>
            <CommonInput
              type='email'
              value={email}
              name='user_id'
              onChange={handleInputEmail}
              label='Email'
              placeholder='Email'
              margin='0 0 20px 0'
            />
          </EmailInput>
          <PasswordInput>
            <CommonInput
              type='password'
              value={password}
              name='user_pw'
              // onChange={handleInputPassword}
              label='Password'
              placeholder='Password'
              margin='0 0 20px 0'
            />
          </PasswordInput>
        </div>
        <LoginButton>
          <CommonButton
            type='button'
            bgcolor={colors.primary}
            fontcolor={colors.white}
            width='100%'
            height='40px'
            text='로그인'
            onClick={() => {handleSigninBtnPress()}}
            disabled={disabled}
          />
          <CommonButton
            onClick={() => {
              navigate('/signup');
            }}
            bgcolor={colors.primary}
            fontcolor={colors.white}
            width='100%'
            height='40px'
            text='회원가입'
          />
        </LoginButton>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;

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
  justify-content: space-between;
  button + button {
    margin-left: 20px;
  }
`;
