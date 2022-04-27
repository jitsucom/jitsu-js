import React from "react"
import { usePageView } from "@jitsu/react";
import { Route, Routes } from "react-router";
import Page from "./Page";
import Main from "./Main";

const App = () => {
  usePageView() // this hook will send pageview track event on router change

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="page" element={<Page />} />
    </Routes>
  );
}

export default App;
