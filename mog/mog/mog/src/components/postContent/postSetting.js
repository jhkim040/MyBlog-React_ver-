import styled from "styled-components";
import Share from "../../images/postImages/share.png";

const PostSetting = () => {
  return (
    <PostSettingWrap>
      <li>게시글 편집</li>
      <li>게시글 삭제</li>
      <li>
        공유하기
        <ShareImg />
      </li>
    </PostSettingWrap>
  );
};
export default PostSetting;

const PostSettingWrap = styled.ul`
  width: 100px;
  border: 1px solid black;
  list-style: none;
  padding: 10px;
  line-height: 32px;

  & > li:last-child {
    position: relative;
  }
`;

const ShareImg = styled.i`
  width: 15px;
  height: 15px;
  background: url(${Share}) no-repeat center;
  background-size: contain;
  display: inline-block;
  position: absolute;
    top: 6.5px;
    right: 16px;
}
`;
