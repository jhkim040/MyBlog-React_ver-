import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PublishContainer from "../components/common/container/publishContainer";
import PublishHeader from "../components/publishContent/publishHeader/publishHeader";

const MogPublish = () => {
  // props.id 게시글 pk --> 수정
  const { id } = useParams();

  return (
    <>
      <PublishHeader />
      <PublishContainer id={id} />
    </>
  );
};

export default MogPublish;
