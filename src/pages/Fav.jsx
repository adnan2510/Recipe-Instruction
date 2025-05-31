import React from "react";
import RecipeCard from "../components/RecipeCard";

const Fav = () => {
  const favrite = JSON.parse(localStorage.getItem("fav")) || [];
  const renderrecipe = favrite.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe} />
  ));

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-orange-100 via-amber-100 to-yellow-50">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-orange-600">
        Your Favorite Recipes
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {favrite.length > 0 ? renderrecipe : (
          <p className="text-center text-gray-600 col-span-full text-lg">
            No favorites found. Start adding some tasty picks!
          </p>
        )}
      </div>
    </div>
  );
};

export default Fav;
