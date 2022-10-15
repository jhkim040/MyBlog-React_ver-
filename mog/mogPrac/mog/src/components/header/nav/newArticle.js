import styled from "styled-components";

const NewArticle = () => {
  return (
    <>
      <NewArticleInner>
        <NewArticleBtn>새 글 쓰기</NewArticleBtn>
      </NewArticleInner>
    </>
  );
};

export default NewArticle;

const NewArticleInner = styled.div`
  height: 100%;
  margin-right: 22px;
`;
const NewArticleBtn = styled.button`
  width: 100px;
  height: 75%;
  border: none;
  border-radius: 5px;
  outline: none;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: rgb(102, 100, 255);
  transition: 0.1s;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`;
