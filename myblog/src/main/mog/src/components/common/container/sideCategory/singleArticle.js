import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const SingleArticle = (props) => {
  // props : 카테고리 명, 전체 게시글 리스트
  // console.log(props);

  // 전달받은 카테고리에 해당하는 게시글만 filter
  const filteredList = props.boardList.filter(
    (board) => board.category === props.category
  );

  return (
    <>
      {filteredList.length > 0 &&
        filteredList.map((board) => (
          <>
            <SingleArticleInner key={board.id}>
              {/* 클릭 --> 게시글 상세 보기 */}
              <Link to={`/mogpost/${board.id}`}>{board.title}</Link>
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
