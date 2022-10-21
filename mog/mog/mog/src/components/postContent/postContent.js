import styled from "styled-components";
import PostFooter from "./postFooter";
import PostInner from "./postInner";

const PostContent = () => {
  return (
    <PostContentWrap>
      <PostInner />
      <PostFooter />
    </PostContentWrap>
  );
};
export default PostContent;

const PostContentWrap = styled.div`
  width: 49rem;
  margin-inline: auto;
`;
