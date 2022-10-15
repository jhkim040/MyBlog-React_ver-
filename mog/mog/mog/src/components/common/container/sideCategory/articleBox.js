import styled from "styled-components";
import { Post } from "../post/post";
import SingleArticle from "./singleArticle";

const ArticleBox = () => {
  //  console.log(Post);
  return (
    <>
      {Post.map((postList) => (
        <>
          <CategoryTitle key={postList.cid}>
            <a href="#">{postList.category}</a>
          </CategoryTitle>
          <ul>
            <SingleArticle board={postList.board} />
          </ul>
        </>
      ))}
    </>
  );
};
export default ArticleBox;

const CategoryTitle = styled.h2`
  color: #000;
  text-align: left;
  font-size: 1rem;
  font-weight: bold;

  & > a {
    text-decoration: none;
    color: #000;
  }
`;
