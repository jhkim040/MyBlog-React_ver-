import styled from "styled-components";
import PublishContentWrap from "./publishContentWrap";

const PublishContainer = (props) => {
  // props.id : 게시글 pk --> 수정
  return (
    <>
      <PublishContainerWrap>
        <PublishContentWrap id={props.id} />
      </PublishContainerWrap>
    </>
  );
};

export default PublishContainer;

const PublishContainerWrap = styled.div`
  padding-top: 9.375rem;
`;
