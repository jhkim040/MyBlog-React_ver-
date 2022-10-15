import styled from "styled-components";
import KakaoLogo from "../../../images/loginImages/kakao-icon-style.png";

const KakaoLogin = () => {
  return (
    <KakaoLoginWrap>
      <KakaoLink href="#">
        <KakaoImg src={KakaoLogo} />
        <KakaoSpan>카카오 로그인</KakaoSpan>
      </KakaoLink>
    </KakaoLoginWrap>
  );
};
export default KakaoLogin;

const KakaoLoginWrap = styled.div`
  width: 100%;
  height: 3.75rem;
  border-radius: 0.625rem;
  border: 0.125rem solid #fcc7e1;
  /* background-color: yellow; */
  margin: 0.5rem 0;
  background-color: #fff;
`;

const KakaoLink = styled.a`
  width: 100%;
  border-radius: 0.4rem;
  display: flex;
  position: relative;
`;

const KakaoImg = styled.img`
  width: 10%;
  border-radius: 0.625rem;
  margin-left: 1.125rem;
  margin-top: 0.3rem;
`;

const KakaoSpan = styled.span`
  width: 85%;
  font-size: 1.875rem;
  text-align: center;
  justify-content: center;
  /* text-shadow: -0.0625rem 0 black, 0 0.0625rem black, 0.0625rem 0 black, 0 -0.0625rem black; */
  font-weight: 700;
  font-family: "Cafe24Ssurround";
  /* background-color: yellow; */
  border-radius: 0.625rem;
  padding-top: 0.9rem;
  color: #000;

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
