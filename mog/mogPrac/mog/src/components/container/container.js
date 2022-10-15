import styled from "styled-components";
import Content from "./content";

const Container = () => {
  return (
    <>
      <ContainerInner>
        <Content />
      </ContainerInner>
    </>
  );
};
export default Container;

const ContainerInner = styled.div`
  padding-top: 150px;
`;
