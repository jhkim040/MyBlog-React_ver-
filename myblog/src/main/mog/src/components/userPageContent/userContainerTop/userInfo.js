import styled from "styled-components";

const UserInfo = () => {
  return (
    <>
      <UserInfoWrap>
        <UserName>ㅠㅠㅠㅠ</UserName>
        <UserStateWrap>
          <UserStateMessage>
            상태메시지ㅠㅠㅠㅠㅠㅠㅠㅠㅠaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠ
          </UserStateMessage>
          <UserEdit href="#">수정하기</UserEdit>
        </UserStateWrap>
      </UserInfoWrap>
    </>
  );
};
export default UserInfo;

const UserInfoWrap = styled.div`
  width: 100%;
  margin-left: 3rem;
  padding-top: 2rem;
`;

const UserName = styled.div`
  margin-bottom: 2rem;
  font-size: 1.875rem;
  font-weight: bold;
`;

const UserStateWrap = styled.div`
  width: 100%;
  margin: 0.625rem 0;
  display: flex;
  justify-content: space-between;
`;

const UserStateMessage = styled.div`
  width: 85%;
  font-size: 1.4375rem;
  word-break: break-all;
`;

const UserEdit = styled.a`
  width: 15%;
  margin-left: 10rem;

  &:visited {
    text-decoration: none;
  }
`;
