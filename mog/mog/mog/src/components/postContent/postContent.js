import styled from "styled-components";
import PostInner from "./postInner";

const PostContent = () => {
  return (
    <PostContentWrap>
      <PostInner />
    </PostContentWrap>
  );
};
export default PostContent;

const PostContentWrap = styled.div`
  width: 49rem;
  margin-inline: auto;
`;
