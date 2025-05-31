import { useEffect, useState } from "react";
import axios from "../utils/axios";
import HomeCard from "../components/HomeCard";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchRecipes = async () => {
    try {
      setLoading(true);
      setError(null);
      const { data } = await axios.get("/recipes");
      setRecipes(data.recipes || data); // Handles both formats
      setLoading(false);
    } catch (err) {
      console.error("Error fetching recipes:", err);
      setError("Failed to load recipes. Please try again.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-amber-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-red-600 mb-2">Delicious Recipes</h1>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            Discover {recipes.length}+ amazing recipes for every occasion.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500"></div>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-red-500 mb-4">{error}</p>
            <button
              onClick={fetchRecipes}
              className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {recipes.map((recipe) => (
                <HomeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>

            {recipes.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">No recipes found</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
