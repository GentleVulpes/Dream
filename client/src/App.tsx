import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import RegisterProduct from "./components/form/RegisterProduct";

const App = () => {
  return (
    <div className="bg-main-600 h-full w-full">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin/register_product" element={<RegisterProduct/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
