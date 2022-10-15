import styled from "styled-components";

const SingleArticle = (props) => {
  // console.log(props);
  const board = props.board;
  // console.log(board);
  return (
    <>
      {board.map((post, index) => (
        <>
          <SingleArticleInner key={post.bid}>
            <a href="#">{post.title}</a>
          </SingleArticleInner>
        </>
      ))}
    </>
  );
};
export default SingleArticle;

const SingleArticleInner = styled.li`
  color: #000;
  text-align: left;
  font-size: 14px;
  font-weight: 500;
  list-style: none;

  & > a {
    text-decoration: none;
    color: #000;
  }
`;
