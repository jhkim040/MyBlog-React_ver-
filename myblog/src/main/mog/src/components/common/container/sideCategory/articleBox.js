import styled from "styled-components";
import SingleArticle from "./singleArticle";

const ArticleBox = (props) => {
  // props : 카테고리 리스트, 게시글 리스트
  // console.log(props);
  // const newCategoryName = props.category.name;
  const boardList = props.boardList;
  const categoryList = props.categoryList;

  return (
    <>
      {categoryList.length > 0 ? (
        categoryList.map((category) => (
          <>
            <CategoryTitle>
              <a href="#">{category.name}</a>
            </CategoryTitle>
            <ul>
              {/* 카테고리명, 게시글 리스트 props 전달 */}
              <SingleArticle category={category.name} boardList={boardList} />
            </ul>
          </>
        ))
      ) : (
        <CategoryTitle>게시글이 없습니다.</CategoryTitle>
      )}
    </>
  );
};
export default ArticleBox;

const CategoryTitle = styled.h2`
  color: #000;
  text-align: left;
  font-size: 1rem;
  font-weight: bold;

  & > a {
    text-decoration: none;
    color: #000;
  }
`;
