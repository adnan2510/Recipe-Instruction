import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="h-12 bg-white flex items-center justify-center space-x-4 sticky top-0 z-10">
      <NavLink 
        to={"/"} 
        className={({isActive}) => isActive ? "text-blue-500 font-medium" : "text-gray-600"}
      >
        Home
      </NavLink>
      <NavLink 
        to={"/About"} 
        className={({isActive}) => isActive ? "text-blue-500 font-medium" : "text-gray-600"}
      >
        About
      </NavLink>
      <NavLink 
        to={"/Recipies"} 
        className={({isActive}) => isActive ? "text-blue-500 font-medium" : "text-gray-600"}
      >
        Recipies
      </NavLink>
      <NavLink 
        to={"/create-recipies"} 
        className={({isActive}) => isActive ? "text-blue-500 font-medium" : "text-gray-600"}
      >
        Create
      </NavLink>
    </div>
  )
}

export default Navbar