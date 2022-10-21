import PostList from "./postList";
import PostReply from "./postReply";
import styled from "styled-components";
import DownArrow from "../../images/postImages/arrow_down_icon.png";
import UpArrow from "../../images/postImages/arrow_up_icon.png";
import ShareImage from "../../images/postImages/share.png";
import { useCallback, useState, useRef } from "react";

const PostFooter = () => {
  const arrowImg = useRef(null);
  const likePost = useRef(null);

  const [replyOpen, setReplyOpen] = useState(true);
  const [likeColor, setLikeColor] = useState("rgb(102,100,255)");
  const replyOpenHandler = useCallback(() => {
    console.log(replyOpen);
    setReplyOpen(!replyOpen);

    arrowImg.current.style.background = replyOpen
      ? `url(${UpArrow}) no-repeat center`
      : `url(${DownArrow}) no-repeat center`;

    arrowImg.current.style.backgroundSize = "contain";
  }, [replyOpen]);

  const likePostHandler = useCallback(() => {
    likePost.current.style.color = likeColor;
    if (likeColor == "rgb(102,100,255)") {
      setLikeColor("#000");
      likePost.current.innerHTML = "♥";
    } else {
      setLikeColor("rgb(102,100,255)");
      likePost.current.innerHTML = "♡";
    }
    console.log(likeColor);
  }, [likeColor]);

  return (
    <>
      <PostFooterMenu>
        <PostReplyWrap onClick={replyOpenHandler}>
          <span>댓글</span>
          <ArrowImg ref={arrowImg} />
        </PostReplyWrap>
        <PostLove>
          <ShareImg />
          <span onClick={likePostHandler}>
            {" "}
            공감
            <span ref={likePost}>♡</span>
          </span>
        </PostLove>
      </PostFooterMenu>
      <div style={{ display: replyOpen ? "block" : "none" }}>
        <PostReply replyOpen={replyOpen} />
      </div>
      <PostList />
    </>
  );
};
export default PostFooter;

const PostFooterMenu = styled.div`
  font-size: 1.1rem;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-top: 0.125rem solid rgb(102, 100, 255);
`;

const PostReplyWrap = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const PostLove = PostReplyWrap;

const ArrowImg = styled.i`
  width: 1.5rem;
  height: 1.2rem;
  display: inline-block;
  background: url(${DownArrow}) no-repeat center;
  background-size: contain;
`;

const ShareImg = styled.i`
  width: 1.5rem;
  height: 0.95rem;
  margin-right: 1rem;
  display: inline-block;
  background: url(${ShareImage}) no-repeat center;
  background-size: contain;
`;
