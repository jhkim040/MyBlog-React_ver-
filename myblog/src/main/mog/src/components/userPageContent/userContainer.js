import styled from "styled-components";
import UserInfoBottom from "./userContainerBottom/userInfoBottom";
import UserInfoTop from "./userContainerTop/userInfoTop";

const UserContainer = () => {
  return (
    <>
      <UserContainerWrap>
        <UserInfoTop />
        <UserInfoBottom />
      </UserContainerWrap>
    </>
  );
};
export default UserContainer;

const UserContainerWrap = styled.div`
  margin-top: 9.375rem;
  width: 49rem;

  margin-inline: auto;
`;
