import styled from "styled-components";
import Share from "../../images/postImages/share.png";

const PostSetting = () => {
  return (
    <PostSettingWrap>
      <PostEdit>게시글 편집</PostEdit>
      <PostDelete>게시글 삭제</PostDelete>
      <PostShare>
        공유하기
        <ShareImg />
      </PostShare>
    </PostSettingWrap>
  );
};
export default PostSetting;

const PostSettingWrap = styled.div``;

const PostEdit = styled.div``;

const PostDelete = styled.div``;

const PostShare = styled.div``;

const ShareImg = styled.div``;
