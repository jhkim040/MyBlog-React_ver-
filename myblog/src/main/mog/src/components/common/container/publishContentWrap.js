import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import PublishMain from "../../publishContent/publishMain";
import PublishMenu from "./publishMenu/publishMenu";

const PublishContentWrap = (props) => {
  // props.id : 게시글 pk --> 수정
  const id = props.id;
  const [board, setBoard] = useState({
    id: 0,
    category: "",
    title: "",
    content: "",
  });
  // 데이터 조회
  useEffect(() => {
    // id 존재 --> 게시글 수정
    // id 없음 --> 게시글 작성
    if (id) {
      axios
        .get(`/board/view/${id}`)
        .then((res) => {
          setBoard(res.data);
        })
        .catch((err) => err.toJSON());
    }
  }, [id]);

  return (
    <>
      <PublishContentBox>
        <PublishMenu board={board} setBoard={setBoard} />
        <PublishMain id={board.id} board={board} setBoard={setBoard} />
      </PublishContentBox>
    </>
  );
};

export default PublishContentWrap;

const PublishContentBox = styled.div`
  display: flex;
`;
