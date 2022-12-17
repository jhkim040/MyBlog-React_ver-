import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import SingleArticle from "./singleArticle";

const ArticleBox = () => {
  const [boardList, setBoardList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    axios
      .get("/board/list")
      .then((res) => {
        setBoardList(res.data);
        // console.log(res);
      })
      .catch((err) => err.toJSON());
  }, []);

  useEffect(() => {
    axios
      .get("/category/list")
      .then((res) => {
        setCategoryList(res.data);
        // console.log(res);
      })
      .catch((err) => err.toJSON());
  }, []);
  return (
    <>
      {categoryList.map((category) => (
        <>
          <CategoryTitle key={category.id}>
            <a href="#">{category.name}</a>
          </CategoryTitle>
          <ul>
            <SingleArticle category={category.name} boardList={boardList} />
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
