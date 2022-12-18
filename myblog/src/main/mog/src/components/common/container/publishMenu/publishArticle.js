import { Post } from "../post/post";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const PublishArticle = (props) => {
  // 수정될 게시글
  const board = props.board;

  // 카테고리 리스트 --> 변경할 카테고리 선택
  const [categoryList, setCategoryList] = useState([]);
  const navigate = useNavigate();
  // 게시글 수정
  const boardModfiy = () => {
    console.log(board);
    axios.post(`/board/modify`, board);
    navigate(`/mogmain`);
  };

  useEffect(() => {
    // 카테고리 리스트 조회 (전체 불러오기)
    axios
      .get("/category/list")
      .then((res) => {
        setCategoryList(res.data);
        // console.log(res);
      })
      .catch((err) => err.toJSON());
  }, []);

  // 카테고리 변경
  const onInputChange = (e) => {
    // console.log(board);
    props.setBoard({ ...board, [e.target.name]: e.target.value });
  };
  return (
    <>
      <MenuTitle>
        <h3>카테고리</h3>
        <select
          name="category"
          onChange={(e) => {
            onInputChange(e);
          }}
        >
          {categoryList.map((category) => (
            <>
              <option>{category.name}</option>
            </>
          ))}
        </select>
      </MenuTitle>
      <MenuTitle>
        <h3>공개설정</h3>
      </MenuTitle>
      <MenuTitle>
        <h3>발행설정</h3>
      </MenuTitle>
      <hr />
      <MenuTitle>
        <h3>태그편집</h3>
        <textarea name="editTag" cols="40" rows="5" />
      </MenuTitle>
      <hr />
      <SubmitButton onClick={boardModfiy}>SUBMIT</SubmitButton>
    </>
  );
};

export default PublishArticle;

const MenuTitle = styled.div`
  text-align: left;
  display: flex;
  align-items: center;
  & > h3 {
    font-size: 1.3rem;
    color: gray;
    margin-right: 1rem;
  }
  & > select {
    font-size: 1rem;
    color: gray;
    height: 1.5rem;
    font-family: Cafe24Ssurround;
  }
  & > input {
    width: 10rem;
    height: 5rem;
    align-items: flex-end;
  }
  & > #radio {
    width: 1rem;
    height: 1rem;
  }
`;

const SubmitButton = styled.div`
  width: 6.25rem;
  height: 1.5rem;
  border-radius: 0.3125rem;
  font-size: 1.6rem;
  font-weight: bold;
  color: rgb(102, 100, 255);
  background-color: #fff;
  transition: 0.1s;
  cursor: pointer;
  border: 2px solid rgb(102, 100, 255);
  text-align: center;
  line-height: 1.5rem;
  margin-top: 1rem;
  margin-left: 19rem;
  right: 0;
  padding: 0.5rem;
  font-family: BAUHS93;
  &:hover {
    color: #fff;
    background-color: rgb(102, 100, 255);
  }
`;
