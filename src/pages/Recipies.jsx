import React, { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";

const Recipies = () => {
  const { data } = useContext(recipecontext);
  // console.log(data);
  const renderrecipe = data.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe} />
  ));

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Recipes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.length > 0 ? renderrecipe : <p>No recipes found.</p>}
      </div>
    </div>
  );
};

export default Recipies;
