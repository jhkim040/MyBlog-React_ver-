import { Post } from "../post/post";
import styled from "styled-components";

const PublishArticle = () => {
  console.log(Post);

  return (
    <>
      <MenuTitle>
        <h3>카테고리</h3>
        <select>
          {Post.map((postList, index) => (
            <>
              <option>{postList.category}</option>
            </>
          ))}
        </select>
      </MenuTitle>
      <MenuTitle>
        <h3>공개설정</h3>
      </MenuTitle>
      <MenuTitle>
        <h3>발행설정</h3>
      </MenuTitle>
      <hr />
      <MenuTitle>
        <h3>태그편집</h3>
        <textarea name="editTag" cols="40" rows="5" />
      </MenuTitle>
      <hr />
      <SubmitButton>SUBMIT</SubmitButton>
    </>
  );
};

export default PublishArticle;

const MenuTitle = styled.div`
  text-align: left;
  display: flex;
  align-items: center;
  & > h3 {
    font-size: 1.3rem;
    color: gray;
    margin-right: 1rem;
  }
  & > select {
    font-size: 1rem;
    color: gray;
    height: 1.5rem;
    font-family: Cafe24Ssurround;
  }
  & > input {
    width: 10rem;
    height: 5rem;
    align-items: flex-end;
  }
  & > #radio {
    width: 1rem;
    height: 1rem;
  }
`;

const SubmitButton = styled.div`
  width: 6.25rem;
  height: 1.5rem;
  border-radius: 0.3125rem;
  font-size: 1.6rem;
  font-weight: bold;
  color: rgb(102, 100, 255);
  background-color: #fff;
  transition: 0.1s;
  cursor: pointer;
  border: 2px solid rgb(102, 100, 255);
  text-align: center;
  line-height: 1.5rem;
  margin-top: 1rem;
  margin-left: 19rem;
  right: 0;
  padding: 0.5rem;
  font-family: BAUHS93;
  &:hover {
    color: #fff;
    background-color: rgb(102, 100, 255);
  }
`;
