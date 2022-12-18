import axios from "axios";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Context } from "../../context/context";
import ArticleBox from "./articleBox";

const SideCategory = () => {
  const [boardList, setBoardList] = useState([]); // 게시글 리스트
  const [categoryList, setCategoryList] = useState([]); // 카테고리 리스트

  // 데이터 조회
  useEffect(() => {
    // 게시글 리스트 조회 (전체 불러오기)
    axios
      .get("/board/list")
      .then((res) => {
        setBoardList(res.data);
        // console.log(res);
      })
      .catch((err) => err.toJSON());
    // 카테고리 리스트 조회 (전체 불러오기)
    axios
      .get("/category/list")
      .then((res) => {
        setCategoryList(res.data);
        // console.log(res);
      })
      .catch((err) => err.toJSON());
  }, []);

  // 카테고리 추가 input form
  const categoryInput = useRef(null);
  // 좌측 사이드 카테고리 메뉴
  const sideCategoryInner = useRef(null);
  // 좌측 사이드 카테고리 메뉴 펼치기 or 닫기
  const { state, dispatch } = useContext(Context);
  // 카테고리 추가
  const [category, setCategory] = useState({
    name: "",
  });
  const { name } = category;

  const onInputChange = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
  };
  // useNavigate : 페이지 이동할 때 사용
  //  const navigate = useNavigate();

  const onSubmit = async (e) => {
    // 카테고리 메뉴에서 새로운 카테고리 추가
    try {
      e.preventDefault();
      // console.log(category);
      await axios.post("http://localhost:8080/category/insert", category); // post 전달
      setCategoryList([...categoryList, category]); // front의 카테고리 리스트도 상태 변경 --> rerender
    } catch (err) {
      console.log(err);
    }
    // navigate("/mogmain");
  };

  // 카테고리 추가 버튼 클릭
  const onAddCategory = useCallback(() => {
    // 입력 form 공백으로 초기화
    categoryInput.current.value = "";
    setTimeout(() => {
      // 추가된 category로 focus
      sideCategoryInner.current.scrollTop =
        sideCategoryInner.current.scrollHeight;
    }, 100);
    // console.log(categoryState);
  }, []);

  // 카테고리 추가 엔터키
  const onEnterAddState = useCallback((e) => {
    if (e.key === "Enter") {
      // 입력 form 공백으로 초기화
      categoryInput.current.value = "";
      setTimeout(() => {
        // 추가된 category로 focus
        sideCategoryInner.current.scrollTop =
          sideCategoryInner.current.scrollHeight;
      }, 100);
    }
    // console.log(categoryState);
  }, []);

  return (
    <SideCategoryWrap style={{ display: state ? "block" : "none" }}>
      <SidebarTitle>Category</SidebarTitle>
      <hr />
      <SideCategoryInner ref={sideCategoryInner}>
        {/* 카테고리, 게시글 리스트 props 전달 */}
        <ArticleBox categoryList={categoryList} boardList={boardList} />
      </SideCategoryInner>
      <hr />
      <EditCategoryBox onSubmit={(e) => onSubmit(e)}>
        <input
          type="text"
          autoComplete="off"
          name="name"
          // value={name}
          ref={categoryInput}
          onKeyPress={onEnterAddState}
          onChange={(e) => onInputChange(e)}
        />
        <button type="submit" onClick={onAddCategory}>
          ADD
        </button>
      </EditCategoryBox>
    </SideCategoryWrap>
  );
};
export default SideCategory;

const SideCategoryWrap = styled.div`
  z-index: 2;
  width: 11.25rem;
  height: calc(100vh - 7.9rem);
  background-color: #fff;
  padding: 0.3125rem 0 1.875rem;
  position: fixed;
  top: 5.3875rem;
  left: 0;
  border-top: 0.125rem solid rgb(102, 100, 255);
  border-right: 0.125rem solid rgb(102, 100, 255);
  border-bottom: 0.125rem solid rgb(102, 100, 255);
  border-top-right-radius: 0.9375rem;
  border-bottom-right-radius: 0.9375rem;

  /* @media (max-width: 1100px) {
        display: none;
    } */
`;

const SidebarTitle = styled.h2`
  font-size: 1.125rem;
  text-align: center;
`;

const SideCategoryInner = styled.div`
  height: 86%;
  padding: 0 1.875rem;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 0.4375rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgb(102, 100, 255);
    border-radius: 0.625rem;
  }
  &::-webkit-scrollbar-track {
    background-color: lightgray;
    border-radius: 0.625rem;
    box-shadow: inset 0 0 0.3125rem white;
  }
`;

const EditCategoryBox = styled.form`
  margin: 0.625rem 0;

  display: flex;
  justify-content: center;

  & > input {
    width: 60%;
  }
  & > button {
    width: 30%;
    outline: none;
    border: none;
    background-color: rgb(102, 100, 255);
    color: #fff;
    cursor: pointer;
  }
  & > button:hover {
    opacity: 0.6;
  }
`;
