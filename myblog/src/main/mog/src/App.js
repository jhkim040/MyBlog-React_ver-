import styled from "styled-components";
import "./App.css";
import Container from "./components/common/container/container";
import MogLogin from "./pages/mogLogin";
import ContextProvider from "./components/common/context/context";
import MogMain from "./pages/mogMain";
import MogPost from "./pages/mogPost";
import MogUserInfo from "./pages/mogUserInfo";
import MogPublish from "./pages/mogPublish";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MogLogin />} />
            <Route path="/mogmain" element={<MogMain />} />
            <Route path="/mogpost/:id" element={<MogPost />} />
            <Route path="/mogpublish" element={<MogPublish />} />
            <Route path="/moguserinfo" element={<MogUserInfo />} />
            {/* <ContextProvider>
        <MogMain />
      </ContextProvider>
      <ContextProvider>
        <MogPublish />
      </ContextProvider>

      <MogLogin />
      <ContextProvider>
        <MogPost />
      </ContextProvider>
      <ContextProvider>
        <MogUserInfo />
      </ContextProvider> */}
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </>
  );
}

export default App;
