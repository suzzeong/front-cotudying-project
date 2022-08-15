import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { colors } from '../theme/theme';
import CommonButton from './elements/CommonButton';
import CommonInput from './elements/CommonInput';
import Logo from './Logo';

const Signup = () => {
  const [inputValue, setInputValue] = useState({
    userId: '',
    name: '',
    password: '',
    confirmPassword: '',
  });

  const [formError, setFormError] = useState({
    idError: false,
    nameError: false,
    passwordError: false,
    confirmPasswordError: false,
  });

  const [idCheck, setIdCheck] = useState(false);
  const [isSameId, setIsSameId] = useState(false);

  const { userId, name, password, confirmPassword } = inputValue;
  const { idError, nameError, passwordError, confirmPasswordError } = formError;
  const [isActive, setIsActive] = useState(false);

  // userId 체크
  const handleChangeUserId = (e) => {
    const userIdRegex = /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,20}$/;

    if (!e.target.value || userIdRegex.test(e.target.value)) {
      setIdCheck(false);
      setFormError({ ...formError, idError: false });
    } else {
      setFormError({ ...formError, idError: true });
    }

    setInputValue((prev) => {
      return {
        ...prev,
        userId: e.target.value,
      };
    });
  };

  // name 체크
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
        name: e.target.value,
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
        confirmPassword: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // await axios.post('', inputValue);
  };

  const handleIdCheck = (e) => {
    e.preventDefault();
    if (!idError && inputValue.userId !== '') {
      setIdCheck(true);
    }
  };

  useEffect(() => {
    if (
      name !== '' &&
      userId !== '' &&
      password !== '' &&
      confirmPassword !== '' &&
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
  }, [name, userId, password, confirmPassword, idCheck, isSameId]);

  return (
    <SignupContainer>
      <Logo />
      <SignupTitle>회원가입</SignupTitle>
      <SignupForm onSubmit={handleSubmit}>
        <StInputBox>
          <StInput>
            <CommonInput
              type='text'
              value={userId}
              name='userId'
              onChange={handleChangeUserId}
              label='ID'
              placeholder='ID'
              margin='0 0 40px 0'
              maxLength='20'
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
              value={name}
              name='name'
              onChange={handleChangeName}
              label='nickname'
              placeholder='nickname'
              margin='0 0 40px 0'
              maxLength='50'
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
              maxLength='20'
            />
            {passwordError ? (
              <StMessage>6자 이상 16자 이하, 영어와 숫자</StMessage>
            ) : null}
          </StInput>

          <StInput>
            <CommonInput
              type='password'
              value={confirmPassword}
              name='confirmPassword'
              onChange={handleChangeConfirmPassword}
              label='Confirm password'
              placeholder='Confirm password'
              margin='0 0 40px 0'
              maxLength='20'
            />
            {confirmPasswordError ? (
              <StMessage>비밀번호가 일치하지 않습니다.</StMessage>
            ) : null}
          </StInput>
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
