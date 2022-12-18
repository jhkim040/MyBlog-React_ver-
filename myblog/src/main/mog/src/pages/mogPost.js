import { useParams } from "react-router-dom";
import SideCategory from "../components/common/container/sideCategory/sideCategory";
import Header from "../components/common/header/header";
import PostContent from "../components/postContent/postContent";

const MogPost = () => {
  // 게시글 상세보기 위한 게시글 PK
  const { id } = useParams();
  // console.log(id);
  return (
    <>
      <Header />
      <SideCategory />
      <PostContent id={id} />
    </>
  );
};
export default MogPost;
