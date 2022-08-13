import React from 'react';
import Login from '../components/Login';
import styled from 'styled-components';
import { colors } from '../theme/theme';

const LoginPage = () => {
  return <StLogin><Login/></StLogin>;
};

export default LoginPage;

const StLogin = styled.div`
  background-color: ${colors.primary};
  width: 100%;
  height: 100vh;
`