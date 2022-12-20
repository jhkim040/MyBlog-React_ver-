import styled from "styled-components";
import Content from "./content";

const Container = (props) => {
  // props.searchKeyword : 제목(키워드) 검색
  return (
    <>
      <ContainerWrap>
        <Content searchKeyword={props.searchKeyword} />
      </ContainerWrap>
    </>
  );
};
export default Container;

const ContainerWrap = styled.div`
  padding-top: 9.375rem;
  /* 150px */
`;
