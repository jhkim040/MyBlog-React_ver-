import styled from "styled-components";
import { useInput } from "../../common/customHook/useInput";

const PostReply = () => {
  const [reply, replyHandler] = useInput("");

  return (
    <ReplyFormWrap>
      <ReplyForm action="" method="post">
        <textarea value={reply} onChange={replyHandler}></textarea>
      </ReplyForm>
      <ReplySubmitWrap>
        <ReplySubmit>
          등<br />록
        </ReplySubmit>
      </ReplySubmitWrap>
    </ReplyFormWrap>
  );
};
export default PostReply;

const ReplyFormWrap = styled.div`
  width: 100%;
  height: 5rem;
  padding: 1rem;
  display: flex;
`;

const ReplyForm = styled.form`
  width: 90%;
  height: 5rem;
  /* overflow-y: auto; */

  & > textarea {
    width: 96%;
    height: 100%;
    /* margin: auto 0; */
    border: 0.125rem solid rgb(102, 100, 255);
    border-radius: 0.5rem;
    outline: none;

    /* font-size: 1rem; */
    font-family: "Cafe24Ssurround";
    resize: none;

    &::-webkit-scrollbar {
      width: 0.4375rem;
    }

    &::-webkit-scrollbar-thumb {
      background-color: rgb(102, 100, 255);
      border-radius: 0.625rem;
    }
    &::-webkit-scrollbar-track {
      background-color: lightgray;
      border-radius: 0.625rem;
      box-shadow: inset 0 0 0.3125rem white;
    }
  }
`;

const ReplySubmitWrap = styled.div`
  display: flex;
`;
const ReplySubmit = styled.button`
  /* font-weight: bold; */
  font-family: "Cafe24Ssurround";
  font-size: 1.1rem;
  width: 3rem;
  height: 5.5rem;
  border: none;
  border-radius: 0.5rem;
  background-color: rgb(102, 100, 255);
  color: #fff;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: #fff;
    color: rgb(102, 100, 255);
    border: 0.125rem solid rgb(102, 100, 255);
  }
`;
