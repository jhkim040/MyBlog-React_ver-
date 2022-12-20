import styled from "styled-components";
import BlogContent from "./blogContent";

const ContentInner = (props) => {
  // props.searchKeyword : 제목(키워드) 검색
  return (
    <ContentWrap>
      <BlogContent searchKeyword={props.searchKeyword} />
    </ContentWrap>
  );
};
export default ContentInner;

const ContentWrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  /* margin-top: 5rem;
    margin-bottom: 5rem; */
  margin-block: 5rem;
  /* margin-left: auto;
    margin-right: auto; */
  margin-inline: auto;
  gap: 3.125rem 1.875rem;
  @media (max-width: 719px) {
    max-width: 29.25rem;
  }
  @media (max-width: 478px) {
    justify-content: center;
  }
`;
