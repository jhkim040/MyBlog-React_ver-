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
  width: 6.25rem;
  border: 0.0625rem solid #000;
  list-style: none;
  padding: 0.625rem;
  line-height: 2rem;
  position: absolute;
  background-color: #fff;

  & > li {
    cursor: pointer;
  }
  & > li:hover {
    opacity: 0.6;
  }

  & > li:last-child {
    position: relative;
  }
`;

const ShareImg = styled.i`
  width: 0.9375rem;
  height: 0.9375rem;
  background: url(${Share}) no-repeat center;
  background-size: contain;
  display: inline-block;
  position: absolute;
    top: 0.40625rem;
    right: 1rem;
}
`;
