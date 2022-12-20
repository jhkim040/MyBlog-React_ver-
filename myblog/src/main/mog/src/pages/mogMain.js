import { useState } from "react";
import Container from "../components/common/container/container";
import Header from "../components/common/header/header";

const MogMain = () => {
  const [searchKeyword, setSearchKeyword] = useState(""); // 우측 상단 제목(키워드) 검색
  return (
    <>
      <Header
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
      />
      <Container searchKeyword={searchKeyword} />
    </>
  );
};
export default MogMain;
