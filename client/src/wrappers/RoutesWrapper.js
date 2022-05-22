import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

//components
import Layout from "../components/Layout";

//pages
import Main from "../pages/Main";

const RoutesWrapper = () => {
  if (true) {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    );
  }
  return <h2>no authorization</h2>;
};

export default RoutesWrapper;
