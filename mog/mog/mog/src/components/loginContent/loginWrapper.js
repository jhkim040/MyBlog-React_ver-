import styled from "styled-components";
import WrapImg from "../../images/loginImages/bg-cloud.png";

const LoginWrapper = () => {
  return <LoginBackground />;
};
export default LoginWrapper;

const LoginBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-width: 520px;
  min-height: 620px;
  z-index: -1;
  background: url(${WrapImg}) no-repeat center fixed;
  background-size: cover;
`;
