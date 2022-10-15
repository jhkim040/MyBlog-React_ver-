import styled from "styled-components";
import userPhotoImg from "../../../images/user_profile(48px).png";

const UserProfile = () => {
  return (
    <>
      <UserProfileInner>
        <UserPhoto />
      </UserProfileInner>
    </>
  );
};

export default UserProfile;

const UserProfileInner = styled.div`
  height: 100%;
  margin-right: 22px;
  width: 40px;

  @media (max-width: 612px) {
    display: none;
  }
`;

const UserPhoto = styled.i`
  display: block;
  height: 40px;
  background: url(${userPhotoImg}) no-repeat center center;
  background-size: contain;
`;
