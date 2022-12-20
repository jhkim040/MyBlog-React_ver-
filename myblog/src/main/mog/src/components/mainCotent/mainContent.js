import styled from "styled-components";
import ContentInner from "./contentInner";
import MainUserProfile from "./mainUserProfile";

const MainContent = (props) => {
  // props.searchKeyword : 제목(키워드) 검색
  return (
    <MainContentWrap>
      <MainUserProfile />
      <ContentInner searchKeyword={props.searchKeyword} />
    </MainContentWrap>
  );
};
export default MainContent;

const MainContentWrap = styled.div`
  width: 48rem;
  /* display: flex;
  justify-content: center;
  flex-wrap: wrap; */
  /* margin-left: auto;
  margin-right: auto; */
  margin-inline: auto;
`;
