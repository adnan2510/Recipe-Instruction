import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-amber-100 to-yellow-50 p-6 sm:p-10">
      <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-md rounded-xl shadow-2xl p-8">
        <h1 className="text-4xl font-bold text-center text-orange-600 mb-6">
          About Us
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Welcome to <span className="font-semibold text-orange-500">FlavorNest</span> – your ultimate destination for delicious and easy-to-follow recipes! Whether you're a seasoned chef or just starting out in the kitchen, our platform offers a wide variety of recipes to inspire and satisfy your culinary cravings.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          🌟 What We Offer
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Curated recipes from around the world</li>
          <li>User-friendly editing and saving of your own recipes</li>
          <li>Favorite feature to save your top dishes</li>
          <li>Responsive design for all devices</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          👨‍🍳 Our Mission
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          We aim to bring the joy of cooking to every home by offering a space where creativity meets simplicity. Cooking shouldn't be stressful — it should be flavorful, fun, and shared.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          📬 Contact Us
        </h2>
        <p className="text-gray-700 text-lg">
          Have feedback, suggestions, or just want to say hi? Reach out at:{" "}
          <a
            href="mailto:memanmoadnan5259@gmail.com"
            className="text-orange-500 font-medium hover:underline"
          >
            memanmoadnan5259@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default About;
