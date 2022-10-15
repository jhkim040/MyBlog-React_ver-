import styled from "styled-components";
import TopLeftMenu from "./topLeftMenu/topLeftMenu";
import Nav from "./nav/nav";

const Header = () => {
  return (
    <>
      <HeaderBox>
        <TopLeftMenu />
        <Nav />
      </HeaderBox>
    </>
  );
};

export default Header;

const HeaderBox = styled.div`
  width: 100%;
  height: 55px;
  padding: 20px 0px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  box-shadow: rgb(0 0 0 / 8%) 0px 0px 8px;

  @media (min-width: 1024px) {
    justify-content: space-between;
  }
`;
