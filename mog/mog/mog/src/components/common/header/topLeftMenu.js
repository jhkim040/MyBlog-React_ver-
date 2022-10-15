import HeaderLogo from "./headerLogo";
import HideMenu from "./hideMenu";
import styled from "styled-components";

const TopLeftMenu = () => {
  return (
    <>
      <TopLeftMenuWrap>
        <HideMenu />
        <HeaderLogo />
      </TopLeftMenuWrap>
    </>
  );
};
export default TopLeftMenu;

const TopLeftMenuWrap = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;
