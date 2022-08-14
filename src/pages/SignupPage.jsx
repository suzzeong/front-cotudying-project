import Signup from '../components/Signup';
import styled from 'styled-components';
import { colors } from '../theme/theme';
import Container from 'react-bootstrap/Container';

const SignupPage = () => {
  return (
    <StSignup>
      <StContainer>
        <Signup />
      </StContainer>
    </StSignup>
  );
};

export default SignupPage;

const StSignup = styled.div`
  background-color: ${colors.primary};
  width: 100%;
  height: 100vh;
`;

const StContainer = styled(Container)`
  height: 100%;
`;
