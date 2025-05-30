import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipecontext } from "../context/RecipeContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const { data, setdata } = useContext(recipecontext);
  const { register, handleSubmit, reset } = useForm();

  const SubmitHandler = (recipe) => {
    recipe.id = nanoid();

    const copydata = [...data];
    copydata.push(recipe);
    setdata(copydata);
    localStorage.setItem("recipes", JSON.stringify(copydata));


    toast.success("Recipe added successfully!");
    reset();
    navigate("/Recipies");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-amber-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-amber-500 px-6 py-4">
            <h1 className="text-2xl sm:text-3xl font-bold text-white">
              Share Your Culinary Masterpiece
            </h1>
            <p className="mt-1 text-amber-100">
              Fill in the details to add your recipe to our collection
            </p>
          </div>

          <form
            onSubmit={handleSubmit(SubmitHandler)}
            className="p-6 sm:p-8 space-y-6"
          >
            {/* Recipe Image URL */}
            <div className="space-y-2">
              <label className="block text-lg font-medium text-gray-800">
                Recipe Image URL
              </label>
              <div className="flex items-center space-x-4">
                <input
                  {...register("image")}
                  type="url"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-base"
                  placeholder="https://example.com/recipe-image.jpg"
                  required
                />
              </div>
              <p className="text-sm text-gray-500">
                Paste a direct image URL for your recipe
              </p>
            </div>

            {/* Recipe Title & Chef */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-lg font-medium text-gray-800">
                  Recipe Title
                </label>
                <input
                  {...register("title")}
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-base"
                  placeholder="e.g. Creamy Garlic Pasta"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="block text-lg font-medium text-gray-800">
                  Chef/Creator
                </label>
                <input
                  {...register("chef")}
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-base"
                  placeholder="Your name or chef's name"
                />
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <label className="block text-lg font-medium text-gray-800">
                Description
              </label>
              <textarea
                {...register("desc")}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-base"
                placeholder="Tell us about this delicious recipe..."
                required
              />
            </div>

            {/* Ingredients */}
            <div className="space-y-2">
              <label className="block text-lg font-medium text-gray-800">
                Ingredients
              </label>
              <textarea
                {...register("ingr")}
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-base font-mono"
                placeholder="Enter each ingredient on a new line:
- 2 cups flour
- 1 tsp salt
- 3 eggs"
                required
              />
            </div>

            {/* Instructions */}
            <div className="space-y-2">
              <label className="block text-lg font-medium text-gray-800">
                Instructions
              </label>
              <textarea
                {...register("inst")}
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-base font-mono"
                placeholder="Enter each step on a new line:
1. Preheat oven to 350°F
2. Mix dry ingredients
3. Add wet ingredients"
                required
              />
            </div>

            {/* Category */}
            <div className="space-y-2">
              <label className="block text-lg font-medium text-gray-800">
                Category
              </label>
              <select
                {...register("category")}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-base"
                required
              >
                <option value="">Select a category</option>
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
                <option value="dessert">Dessert</option>
                <option value="snack">Snack</option>
                <option value="beverage">Beverage</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-3 px-6 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg shadow-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
              >
                Publish Recipe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;