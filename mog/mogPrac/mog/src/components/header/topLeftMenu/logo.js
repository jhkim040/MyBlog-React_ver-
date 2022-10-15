import styled from "styled-components";
import logoImg from "../../../images/mog_logo.png";

const Logo = () => {
  return (
    <>
      <LogoInner />
    </>
  );
};

export default Logo;

const LogoInner = styled.div`
  width: 160px;
  height: 100%;
  background: url(${logoImg}) no-repeat center center;
  background-size: cover;

  @media (max-width: 612px) {
    display: none;
  }
`;
