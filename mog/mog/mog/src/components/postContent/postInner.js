import { useCallback, useState } from "react";
import styled from "styled-components";
import PostSetting from "./postSetting";
import PostSettingBtn from "./postSettingBtn";

const PostInner = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openSettingHandler = useCallback(() => {
    console.log(isOpen);
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <PostWrap>
      <PostTitleWrap>
        <PostTitleBox>
          <PostTitle>제목</PostTitle>
          <PostSubTitle>부제목</PostSubTitle>
          <div>
            <PostWriter>작성자</PostWriter>

            <PostDate>등록날짜</PostDate>
          </div>
        </PostTitleBox>
        <PostSettingBox>
          <div onClick={openSettingHandler}>
            <PostSettingBtn />
          </div>
          <settingOpenner style={{ display: isOpen ? "block" : "none" }}>
            <PostSetting />
          </settingOpenner>
        </PostSettingBox>
      </PostTitleWrap>

      <PostContentWrap>내용</PostContentWrap>
    </PostWrap>
  );
};
export default PostInner;
const PostWrap = styled.div`
  width: 100%;
  height: 100%;
  /* border: 1px solid black; */
  margin-top: 9.375rem;
`;

const PostTitleWrap = styled.div`
  padding: 1rem;
  display: flex;
  border-bottom: 0.125rem solid rgb(102, 100, 255);
  box-shadow: 0rem 1.25rem 1.25rem -1.125rem rgb(102, 100, 255, 0.2);
`;

const PostTitleBox = styled.div`
  width: 45rem;
  & > div {
    display: flex;
  }
`;

const PostTitle = styled.div`
  font-size: 3rem;
`;

const PostSubTitle = styled.div`
  font-size: 1.5rem;
  padding-block: 1rem;
`;

const PostWriter = styled.div`
  margin-right: 2rem;
`;

const PostDate = styled.div`
  position: relative;
  z-index: 1;
  color: #cfcfcf;
  &::before {
    position: absolute;
    content: "";
    width: 0.0625rem;
    height: 0.8125rem;
    border-left: 0.125rem solid #cfcfcf;
    top: 0.15rem;
    margin-left: -0.3125rem;
  }
`;

const PostContentWrap = styled.div`
  padding: 1rem;
`;

const PostSettingBox = styled.div`
  width: 125px;
  height: auto;
`;

const settingOpenner = styled.div`
  position: relative;
`;
