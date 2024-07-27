import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context";
import Favorites from "./Favorites";

const Details = () => {
  const { recipeDetails, setRecipeDetails, handleAddToFavorite, favoriteList } = useContext(GlobalContext);
  const { id } = useParams();

  useEffect(() => {
    async function getDetails() {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const data = await res.json();
      if (data?.data) {
        setRecipeDetails(data?.data);
      }
    }

    getDetails();
  }, []);

  console.log(recipeDetails);
  return (
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="row-start-2 lg:row-start-auto">
        <div className="h-96 overflow-hidden rounde-xl group">
          <img
            src={recipeDetails?.recipe?.image_url}
            className="w-full h-full object-cover block group-hover:scale-105 duration-300"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3 ">
        <span className="text-sm text-green-900 font-medium">
          {recipeDetails?.recipe?.publisher}
        </span>
        <h3 className="font-bold text-2xl truncate text-black">
          {recipeDetails?.recipe?.title}
        </h3>
        <div>
          <button onClick={()=>handleAddToFavorite(recipeDetails?.recipe)} className="p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inline-block bg-black shadow-md text-white ">
            {
              favoriteList.findIndex(item => item.id === recipeDetails?.recipe?.id) !== -1? 'Remove From Favorites': 'Add To Favorite'
            }
          </button>
        </div>
        <div>
          <span className="text-2xl font-semibold text-black ">
            Ingredients
          </span>
          <ul className="flex flex-col gap-3 ">
            {recipeDetails?.recipe?.ingredients.map((ingredient) => (
              <li>
                <span className="text-2xl font-semibold text-black"> 
                  {ingredient.quantity} {ingredient.unit}
                </span>
                <span className="text-2xl font-semibold text-black">{ingredient.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Details;
