import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Share from "../../images/postImages/share.png";

const PostSetting = (props) => {
  const id = props.id; // 게시글 pk

  const navigate = useNavigate(); // 페이지 이동
  // 게시글 삭제
  const boardDelete = () => {
    axios.get(`/board/delete?id=${id}`);
    navigate("/mogmain");
  };
  // 게시글 수정
  const boardModify = () => {
    navigate(`/mogmodify/${id}`);
  };

  return (
    <PostSettingWrap>
      <li onClick={boardModify}>게시글 편집</li>
      <li onClick={boardDelete}>게시글 삭제</li>
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
