import styled from "styled-components";
import PublishHideMenu from "./publishHideMenu";
import SaveButton from "./saveButton";
import { Context } from "../../common/context/context";
import { useContext } from "react";

const PublishHeaderTopRight = () => {
  //   const { state, dispatch } = useContext(Context);

  return (
    <>
      <TopRightMenuWrap>
        <SaveButton />
        <PublishHideMenu />
      </TopRightMenuWrap>
    </>
  );
};
export default PublishHeaderTopRight;

const TopRightMenuWrap = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
`;
