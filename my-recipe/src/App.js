import React, {useEffect, useState} from "react";
import './App.css';
import Recipe from "./Recipe";

const App = () => {

  const APP_ID = 'ea7129ef';
  const APP_KEY = 'f6dce84ce20ee81c796598612db319fe';
 
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('')


  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=5&calories=591-722&health=alcohol-free`)
    const data = await response.json();
    setRecipes(data.hits)
    console.log(data.hits)
  }

  useEffect(() => {
    getRecipes();
    // console.log('fetching')
  }, [query]);
  
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
      <div>
        <table className='titleBar'>
          <tbody>
            <tr>
              <td>
                {/* <img alt="app icon" className="logoImg" src="" /> */}
              </td>
              <td className="titleContainer">
                <h3 id="title">🌿 Garnish®</h3>
                <span id='link'><a href=''>home</a></span>
                <span id='link'><a href=''>about</a></span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
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
        <button className='search-button' type='submit'>search</button>
      </form>
        <div className='recipes'>
        {recipes.map(recipe =>(
          <Recipe 
            key={recipe.recipe.label}
            title={recipe.recipe.label} 
            calories={recipe.recipe.calories.toFixed(2)}
            ingredients={recipe.recipe.ingredients}
            image={recipe.recipe.image}
          />
        ))}
        </div>
    </div>
  ); 
}


export default App;
