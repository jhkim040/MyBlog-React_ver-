import styled from "styled-components";
import PublishMainInner from "./publishMainInner";

const PublishMain = (props) => {
  // props.id : 게시글 pk --> 수정
  return (
    <>
      <PublishMainWrap>
        <PublishMainInner
          id={props.id}
          board={props.board}
          setBoard={props.setBoard}
        />
      </PublishMainWrap>
    </>
  );
};
export default PublishMain;

const PublishMainWrap = styled.div`
  width: 49rem;
  /* display: flex;
    justify-content: center;
    flex-wrap: wrap; */
  margin-inline: auto;
`;
