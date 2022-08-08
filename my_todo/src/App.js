import React from "react";
import Detail from "./pages/Detail"
import Main from "./pages/Main"
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
  <Routes>
    <Route path="/" exact="true" element={<Main />}></Route>
    <Route path="/Detail/:id"  element={<Detail />}></Route>
  </Routes>);
};

export default App;