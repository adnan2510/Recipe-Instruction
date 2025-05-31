import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { recipecontext } from "../context/RecipeContext";
import { set, useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SingleRecipies = () => {
  const { data, setdata } = useContext(recipecontext);
  const navigate = useNavigate();
  const params = useParams();
  const recipe = data.find((recipe) => params.id == recipe.id);
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: recipe?.title,
      chef: recipe?.chef,
      image: recipe?.image,
      inst: recipe?.inst,
      desc: recipe?.desc,
      ingr: recipe?.ingr,
      category: recipe?.category,
    },
  });

  const UpdateHandler = (recipe) => {
    const index = data.findIndex((recipe) => params.id == recipe.id);
    const copyrdata = [...data];
    copyrdata[index] = { ...copyrdata[index], ...recipe };
    setdata(copyrdata);
    localStorage.setItem("recipes", JSON.stringify(copyrdata));
    toast.success("Recipe updated successfully!");
  };

  const DeleteHandle = () => {
    const filterdata = data.filter((recipe) => params.id != recipe.id);
    setdata(filterdata);
    localStorage.setItem("recipes", JSON.stringify(filterdata));

    toast.error("Delete Recipe");
    navigate("/Recipies");
  };

  useEffect(() => {
    console.log("SingleRecipe component mounted"); //--> Run When the component Created
    return () => {
      console.log("SingleRecipe component unmounted"); //--> Run When the component Deleted
    };
  }, []); //[] --> Run when component Updated. If Dependency Array is not Present then the component will be rendered (Deleted and Created) else it will be Updated changes only in the view


const FavHandler = () => {}
const UnFavHandler = () => {}


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
        {recipe?.title}
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column */}
        <div className="space-y-8">
          <div className="overflow-hidden rounded-xl shadow-2xl relative">
            {/* Heart Icon - Purely Decorative */}
            <i onClick={FavHandler} className="ri-heart-line absolute top-4 right-4 z-10 p-2 text-red-700 text-4xl bg-white/80 backdrop-blur-sm rounded-full"></i>
            <i onClick={UnFavHandler} className="ri-heart-fill absolute top-4 right-4 z-10 p-2 text-red-700 text-4xl bg-white/80 backdrop-blur-sm rounded-full"></i>

            <img
              src={recipe?.image}
              alt={recipe?.title}
              className="w-full h-96 object-cover"
            />

            {/* Chef Info Overlay (unchanged) */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <div className="flex items-center space-x-4">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <h3 className="text-white text-xl font-semibold">Chef</h3>
                  <p className="text-white text-lg">
                    {recipe?.chef || "Unknown Chef"}
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <h3 className="text-white text-xl font-semibold">Category</h3>
                  <p className="text-white text-lg capitalize">
                    {recipe?.category || "Uncategorized"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Instructions Section */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Cooking Instructions
              </h2>
              <p>{recipe?.inst}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                About This Recipe
              </h2>
              <p className="text-gray-600 leading-relaxed">{recipe?.desc}</p>
            </div>

            {recipe?.ingr && (
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Ingredients
                </h3>
                <p>{recipe.ingr}</p>
              </div>
            )}
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          <form
            onSubmit={handleSubmit(UpdateHandler)}
            className="bg-white p-8 rounded-xl shadow-2xl space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Edit Recipe
            </h2>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Recipe Image URL
              </label>
              <input
                {...register("image")}
                type="url"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                placeholder="Paste image URL"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Recipe Title
              </label>
              <input
                {...register("title")}
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                placeholder="Enter recipe title"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Chef
              </label>
              <input
                {...register("chef")}
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                placeholder="Enter chef's name"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                {...register("desc")}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                placeholder="Describe your recipe..."
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Ingredients
              </label>
              <textarea
                {...register("ingr")}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                placeholder="List ingredients (one per line)"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Instructions
              </label>
              <textarea
                {...register("inst")}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                placeholder="List instructions (one per line)"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <select
                {...register("category")}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg">
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
                <option value="dessert">Dessert</option>
                <option value="snack">Snack</option>
                <option value="beverage">Beverage</option>
              </select>
            </div>

            <div className="flex justify-between gap-4">
              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-lg shadow-md">
                Update Recipe
              </button>
              <button
                type="button"
                onClick={DeleteHandle}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-4 rounded-lg shadow-md">
                Delete Recipe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingleRecipies;
