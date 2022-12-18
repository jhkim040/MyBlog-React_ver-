import styled from "styled-components";
import PostFooter from "./postFooter/postFooter";
import PostInner from "./postInner";

const PostContent = (props) => {
  // props.id : 게시글 PK --> 상세보기
  return (
    <PostContentWrap>
      <PostInner id={props.id} />
      <PostFooter />
    </PostContentWrap>
  );
};
export default PostContent;

const PostContentWrap = styled.div`
  width: 49rem;
  margin-inline: auto;
`;
