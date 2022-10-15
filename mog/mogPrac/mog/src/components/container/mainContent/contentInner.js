import styled from "styled-components";
import BlogContent from "./blogContent";
import { Post } from "../post/post";

const ContentInner = () => {
  return (
    <>
      <ContentBox>
        <BlogContent />
      </ContentBox>
    </>
  );
};
export default ContentInner;

const ContentBox = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 80px;
  margin-bottom: 80px;
  margin-left: auto;
  margin-right: auto;
  gap: 50px 30px;
  @media (max-width: 719px) {
    max-width: 468px;
  }
  @media (max-width: 478px) {
    justify-content: center;
  }
`;
