import styled from "styled-components";
import Content from "./content";

const Container = () => {
  return (
    <>
      <ContainerWrap>
        <Content />
      </ContainerWrap>
    </>
  );
};
export default Container;

const ContainerWrap = styled.div`
  padding-top: 9.375rem;
  /* 150px */
`;
