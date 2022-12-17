import styled from "styled-components";

const AccountCheck = () => {
  return (
    <AccountCheckWrap>
      <AccountCheckBox>
        <NoId>계정이 없으십니까?</NoId>
        <JoinLink href="#">
          <JoinSpan>회원가입</JoinSpan>
        </JoinLink>
      </AccountCheckBox>
    </AccountCheckWrap>
  );
};
export default AccountCheck;

const AccountCheckWrap = styled.div`
  width: 31.5rem;
  margin: 0 auto;
`;

const AccountCheckBox = styled.div`
  text-align: right;
  margin-top: 1.25rem;
`;

const NoId = styled.span`
  font-size: 1.0255rem;
  font-weight: 600;
  margin-right: 0.5rem;
  color: #fcc7e1;
  /* text-shadow: -0.0625rem 0 black, 0 0.0625rem black, 0.0625rem 0 black, 0 -0.0625rem black; */
  /* margin-left: 10rem; */
`;

const JoinLink = styled.a`
  /* border: 0.125rem solid #fcc7e1;
  border-radius: 0.625rem;
  background-color: #ccc; */
`;

const JoinSpan = styled.span`
  font-size: 1.0625rem;
  font-weight: 700;
  /* margin-left: 3.125rem; */
  padding-right: 0.5rem;
  color: #fff;
`;
