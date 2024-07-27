import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";


export const GlobalContext = createContext(null)



export default function GlobalState({children}){
    const [recipeDetails, setRecipeDetails] = useState(null)
    const [searchInput, setSearchInput] = useState('')
    const [loading, setLoading] = useState(false)
    const [recipeList, setRecipeList] = useState([])
    const [favoriteList, setFavoriteList] = useState([])

    const navigate = useNavigate()

    async function handleSubmit(e){
        e.preventDefault();
        try{
            setLoading(true)
            const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchInput}`)
            const data = await res.json()
            console.log(data)
            if(data?.data?.recipes){
                setRecipeList(data?.data?.recipes)
                setLoading(false)
                setSearchInput('')
                navigate('/')
            }
        }catch(err){
            setLoading(false)
            console.log({error: err.message})
        }
    }
 
    function handleAddToFavorite(currentItem){
        let cpyFavoriteList = [...favoriteList];
        const index = cpyFavoriteList.findIndex(item => item.id === currentItem.id)
        if(index === -1){
            cpyFavoriteList.push(currentItem)
        }else{
                cpyFavoriteList.splice(index)
        }
        setFavoriteList(cpyFavoriteList)
    }
 
 
    console.log(favoriteList, 'favoriteList')

    return <GlobalContext.Provider value={{searchInput,recipeDetails, setRecipeDetails, setSearchInput,loading, recipeList,favoriteList, handleSubmit, handleAddToFavorite}}>{children}</GlobalContext.Provider>
}a