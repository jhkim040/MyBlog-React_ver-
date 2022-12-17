import NewArticle from "./newArticle";
import SearchBox from "./searchBox";
import UserProfile from "./userProfile";
import styled from "styled-components";

const TopRightMenu = () => {
  return (
    <>
      <TopRightMenuWrap>
        <SearchBox />
        <NewArticle />
        <UserProfile />
      </TopRightMenuWrap>
    </>
  );
};
export default TopRightMenu;

const TopRightMenuWrap = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
`;
