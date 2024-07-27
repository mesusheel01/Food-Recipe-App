import React, { useContext } from 'react'
import { GlobalContext } from '../../context'
import RecipeItem from '../RecipeItem'

const Home = () => {

  const {loading, recipeList} = useContext(GlobalContext)

  if(loading)<div className='text-2xl animate-bounce transition-all'>Loading...</div>

  return (
    <div className='py-8 container mx-auto flex flex-wrap justify-center gap-10'>
      {
        recipeList && recipeList.length> 0? 
        recipeList.map((item)=>(
          <RecipeItem item={item} />
        ))
        : <div className='lg:text-4xl text-xl text-center text-black font-extrabold animate-bounce '>
          <p>Search for your favorite recipe...</p>
        </div>
      }
    </div>
  )
}

export default Home
