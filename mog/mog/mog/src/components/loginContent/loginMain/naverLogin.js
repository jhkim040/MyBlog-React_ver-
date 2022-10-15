import styled from "styled-components";
import NaverLogo from "../../../images/loginImages/naver-icon-file.png";

const NaverLogin = () => {
  return (
    <NaverLoginWrap>
      <NaverLink href="#">
        <NaverImg src={NaverLogo} />
        <NaverSpan>네이버 로그인</NaverSpan>
      </NaverLink>
    </NaverLoginWrap>
  );
};
export default NaverLogin;

const NaverLoginWrap = styled.div`
  width: 100%;
  height: 3.75rem;
  border-radius: 0.625rem;
  border: 0.125rem solid #fcc7e1;
  background-color: #fff;
  /* background-color: yellow; */
  margin: 0.5rem 0;
`;

const NaverLink = styled.a`
  width: 100%;
  border-radius: 0.625rem;
  display: flex;
  position: relative;
`;

const NaverImg = styled.img`
  position: absolute;
  width: 24%;
  margin-right: 1.875rem;
  border-radius: 0.625rem;
  margin-left: 0.875rem;
  clip: rect(0, 3.4rem, 3.4rem, 0);
`;

const NaverSpan = styled.span`
  width: 85%;
  font-size: 1.875rem;
  text-align: center;
  justify-content: center;
  /* text-shadow: -0.0625rem 0 black, 0 0.0625rem black, 0.0625rem 0 black, 0 -0.0625rem black; */
  color: #000;
  font-weight: 700;
  /* font-family: "Cafe24Ssurround"; */
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
