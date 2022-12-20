import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import { Post } from "../common/container/post/post";

const BlogContent = (props) => {
  // props.searchKeyword : 제목(키워드) 검색
  const [boardList, setBoardList] = useState([]);
  const searchKeyword = props.searchKeyword;
  useEffect(() => {
    // 기본 요청
    let boardListUrl = "/board/list";
    // 제목 검색 --> 검색 키워드 back 전달
    if (searchKeyword) {
      boardListUrl += `?searchKeyword=${searchKeyword}`;
    }
    console.log(boardListUrl);
    axios
      .get(boardListUrl)
      .then((res) => {
        setBoardList(res.data);
        // console.log(res);
      })
      .catch((err) => err.toJSON());
  }, [searchKeyword]);

  return (
    <>
      {boardList.map((board) => (
        <>
          <BlogContentWrap>
            <BlogContentCategory>
              <Link to={`/mogpost/${board.id}`}>{board.category}</Link>
            </BlogContentCategory>
            <BlogContentTitle>
              <Link to={`/mogpost/${board.id}`}>{board.title}</Link>
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
