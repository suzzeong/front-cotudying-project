import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { colors } from '../theme/theme';
import CommonButton from './elements/CommonButton';
import CommonInput from './elements/CommonInput';
import Logo from './Logo';

const Signup = () => {
  const initialValues = { id: '', email: '', password: '', passwordcheck: '' };
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

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    // const regex =
    //   /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;
    if (!values.id) {
      errors.id = '이름을 입력해주세요.';
    }
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
    if (!values.passwordcheck) {
      errors.passwordcheck = '비밀번호를 다시 입력해주세요.';
    } else if (values.password !== values.passwordcheck) {
      errors.passwordcheck = '비밀번호가 일치하지 않습니다.';
    }
    return errors;
  };

  return (
    <SignupContainer>
      <Logo />
      <SignupTitle>회원가입</SignupTitle>
      <SignupForm onSubmit={handleSubmit}>
        <div>
          <EmailInput>
            <CommonInput
              type='text'
              value={formValues.id}
              name='id'
              onChange={handleChange}
              label='Id'
              placeholder='Id'
              margin='0 0 20px 0'
            />
          </EmailInput>
          <EmailInput>
            <CommonInput
              type='text'
              value={formValues.email}
              name='email'
              onChange={handleChange}
              label='Email'
              placeholder='Email'
              margin='0 0 20px 0'
            />
          </EmailInput>
          <PasswordInput>
            <CommonInput
              type='password'
              value={formValues.password}
              name='password'
              onChange={handleChange}
              label='Password'
              placeholder='Password'
              margin='0 0 20px 0'
            />
          </PasswordInput>
          <PasswordCheckInput>
            <CommonInput
              type='password'
              value={formValues.passwordcheck}
              name='passwordcheck'
              onChange={handleChange}
              label='Confirm password'
              placeholder='Confirm password'
              margin='0 0 20px 0'
            />
          </PasswordCheckInput>
        </div>
        <LoginButton>
          <CommonButton
            type='submit'
            bgcolor={colors.primary}
            fontcolor={colors.white}
            width='100%'
            height='40px'
            text='회원가입'
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
  width: 500px;
  height: auto;
  padding: 30px 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const EmailInput = styled.div``;

const PasswordInput = styled.div``;

const PasswordCheckInput = styled.div``;

const LoginButton = styled.div`
  display: flex;
  justify-content: center;
  button + button {
    margin-left: 20px;
  }
`;
