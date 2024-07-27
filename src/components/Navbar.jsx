import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../context";

const Navbar = () => {

    const {searchInput, setSearchInput, handleSubmit} = useContext(GlobalContext) 
    console.log(searchInput)

    


  return (
    <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
      <h2 className="text-2xl font-semibold ">
        <li>
          <NavLink
            to={"/"}
            className="text-black hover:text-teal-500 duration-300"
          >
            Search Any Food Recipe!
          </NavLink>
        </li>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          value={searchInput}
          onChange={(e)=> setSearchInput(e.target.value)}
          placeholder="Enter Item to Search..."
          className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-teal-100 focus:shadow-teal-200 "
        />
      </form>
      <ul className="flex gap-5">
        <li>
          <NavLink
            to={"/"}
            className="text-black hover:text-teal-500 duration-300"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/favorites"}
            className="text-black hover:text-teal-500 duration-300"
          >
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
