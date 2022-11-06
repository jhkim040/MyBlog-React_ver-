import styled from "styled-components";
import UserImg from "./userImg";
import UserInfo from "./userInfo";

const UserInfoTop = () => {
  return (
    <UserInfoTopWrap>
      <UserImg />
      <UserInfo />
    </UserInfoTopWrap>
  );
};
export default UserInfoTop;

const UserInfoTopWrap = styled.div`
  width: 100%;
  display: flex;
`;
