import styled from "styled-components";
import "./App.css";
import Container from "./components/common/container/container";
import MogLogin from "./pages/mogLogin";
import ContextProvider from "./components/common/context/context";
import MogMain from "./pages/mogMain";
import MogPost from "./pages/mogPost";
import MogUserInfo from "./pages/mogUserInfo";

function App() {
  return (
    <>
      {/* <ContextProvider>
        <MogMain />
      </ContextProvider> */}

      {/* <MogLogin /> */}
      {/* <ContextProvider>
        <MogPost />
      </ContextProvider> */}
      <ContextProvider>
        <MogUserInfo />
      </ContextProvider>
    </>
  );
}

export default App;
