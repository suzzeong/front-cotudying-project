import Signup from '../components/Signup';
import styled from 'styled-components';
import { colors } from '../theme/theme';

const SignupPage = () => {
  return <StSignup><Signup/></StSignup>;
};

export default SignupPage;

const StSignup = styled.div`
  background-color: ${colors.primary};
  width: 100%;
  height: 100vh;
`
