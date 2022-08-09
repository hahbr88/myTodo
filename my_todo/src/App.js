import React from "react";
import Detail from "./pages/Detail"
import Main from "./pages/Main"
import { Routes, Route } from "react-router-dom";
import WriteBook from "./pages/WriteBook";

const App = () => {
  return (
  <Routes>
    <Route path="/" exact="true" element={<Main />}></Route>
    <Route path="/Detail/:id"  element={<Detail />}></Route>
    <Route path="/WriteBook"  element={<WriteBook />}></Route>
  </Routes>);
};

export default App;