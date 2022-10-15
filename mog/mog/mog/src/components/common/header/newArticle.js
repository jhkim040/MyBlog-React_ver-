import styled from "styled-components";

const NewArticle = () => {
  return (
    <>
      <NewArticleWrap>
        <NewArticleBtn type="button">새 글 쓰기</NewArticleBtn>
      </NewArticleWrap>
    </>
  );
};
export default NewArticle;

const NewArticleWrap = styled.div`
  height: 100%;
  margin-right: 1.375rem;
`;

const NewArticleBtn = styled.button`
  width: 6.25rem;
  height: 75%;
  font-size: 1rem;
  font-weight: bold;
  color: rgb(102, 100, 255);
  background-color: #fff;
  border: 2px solid rgb(102, 100, 255);
  border-radius: 0.3125rem;
  outline: none;
  transition: 0.1s;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: rgb(102, 100, 255);
    border: none;
  }
`;
