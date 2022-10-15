import styled from "styled-components";
import HideMenu from "./hideMenu";
import Logo from "./logo";

const TopLeftMenu = () => {
  return (
    <>
      <TopLeftMenuInner>
        <HideMenu />
        <Logo />
      </TopLeftMenuInner>
    </>
  );
};
export default TopLeftMenu;

const TopLeftMenuInner = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;
