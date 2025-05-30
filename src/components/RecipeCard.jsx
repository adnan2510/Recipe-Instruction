import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = (props) => {
  const { id, image, title, desc, chef } = props.recipe;

  return (
    <Link
      to={`/Recipies/details/${id}`}
      className="group block max-w-sm bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">{name}</h2>
        <p className="text-gray-600 text-sm mb-3">
          {desc.slice(0, 100)}...
          <span className="text-blue-500 font-medium"> Read more</span>
        </p>
        <div className="text-sm text-gray-500">
          <p><span className="font-semibold text-gray-700">Chef:</span> {chef}</p>
          <p><span className="font-semibold text-gray-700">Recipe ID:</span> {id}</p>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
