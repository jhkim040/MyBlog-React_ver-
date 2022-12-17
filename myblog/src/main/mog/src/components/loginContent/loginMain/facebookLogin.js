import styled from "styled-components";
import FacebookLogo from "../../../images/loginImages/facebook-icon-file.png";

const FacebookLogin = () => {
  return (
    <FacebookLoginWrap>
      <FacebookLink href="#">
        <FacebookImg src={FacebookLogo} />
        <FacebookSpan>페이스북 로그인</FacebookSpan>
      </FacebookLink>
    </FacebookLoginWrap>
  );
};
export default FacebookLogin;

const FacebookLoginWrap = styled.div`
  width: 100%;
  height: 3.75rem;
  border-radius: 0.625rem;
  border: 0.125rem solid #fcc7e1;
  /* background-color: yellow; */
  background-color: #fff;

  margin: 0.5rem 0;
`;

const FacebookLink = styled.a`
  width: 100%;
  border-radius: 0.625rem;
  display: flex;
  position: relative;
`;

const FacebookImg = styled.img`
  position: absolute;
  width: 30%;
  margin-right: 1.875rem;
  border-radius: 0.625rem;
  margin-left: 0.41rem;
  margin-top: -0.45rem;
  clip: rect(0, 3.9rem, 3.9rem, 0);
`;

const FacebookSpan = styled.span`
  width: 85%;
  font-size: 1.875rem;
  text-align: center;
  justify-content: center;
  /* text-shadow: -0.0625rem 0 black, 0 0.0625rem black, 0.0625rem 0 black, 0 -0.0625rem black; */
  color: #000;
  font-weight: 700;
  font-family: "Cafe24Ssurround";
  /* background-color: yellow; */
  /* border-radius: 0.625rem; */
  padding-top: 0.9rem;
  margin-left: 4.24rem;

  &::before {
    content: "";
    width: 0.125rem;
    height: 2.8125rem;
    background-color: #ccc;
    position: absolute;
    top: 15%;
    left: 20%;
  }
`;
