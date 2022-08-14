import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../theme/theme';
import CommonButton from './elements/CommonButton';
import CommonInput from './elements/CommonInput';
import Logo from './Logo';

const Login = () => {
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({
    username: '',
    password: '',
  });
  const [emailFormError, setEmailFormError] = useState(false);
  const [isActive, setIsActive] = useState(true);

  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });

    // const emailRegex =
    //   /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

    // if (e.target.name === 'username') {
    //   if (!e.target.value || emailRegex.test(e.target.value)) {
    //     setEmailFormError(true);
    //     setIsActive(true);
    //   } else {
    //     setEmailFormError(false);
    //     setIsActive(false);
    //   }
    // }

    // if (formValue.email !== '' && formValue.password !== '') {
    //   setIsActive(true);
    // } else {
    //   setIsActive(false);
    // }
  };

  const handleSubmit = async (formValue) => {
    const { data } = await axios.post(
      'http://13.209.21.230:8080/api/member/login',
      formValue
    );
    console.log('???', data);

    // if (formValue.email.trim() !== '' && formValue.password.trim() !== '') {
    //   setIsActive(false);
    // }
  };

  useEffect(() => {
    setEmailFormError(true);
  }, []);

  return (
    <LoginContainer
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(formValue);
      }}
    >
      <Logo />
      <LoginTitle>로그인</LoginTitle>
      <LoginForm>
        <StInputBox>
          <StInput>
            <CommonInput
              type='text'
              value={formValue.username}
              name='username'
              onChange={handleChange}
              label='Email'
              placeholder='Email'
              margin='0 0 40px 0'
            />
            {!emailFormError ? (
              <StMessage>이메일 형식에 맞춰서 입력해주세요</StMessage>
            ) : null}
          </StInput>

          <StInput>
            <CommonInput
              type='password'
              value={formValue.password}
              name='password'
              onChange={handleChange}
              label='Password'
              placeholder='Password'
              margin='0 0 40px 0'
            />
          </StInput>
        </StInputBox>
        <LoginButton>
          <CommonButton
            type='submit'
            bgcolor={colors.primary}
            fontcolor={colors.white}
            width='100%'
            height='50px'
            text='로그인'
            disabled={isActive ? false : true}
            // onClick={(e) => e.preventDefault()}
          />
          <CommonButton
            onClick={() => {
              navigate('/signup');
            }}
            bgcolor={colors.primary}
            fontcolor={colors.white}
            width='100%'
            height='50px'
            text='회원가입'
          />
        </LoginButton>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.form`
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

const LoginForm = styled.div`
  background-color: ${colors.white};
  border-radius: 10px;
  width: 100%;
  max-width: 500px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StInputBox = styled.div`
  height: 200px;

  div + div {
    margin-top: 30px;
  }
`;

const StInput = styled.div`
  position: relative;
`;

const StMessage = styled.p`
  position: absolute;
  left: 0;
  bottom: -24px;
  font-size: 14px;
  color: ${colors.danger};
`;

const LoginButton = styled.div`
  display: flex;
  justify-content: space-between;
  button + button {
    margin-left: 20px;
  }
`;
