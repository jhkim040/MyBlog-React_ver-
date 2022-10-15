import "./App.css";
import Container from "./components/container/container";
import ContextProvider from "./components/context/context";
import Main from "./pages/main";

function App() {
  return (
    <>
      <ContextProvider>
        <Main />
      </ContextProvider>
    </>
  );
}

export default App;
