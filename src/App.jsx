import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Hoe from "./Hoe.jsx";
import Login from "./Login.jsx";

const App = () => {
  return (
    <div className="bg-[#f1f3f6]  pb-[140px] md:pb-0">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hoe />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
