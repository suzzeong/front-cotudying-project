import Login from '../components/Login';
import styled from 'styled-components';
import { colors } from '../theme/theme';
import Container from 'react-bootstrap/Container';

const LoginPage = () => {
  return (
    <StLogin>
      <StContainer>
        <Login />
      </StContainer>
    </StLogin>
  );
};

export default LoginPage;

const StLogin = styled.div`
  background-color: ${colors.primary};
  width: 100%;
  height: 100vh;
`;

const StContainer = styled(Container)`
  height: 100%;
`;
