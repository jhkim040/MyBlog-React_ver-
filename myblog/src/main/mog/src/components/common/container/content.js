import styled from "styled-components";
import MainContent from "../../mainCotent/mainContent";
import SideCategory from "./sideCategory/sideCategory";

const Content = (props) => {
  // props.searchKeyword : 제목(키워드) 검색
  return (
    <>
      <ContentWrap>
        <SideCategory />
        <MainContent searchKeyword={props.searchKeyword} />
      </ContentWrap>
    </>
  );
};
export default Content;

const ContentWrap = styled.div`
  display: flex;
`;
