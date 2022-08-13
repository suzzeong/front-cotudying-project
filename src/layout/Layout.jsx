import styled from "styled-components";
import Container from "react-bootstrap/Container";

const Layout = ({ children }) => {
  return <StContainer>{children}</StContainer>;
};

export default Layout;

const StContainer = styled(Container)`
  height: 100%;
`;
