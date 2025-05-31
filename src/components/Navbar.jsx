// import React from 'react'
// import { NavLink } from 'react-router-dom'

// const Navbar = () => {
//   return (
//     <div className="h-12 bg-white flex items-center justify-center space-x-4 sticky top-0 z-10">
//       <NavLink 
//         to={"/"} 
//         className={({isActive}) => isActive ? "text-blue-500 font-medium" : "text-gray-600"}
//       >
//         Home
//       </NavLink>
//       <NavLink 
//         to={"/About"} 
//         className={({isActive}) => isActive ? "text-blue-500 font-medium" : "text-gray-600"}
//       >
//         About
//       </NavLink>
//       <NavLink 
//         to={"/Recipies"} 
//         className={({isActive}) => isActive ? "text-blue-500 font-medium" : "text-gray-600"}
//       >
//         Recipies
//       </NavLink>
//       <NavLink 
//         to={"/create-recipies"} 
//         className={({isActive}) => isActive ? "text-blue-500 font-medium" : "text-gray-600"}
//       >
//         Create
//       </NavLink>
//     </div>
//   )
// }

// export default Navbar

import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/About", label: "About" },
    { to: "/Recipies", label: "Recipies" },
    { to: "/create-recipies", label: "Create" },
    { to: "/Fav", label: "Favorites" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-12 relative">
        {/* Logo */}
        <div className="text-xl font-bold text-blue-600">COOK BOOK HUB</div>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6">
          {links.map(({ to, label }) => (
            <NavLink
              key={label}
              to={to}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 font-medium"
                  : "text-gray-600 hover:text-blue-500 transition-colors"
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden relative z-50">
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="text-gray-600 hover:text-blue-500 focus:outline-none focus:text-blue-500"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown overlay menu */}
      <div
        className={`md:hidden absolute top-12 left-0 right-0 bg-white shadow-md overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out z-40 ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col px-4 py-2 space-y-2">
          {links.map(({ to, label }) => (
            <NavLink
              key={label}
              to={to}
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 font-medium"
                  : "text-gray-600 hover:text-blue-500 transition-colors"
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
