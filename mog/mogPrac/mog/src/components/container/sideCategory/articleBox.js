import styled from "styled-components";
import { Post } from "../post/post";
import SingleArticle from "./singleArticle";

const ArticleBox = ({ newPostList }) => {
  console.log(newPostList);
  const post = newPostList ? newPostList : Post;
  console.log(post);
  return (
    <>
      {post.map((postList, index) => (
        <>
          <CategoryTitle key={postList.cid} className="categoryTitle">
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
  font-size: 16px;
  font-weight: bold;

  & > a {
    text-decoration: none;
    color: #000;
  }
`;
