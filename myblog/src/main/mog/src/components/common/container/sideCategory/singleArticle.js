import styled from "styled-components";

const SingleArticle = (props) => {
  console.log(props);

  const filteredList = props.boardList.filter(
    (board) => board.category === props.category
  );

  return (
    <>
      {filteredList.map((board) => (
        <>
          <SingleArticleInner key={board.id}>
            <a href="#">{board.title}</a>
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
  font-size: 0.875rem;
  font-weight: 500;
  list-style: none;

  & > a {
    text-decoration: none;
    color: #000;
  }
`;
