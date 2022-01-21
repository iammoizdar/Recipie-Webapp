import './App.css';
import { useEffect, useState } from 'react';
import Foodrecipe from './Foodrecipe';
function App() {
  const APP_ID = "08dd23f0"
  const APP_KEY = "f1e1fba3b71793719e732e3476eb7d2c"

  const [recipies, setRecipies] = useState([])
  const [search, setSearch] = useState("")
  const [query, setQuery] = useState('chicken')
useEffect(()=>{
  getRecipies()
},[query])

const getRecipies = async()=>{
  const response = await fetch(
    `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    )
  const data = await response.json()
  setRecipies(data.hits)
  console.log(data.hits)
}

const updateSearch = e =>{
  setSearch(e.target.value)
}

const getSearch = e => {
  e.preventDefault()
  setQuery(search)
}
  return (
    <div className="App">
      <h2>Recipe Web App</h2>
      <form onSubmit={getSearch} className='search-form'>
        <div className='search-container'>
        <input type="text" value={search} className='search-bar' onChange={updateSearch} placeholder='Search for Recipies'/>
        
        </div>
        <button className='search-btn'><svg fill="#000000"viewBox="0 0 30 30" width="30px" height="30px"><path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"/></svg></button>
      </form>
      {recipies.map(recipe =>(
        <Foodrecipe title={recipe.recipe.label} calories={recipe.recipe.calories} weight={recipe.recipe.totalWeight} ingredients={recipe.recipe.ingredientLines} mealtype={recipe.recipe.mealType}
        image={recipe.recipe.image} key={recipe.recipe.label}
        />
      ))}
    </div>
  ); 
}

export default App;
