import React, {useEffect, useState} from "react";
import './App.css';
import Recipe from "./Recipe";

const App = () => {

  const APP_ID = 'ea7129ef';
  const APP_KEY = 'f6dce84ce20ee81c796598612db319fe';
 
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken')

  useEffect(() => {
    getRecipes();
    // console.log('fetching')
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=5&calories=591-722&health=alcohol-free`)
    const data = await response.json();
    setRecipes(data.hits)
    console.log(data.hits)
  }

  const updateSearch = e => {
    setSearch(e.target.value)
    // console.log(search)
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search)
    setSearch('');
  }

  return (
    <div className='App'>
      <form 
          onSubmit={getSearch} 
          className='search-form'
      >
        <input 
          className='search-bar' 
          type='text' 
          value={search}
          onChange={updateSearch} 
        />
        <button className='seach-button' type='submit'>search</button>
      </form>
      {recipes.map(recipe =>(
        <Recipe 
          key={recipe.recipe.image}
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
        />
      ))}
    </div>
  ); 
}


export default App;
