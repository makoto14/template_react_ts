import { css } from "@emotion/react";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Sub from "./pages/sub";
import { store } from "./store/store";

const App: React.VFC = () => {
  return (
    <div
      css={css`
        background-color: #eaeef3;
        padding: 78px 16px 16px 16px;
        min-height: 100%;
      `}
    >
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path={`/main`} element={<Main />} />
            <Route path={`/Sub`} element={<Sub />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
};
export default App;
