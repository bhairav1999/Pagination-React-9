import React from "react";
import "./App.css";
import Stories from "./Stories";
import Search from "./Search";
import Pagination from "./Pagination";

function App() {
  return (
    <>
    <Search/>
    <Pagination/>
      <Stories />
    </>
  );
}

export default App;
