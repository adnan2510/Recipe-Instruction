// components/HomeCard.js
import React from "react";
import { Link } from "react-router-dom";

const HomeCard = ({ recipe }) => {
  const {
    id,
    image,
    name,
    cuisine,
    rating,
    cookTimeMinutes,
    prepTimeMinutes,
    caloriesPerServing,
    difficulty,
    mealType
  } = recipe;

  return (
    <Link
      to={`/home/details/${id}`}
      className="block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full"
    >
      <div className="relative overflow-hidden h-48">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <span className="text-white font-medium">{cuisine}</span>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">{name}</h3>
          <span className="flex items-center bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
            ⭐ {rating}
          </span>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
            {difficulty}
          </span>
          {mealType?.map((type, index) => (
            <span key={index} className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
              {type}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between text-sm text-gray-600">
          <div className="flex items-center">
            <span className="mr-1">⏱️</span>
            {cookTimeMinutes + prepTimeMinutes} min
          </div>
          <div className="flex items-center">
            <span className="mr-1">🔥</span>
            {caloriesPerServing} cal
          </div>
          <div className="flex items-center">
            <span className="mr-1">🍽️</span>
            {recipe.servings} servings
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HomeCard;