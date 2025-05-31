import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from '../utils/axios';

const HomeRecipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`/recipes/${id}`);
        setRecipe(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load recipe');
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (loading) return <div className="text-center py-20">Loading...</div>;
  if (error) return <div className="text-center py-20 text-red-500">{error}</div>;
  if (!recipe) return <div className="text-center py-20">Recipe not found</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-amber-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <Link 
          to="/" 
          className="inline-flex items-center text-red-600 hover:text-red-800 mb-6"
        >
          ← Back to all recipes
        </Link>

        <h1 className="text-4xl font-bold text-red-600 mb-2">{recipe.name}</h1>
        <div className="flex items-center space-x-4 mb-8">
          <span className="text-yellow-700 font-medium">⭐ {recipe.rating} ({recipe.reviewCount} reviews)</span>
          <span className="text-gray-500">•</span>
          <span className="text-gray-700">{recipe.cuisine}</span>
          <span className="text-gray-500">•</span>
          <span className="text-gray-700">{recipe.difficulty}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="relative rounded-xl shadow-2xl overflow-hidden">
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-96 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Prep Time", value: `${recipe.prepTimeMinutes} mins` },
                    { label: "Cook Time", value: `${recipe.cookTimeMinutes} mins` },
                    { label: "Servings", value: recipe.servings },
                    { label: "Calories", value: recipe.caloriesPerServing },
                  ].map((item, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm p-3 rounded-lg">
                      <h3 className="text-white text-sm font-medium">{item.label}</h3>
                      <p className="text-white text-lg">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Ingredients Section */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-semibold text-red-600 mb-6">Ingredients</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span className="text-gray-700">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Instructions Section */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-semibold text-red-600 mb-6">Instructions</h2>
              <ol className="space-y-4">
                {recipe.instructions.map((step, index) => (
                  <li key={index} className="flex">
                    <span className="bg-red-100 text-red-800 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                      {index + 1}
                    </span>
                    <p className="text-gray-700">{step}</p>
                  </li>
                ))}
              </ol>
            </div>

            {/* Additional Info */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-semibold text-red-600 mb-6">Additional Information</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-700 mb-1">Meal Type</h3>
                  <div className="flex flex-wrap gap-2">
                    {recipe.mealType.map((type, index) => (
                      <span key={index} className="bg-amber-100 text-amber-900 px-3 py-1 rounded-full text-sm">
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-gray-700 mb-1">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {recipe.tags.map((tag, index) => (
                      <span key={index} className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeRecipe;
