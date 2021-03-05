import React, {useEffect, useState} from "react";
import './App.css';
import Recipe from "./Recipe";

const App = () => {

  const APP_ID = 'ea7129ef';
  const APP_KEY = 'f6dce84ce20ee81c796598612db319fe';
 
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`)
    const data = await response.json();
    setRecipes(data.hits)
    console.log(data.hits)
  }

  return (
    <div className='App'>
      <form className='search-form'>
        <input type='text'></input>
        <button className='search-button' type='submit'>search</button>
      </form>
      {recipes.map(recipe =>(
        <Recipe 
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}/>
      ))}
    </div>
  ); 
}


export default App;
