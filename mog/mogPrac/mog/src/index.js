import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// 리덕스 설정
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./components/reducer/_index";

// dev-tools 미들웨어 적용
import { composeWithDevTools } from "redux-devtools-extension";
const store = createStore(rootReducer, composeWithDevTools());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // store 앱 상위에 넣기
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
