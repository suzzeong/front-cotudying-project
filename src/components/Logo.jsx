import styled from "styled-components";
import logo from "../assets/img/logo.png";

const Logo = () => {
  return (
    <StLogoContainer>
      <StLogo>
        <img src={logo} />
      </StLogo>
    </StLogoContainer>
  );
};

export default Logo;

const StLogoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StLogo = styled.div`
  width: 350px;
  cursor: pointer;

  img {
    width: 100%;
  }
`;
