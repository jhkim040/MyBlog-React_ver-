import styled from "styled-components";
import SearchIcon from "../../../images/headerImages/search_icon.png";

const SearchBox = () => {
  return (
    <>
      <SearchBoxWrap>
        <input type="text" autoComplete="off"></input>
        <SearchBtn />
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
