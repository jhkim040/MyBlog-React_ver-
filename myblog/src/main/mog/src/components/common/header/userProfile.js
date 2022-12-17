import styled from "styled-components";
import UserProfileImg from "../../../images/headerImages/user_profile(48px).png";

const UserProfile = () => {
  return (
    <>
      <UserProfileWrap>
        <UserPhoto></UserPhoto>
      </UserProfileWrap>
    </>
  );
};
export default UserProfile;

const UserProfileWrap = styled.div`
  width: 2.5rem;
  height: 100%;
  margin-right: 2.5rem;
  @media (max-width: 612px) {
    display: none;
  }
`;

const UserPhoto = styled.i`
  display: block;
  height: 2.5rem;
  background: url(${UserProfileImg}) no-repeat center center;
  background-size: contain;
`;
