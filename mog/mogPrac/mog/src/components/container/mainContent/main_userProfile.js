import styled from "styled-components";
import userPhotoImg from "../../../images/user_profile(128px).png";

const Main_userProfile = () => {
  return (
    <>
      <Main_userProfileWrap>
        <UserPhotoInner></UserPhotoInner>
        <div>
          <UserName>김종현(핑크중독자)</UserName>
          <UserMsg>코딩 접을 듯...</UserMsg>
        </div>
      </Main_userProfileWrap>
    </>
  );
};
export default Main_userProfile;

const Main_userProfileWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const UserPhotoInner = styled.div`
  width: 150px;
  height: 150px;
  margin-right: 100px;
  background: url(${userPhotoImg}) no-repeat center;
  background-size: contain;

  @media (max-width: 536px) {
    margin-right: 25px;
  }
`;

const UserName = styled.h2`
  color: #000;
  font-size: 30px;
  font-weight: bold;
  @media (max-width: 536px) {
    font-size: 24px;
  }
`;

const UserMsg = styled.p`
  color: #000;
  font-size: 20px;
  font-weight: 500;
  @media (max-width: 536px) {
    font-size: 18px;
  }
`;
