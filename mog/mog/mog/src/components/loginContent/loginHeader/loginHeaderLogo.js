import styled from "styled-components";
import MogLogoImg from "../../../images/loginImages/MogLogo2.png";

const LoginHeaderLogo = () => {
  return (
    <div>
      <a href="#">
        <LoginLogoImg src={MogLogoImg} />
      </a>
    </div>
  );
};
export default LoginHeaderLogo;

const LoginLogoImg = styled.img`
  width: 5.625rem;
  margin: 1.875rem 0 0 3.125rem;
`;
