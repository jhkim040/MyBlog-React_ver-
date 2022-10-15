import styled from "styled-components";
import ArticleBox from "./articleBox";
import { Context } from "../../context/context";
import { useCallback, useContext, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { INSERT_CATEGORY } from "../../reducer/categoryReducer";
import { Post } from "../post/post";

const SideCategory = () => {
  const { state, dispatch } = useContext(Context);

  const categoryState = useSelector((state) => state.CategoryReducer);
  const [newCategory, setNewCategory] = useState("");
  const categoryInput = useRef(null);
  const sideCategoryInner = useRef(null);

  // const onChangeCategory = useCallback(
  //   (e) => {
  //     setCategory(e.target.value);
  //     // console.log("카테고리 : " + e.target.value);
  //   },
  //   [category]
  // );

  const categoryDispatch = useDispatch();
  const onAddCategory = useCallback(() => {
    categoryDispatch({
      type: INSERT_CATEGORY,
      data: {
        cid: categoryState[categoryState.length - 1].cid + 1,
        category: categoryInput.current.value,
      },
    });
    setNewCategory("");
    categoryInput.current.value = "";
    setTimeout(() => {
      // 추가된 category로 focus
      sideCategoryInner.current.scrollTop =
        sideCategoryInner.current.scrollHeight;
    }, 100);
    // console.log(categoryState);
  }, [categoryState]);

  const onEnterAddState = useCallback(
    (e) => {
      if (e.key === "Enter") {
        categoryDispatch({
          type: INSERT_CATEGORY,
          data: {
            cid: categoryState[categoryState.length - 1].cid + 1,
            category: categoryInput.current.value,
          },
        });
        setNewCategory("");
        categoryInput.current.value = "";
        setTimeout(() => {
          // 추가된 category로 focus
          sideCategoryInner.current.scrollTop =
            sideCategoryInner.current.scrollHeight;
        }, 100);
      }
      // console.log(categoryState);
    },
    [categoryState]
  );
  return (
    <>
      <SideCategoryWrap style={{ display: state ? "block" : "none" }}>
        <SidebarTitle>Category</SidebarTitle>
        <hr />
        <SideCategoryInner ref={sideCategoryInner}>
          <ArticleBox newPostList={categoryState} />
        </SideCategoryInner>
        <hr />
        <EditCategoryBox>
          <input
            type="text"
            autoComplete="off"
            // value={category}
            ref={categoryInput}
            // onChange={onChangeCategory}
            onKeyPress={onEnterAddState}
          />
          <button type="button" onClick={onAddCategory}>
            ADD
          </button>
        </EditCategoryBox>
      </SideCategoryWrap>
    </>
  );
};
export default SideCategory;

const SideCategoryWrap = styled.div`
  width: 180px;
  height: calc(100vh - 85px);
  background-color: #fff;
  padding-top: 5px;
  position: fixed;
  top: 85px;
  left: 0;
  border-top: 2px solid rgb(102, 100, 255);
  border-right: 2px solid rgb(102, 100, 255);
  border-top-right-radius: 15px;

  @media (max-width: 1100px) {
    display: none;
  }
`;

const SidebarTitle = styled.h2`
  font-size: 18px;
  text-align: center;
`;

const SideCategoryInner = styled.div`
  height: 80%;
  padding: 0 30px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgb(102, 100, 255);
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: lightblue;
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }
`;

const EditCategoryBox = styled.div`
  margin: 10px 0;

  display: flex;
  justify-content: center;

  & > input {
    width: 60%;
    border: 0.0625rem solid rgb(102, 100, 255);
    border-radius: 0.2rem;
  }
  & > button {
    width: 30%;
    border-radius: 0.2rem;
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
