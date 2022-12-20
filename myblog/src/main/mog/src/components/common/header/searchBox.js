import { useRef } from "react";
import styled from "styled-components";
import SearchIcon from "../../../images/headerImages/search_icon.png";

const SearchBox = (props) => {
  const titleRef = useRef(); // title input
  // 입력시 자동 검색 ------------------------
  // const onInputChange = (e) => {
  //   props.setSearchKeyword(e.target.value);
  // };
  // 검색 아이콘 클릭 시 검색 -------------------
  const onClickSearch = () => {
    props.setSearchKeyword(titleRef.current.value);
  };
  return (
    <>
      <SearchBoxWrap>
        <input
          type="text"
          name="searchKeyword"
          autoComplete="off"
          ref={titleRef}
          // onChange={(e) => {
          //   onInputChange(e);
          // }}
        ></input>
        <SearchBtn type="button" onClick={onClickSearch} />
      </SearchBoxWrap>
    </>
  );
};
export default SearchBox;

const SearchBoxWrap = styled.form`
  width: 11.25rem;
  height: 100%;
  margin-right: 1.375rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > input {
    width: 77%;
    height: 45%;
    outline: none;
    border: none;
    border-bottom: 1px solid #000;
  }
  @media (max-width: 536px) {
    & > input {
      width: 60%;
    }
  }
`;

const SearchBtn = styled.button`
  display: inline-block;
  width: 2rem;
  height: 2rem;
  background: url(${SearchIcon}) no-repeat center center;
  background-size: contain;
  cursor: pointer;
  border: none;
`;
