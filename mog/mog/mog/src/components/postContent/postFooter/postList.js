import styled from "styled-components";
import PrevBtnImg from "../../../images/postImages/previous.png";
import NextBtnImg from "../../../images/postImages/next.png";

const PostList = () => {
  return (
    <PostListWrap>
      <PrevBtn />
      <PostListNum>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
      </PostListNum>
      <NextBtn />
    </PostListWrap>
  );
};
export default PostList;

const PostListWrap = styled.div`
  width: 100%;
  margin-block: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PostListNum = styled.ul`
  /* width: 30%; */
  /* margin: 0 auto; */
  list-style: none;
  display: flex;
  padding: 0;
  & li {
    margin-inline: 1rem;
  }
`;

const PrevBtn = styled.span`
  width: 1rem;
  height: 1rem;
  background: url(${PrevBtnImg});
  background-size: cover;
`;

const NextBtn = styled.span`
  width: 1rem;
  height: 1rem;
  background: url(${NextBtnImg});
  background-size: cover;
`;
