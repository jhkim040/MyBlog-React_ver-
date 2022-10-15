import styled from "styled-components";
import ContentInner from "./contentInner";
import Main_userProfile from "./main_userProfile";

const MainContent = () => {
  return (
    <>
      <MainContentBox>
        <Main_userProfile />
        <ContentInner />
      </MainContentBox>
    </>
  );
};
export default MainContent;

const MainContentBox = styled.div`
  width: 768px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
`;
