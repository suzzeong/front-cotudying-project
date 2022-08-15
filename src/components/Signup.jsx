import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { colors } from '../theme/theme';
import CommonButton from './elements/CommonButton';
import CommonInput from './elements/CommonInput';
import Logo from './Logo';

const Signup = () => {
  const [inputValue, setInputValue] = useState({
    username: '',
    nickname: '',
    password: '',
    passwordConfirm: '',
  });

  const [formError, setFormError] = useState({
    idError: false,
    nameError: false,
    passwordError: false,
    confirmPasswordError: false,
  });

  const [idCheck, setIdCheck] = useState(false);
  const [isSameId, setIsSameId] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const { username, nickname, password, passwordConfirm } = inputValue;
  const { idError, nameError, passwordError, confirmPasswordError } = formError;

  // username 체크
  const handleChangeusername = (e) => {
    const usernameRegex = /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,20}$/;

    if (!e.target.value || usernameRegex.test(e.target.value)) {
      setIdCheck(false);
      setFormError({ ...formError, idError: false });
    } else {
      setFormError({ ...formError, idError: true });
    }

    setInputValue((prev) => {
      return {
        ...prev,
        username: e.target.value,
      };
    });
  };

  // nickname 체크
  const handleChangeName = (e) => {
    const nameRegex = /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,16}$/;

    if (!e.target.value || nameRegex.test(e.target.value)) {
      setFormError({ ...formError, nameError: false });
    } else {
      setFormError({ ...formError, nameError: true });
    }

    setInputValue((prev) => {
      return {
        ...prev,
        nickname: e.target.value,
      };
    });
  };

  // password 체크
  const handleChangePassword = (e) => {
    const passwordRegex =
      /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*()._-]{6,20}$/;
    if (!e.target.value || passwordRegex.test(e.target.value)) {
      setFormError({ ...formError, passwordError: false });
    } else {
      setFormError({ ...formError, passwordError: true });
    }

    setInputValue((prev) => {
      return {
        ...prev,
        password: e.target.value,
      };
    });
  };

  // password 확인 체크
  const handleChangeConfirmPassword = (e) => {
    if (password === e.target.value) {
      setFormError({ ...formError, confirmPasswordError: false });
    } else {
      setFormError({ ...formError, confirmPasswordError: true });
    }

    setInputValue((prev) => {
      return {
        ...prev,
        passwordConfirm: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://52.79.242.188/api/signup', inputValue);
  };

  const handleIdCheck = (e) => {
    e.preventDefault();
    if (!idError && inputValue.username !== '') {
      setIdCheck(true);
    }
  };

  useEffect(() => {
    if (
      nickname !== '' &&
      username !== '' &&
      password !== '' &&
      passwordConfirm !== '' &&
      !idError &&
      !nameError &&
      !passwordError &&
      !confirmPasswordError &&
      idCheck &&
      !isSameId
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [nickname, username, password, passwordConfirm, idCheck, isSameId]);

  return (
    <SignupContainer>
      <Logo />
      <SignupTitle>회원가입</SignupTitle>
      <SignupForm onSubmit={handleSubmit}>
        <StInputBox>
          <StInput>
            <CommonInput
              type='text'
              value={username}
              name='username'
              onChange={handleChangeusername}
              label='ID'
              placeholder='ID'
              margin='0 0 40px 0'
              maxLength='16'
            />
            <StButtonContainer>
              <CommonButton text='중복확인' onClick={handleIdCheck} />
            </StButtonContainer>

            {idError ? (
              <StMessage>
                2자 이상 16자 이하, 영어 또는 숫자 또는 한글
              </StMessage>
            ) : null}

            {idCheck &&
              (isSameId ? (
                <StMessage>이미 존재하는 아이디입니다.</StMessage>
              ) : (
                <StMessage success='true'>사용 가능한 아이디입니다.</StMessage>
              ))}
          </StInput>

          <StInput>
            <CommonInput
              type='text'
              value={nickname}
              name='nickname'
              onChange={handleChangeName}
              label='nickname'
              placeholder='nickname'
              margin='0 0 40px 0'
              maxLength='16'
            />
            {nameError ? (
              <StMessage>
                2자 이상 16자 이하, 영어 또는 숫자 또는 한글
              </StMessage>
            ) : null}
          </StInput>

          <StInput>
            <CommonInput
              type='password'
              value={password}
              name='password'
              onChange={handleChangePassword}
              label='Password'
              placeholder='Password'
              margin='0 0 40px 0'
              maxLength='16'
            />
            {passwordError ? (
              <StMessage>6자 이상 16자 이하, 영어와 숫자</StMessage>
            ) : null}
          </StInput>

          {/* <StInput>
            <CommonInput
              type='password'
              value={passwordConfirm}
              name='passwordConfirm'
              onChange={handleChangeConfirmPassword}
              label='Confirm password'
              placeholder='Confirm password'
              margin='0 0 40px 0'
              maxLength='16'
            />
            {confirmPasswordError ? (
              <StMessage>비밀번호가 일치하지 않습니다.</StMessage>
            ) : null}
          </StInput> */}
        </StInputBox>

        <LoginButton>
          <CommonButton
            type='submit'
            bgcolor={colors.primary}
            fontcolor={colors.white}
            width='100%'
            height='50px'
            text='회원가입'
            disabled={isActive ? false : true}
          />
        </LoginButton>
      </SignupForm>
    </SignupContainer>
  );
};

export default Signup;

const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const SignupTitle = styled.h1`
  color: ${colors.white};
  margin: 40px 0;
  font-weight: 700;
  font-size: 30px;
`;

const SignupForm = styled.form`
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
  div + div {
    margin-top: 30px;
  }
`;

const StInput = styled.div`
  position: relative;
`;

const LoginButton = styled.div`
  margin-top: 40px;
`;

const StMessage = styled.p`
  position: absolute;
  left: 0;
  bottom: -24px;
  font-size: 14px;
  color: ${(props) => (props.success ? colors.primary : colors.danger)};
`;

const StButtonContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-20%, -50%);
`;
