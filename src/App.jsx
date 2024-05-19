import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Ordering from "./components/Ordering";
import Settings from "./components/Settings";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Ordering />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="" />
    </Routes>
  );
};

export default App;
