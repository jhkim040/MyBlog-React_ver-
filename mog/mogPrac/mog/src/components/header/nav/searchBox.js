import styled from "styled-components";
import searchIcon from "../../../images/search_icon.png";

const SearchBox = () => {
  return (
    <>
      <SearchBoxInner>
        <SearchInput />
        <SearchBtn />
      </SearchBoxInner>
    </>
  );
};

export default SearchBox;

const SearchBoxInner = styled.div`
  height: 100%;
  margin-right: 22px;
  width: 180px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 536px) {
    width: 35%;
  }
`;
const SearchInput = styled.input`
  width: 77%;
  /* margin-top: 18%; */
  height: 45%;
  outline: none;
  border: none;
  border-bottom: 1px solid #000;
  @media (max-width: 536px) {
    width: 60%;
  }
`;

const SearchBtn = styled.i`
  display: inline-block;
  width: 30px;
  height: 30px;
  /* margin-top: 10%; */
  background: url(${searchIcon}) no-repeat center center;
  background-size: contain;
  cursor: pointer;
`;
