import styled from "styled-components";
import NewArticle from "./newArticle";
import SearchBox from "./searchBox";
import UserProfile from "./userProfile";

const Nav = () => {
  return (
    <>
      <NavInner>
        <SearchBox />
        <NewArticle />
        <UserProfile />
      </NavInner>
    </>
  );
};
export default Nav;

const NavInner = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
`;
