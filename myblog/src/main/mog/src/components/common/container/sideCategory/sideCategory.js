import { useContext } from "react";
import styled from "styled-components";
import { Context } from "../../context/context";
import ArticleBox from "./articleBox";

const SideCategory = () => {
  const { state, dispatch } = useContext(Context);

  return (
    <SideCategoryWrap style={{ display: state ? "block" : "none" }}>
      <SidebarTitle>Category</SidebarTitle>
      <hr />
      <SideCategoryInner>
        <ArticleBox />
      </SideCategoryInner>
      <hr />
      <EditCategoryBox>
        <input type="text" autoComplete="off" />
        <button type="button">ADD</button>
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
