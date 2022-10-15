import FacebookLogin from "./facebookLogin";
import GoogleLogin from "./googleLogin";
import KakaoLogin from "./kakaoLogin";
import NaverLogin from "./naverLogin";
import styled from "styled-components";

const LoginBox = () => {
  return (
    <LoginSection>
      <LoginBoxWrap>
        <KakaoLogin />
        <NaverLogin />
        <FacebookLogin />
        <GoogleLogin />
      </LoginBoxWrap>
    </LoginSection>
  );
};
export default LoginBox;

const LoginSection = styled.div`
  width: 31.25rem;
  height: 100%;
  margin: 0 auto;
  /* border: 0.1875rem solid #fcc7e1; */
  border-radius: 0.625rem;
  margin-top: 1.25rem;
`;

const LoginBoxWrap = styled.div`
  /* background-color: #fff; */
  border-radius: 0.4375rem;
`;
