import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Recipies from "../pages/Recipies";
import Create from "../pages/Create";
import SingleRecipies from "../pages/SingleRecipies";

const Mainrouter = () => {
  return (
    <div className="h-[calc(100vh-3rem)] overflow-y-auto scrollbar-hide">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Recipies" element={<Recipies />} />
        <Route path="/Recipies/details/:id" element={<SingleRecipies />} />
        <Route path="/create-recipies" element={<Create />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  );
};

export default Mainrouter;