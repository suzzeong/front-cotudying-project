import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../theme/theme';
import CommonButton from './elements/CommonButton';
import CommonInput from './elements/CommonInput';
import Logo from './Logo';

const Login = () => {
  const navigate = useNavigate();

  const initialValues = { email: '', password: '' };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    // console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  console.log(formErrors);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    // const regex =
    //   /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;
    if (!values.email) {
      errors.email = '이메일을 입력해주세요.';
    } else if (!regex.test(values.email)) {
      errors.email = '이메일 형식에 맞춰 입력해주세요.';
    }
    if (!values.password) {
      errors.password = '비밀번호를 입력해주세요.';
    } else if (values.password.length < 4) {
      errors.password = '비밀번호를 4글자 이상 입력해주세요.';
    }
    return errors;
  };

  return (
    <LoginContainer>
      <Logo />
      <LoginTitle>로그인</LoginTitle>
      <LoginForm onSubmit={handleSubmit}>
        {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div>로그인에 성공했습니다.</div>
        ) : (
          <></>
        )}
        <StInputBox>
          <StInput>
            <CommonInput
              type='text'
              value={formValues.email}
              name='email'
              onChange={handleChange}
              label='Email'
              placeholder='Email'
              margin='0 0 40px 0'
            />
            <StMessage>{formErrors.email}</StMessage>
          </StInput>

          <StInput>
            <CommonInput
              type='password'
              value={formValues.password}
              name='password'
              onChange={handleChange}
              label='Password'
              placeholder='Password'
              margin='0 0 40px 0'
            />
            <StMessage>{formErrors.password}</StMessage>
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
            // disabled={disabled}
            onClick={(e) => e.preventDefault()}
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
  bottom: 0;
`;

const LoginButton = styled.div`
  display: flex;
  justify-content: space-between;
  button + button {
    margin-left: 20px;
  }
`;
