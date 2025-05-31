import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Recipies from "../pages/Recipies";
import Create from "../pages/Create";
import SingleRecipies from "../pages/SingleRecipies";
import PageNotFound from "../pages/PageNotFound";
import Fav from "../pages/Fav";
import HomeRecipe from "../pages/HomeRecipe";

const Mainrouter = () => {
  return (
    <div className="h-[calc(100vh-3rem)] overflow-y-auto scrollbar-hide">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home/details/:id" element={<HomeRecipe />} />
        <Route path="/Recipies" element={<Recipies />} />
        <Route path="/Recipies/details/:id" element={<SingleRecipies />} />
        <Route path="/create-recipies" element={<Create />} />
        <Route path="/About" element={<About />} />
        <Route path="/Fav" element={<Fav />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default Mainrouter;