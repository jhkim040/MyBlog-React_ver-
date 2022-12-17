import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
// import { Post } from "../common/container/post/post";

const BlogContent = () => {
  const [boardList, setBoardList] = useState([]);

  useEffect(() => {
    axios
      .get("/board/list")
      .then((res) => {
        setBoardList(res.data);
        // console.log(res);
      })
      .catch((err) => err.toJSON());
  }, []);

  return (
    <>
      {boardList.map((board) => (
        <>
          <BlogContentWrap>
            <BlogContentCategory>
              <a href="#">{board.category}</a>
            </BlogContentCategory>
            <BlogContentTitle>
              <a href="#">{board.title}</a>
            </BlogContentTitle>
          </BlogContentWrap>
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
