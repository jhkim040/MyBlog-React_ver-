import styled from "styled-components";
import { Post } from "../post/post";

const BlogContent = () => {
  return (
    <>
      {Post.map((post, index) => (
        <>
          {post.board.map((content, idx) => (
            <BlogContentBox>
              <BlogContentCategory>{post.category}</BlogContentCategory>
              <BlogContentTitle>{content.title}</BlogContentTitle>
            </BlogContentBox>
          ))}
        </>
      ))}
    </>
  );
};
export default BlogContent;

const BlogContentBox = styled.div`
  width: 150px;
  height: 150px;
  border: 2px solid rgb(102, 100, 255);
  border-radius: 15px;
  text-align: left;
  padding: 30px;
`;

const BlogContentCategory = styled.h2`
  margin-bottom: 40px;
  & > a {
    text-decoration: none;
    color: #000;
  }
`;

const BlogContentTitle = styled.h3`
  & > a {
    text-decoration: none;
    color: #000;
  }
`;
