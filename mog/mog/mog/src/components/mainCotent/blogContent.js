import styled from "styled-components";
import { Post } from "../common/container/post/post";

const BlogContent = () => {
  return (
    <>
      {Post.map((post) => (
        <>
          {post.board.map((content) => (
            <BlogContentWrap>
              <BlogContentCategory>
                <a href="#">{post.category}</a>
              </BlogContentCategory>
              <BlogContentTitle>
                <a href="#">{content.title}</a>
              </BlogContentTitle>
            </BlogContentWrap>
          ))}
        </>
      ))}
    </>
  );
};
export default BlogContent;

const BlogContentWrap = styled.div`
  width: 9.375rem;
  height: 9.375rem;
  border: 0.125rem solid rgb(102, 100, 255);
  border-radius: 0.9375rem;
  text-align: left;
  padding: 1.875rem;
`;

const BlogContentCategory = styled.h2`
  margin-bottom: 2.5rem;
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
