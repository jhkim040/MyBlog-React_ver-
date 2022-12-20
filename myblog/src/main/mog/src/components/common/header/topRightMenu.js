import NewArticle from "./newArticle";
import SearchBox from "./searchBox";
import UserProfile from "./userProfile";
import styled from "styled-components";

const TopRightMenu = (props) => {
  return (
    <>
      <TopRightMenuWrap>
        <SearchBox
          searchKeyword={props.searchKeyword}
          setSearchKeyword={props.setSearchKeyword}
        />
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
