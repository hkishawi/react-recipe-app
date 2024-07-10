import React, {useEffect, useState} from "react";
import './App.css';
import Recipe from "./Recipe";

const App = () => {

  const APP_ID = 'ea7129ef';
  const APP_KEY = 'f6dce84ce20ee81c796598612db319fe';
 
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('garnish')


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
    <div className='App' data-hanny="hannyDiv">
            <div>
        <table className='titleBar' data-hanny="hanny_test">
          <tbody data-hanny="hanny_tbody">
            <tr data-hanny="hanny_tr">
              
              <td>
                {/* <img alt="app icon" className="logoImg" src="" /> */}
              </td>
              <td className="titleContainer">
              </td>
                <h3 id="title" date-foo="title-foo">🌿 Garnish®</h3>
                <h3 data-hanny="hannyTitle">Custom HTML Attribute Title</h3>
               <div id="desk"><p><b>desk_____</b></p></div>
                <div id="desk"><p><b>stool_____</b></p></div>
                <div id="desk"><p><b>lamp_____</b></p></div>
                <div id="desk"><span id='link_1' class="nav_link"><a href=''>home</a></span></div>
                <div id="desk"><span id='link_2' class="nav_link"><a href=''>about</a></span></div>
                <div id="desk"><span id='link_3' class="nav_link"><a href='https://www.google.com'>google</a></span></div>
                <div><span id="spl-button-test" class="nav_link"><spl-button><a href='https://www.google.com'>SPL-BUTTON</a></spl-button></span></div>
              <div class="dropdown">
                <button class="dropbtn">Dropdown</button>
                <div class="dropdown-content">
                  <button class="dropdown-option" type="button"><a href="https://www.npr.org/">Option 1</a></button>
                  <button class="dropdown-option" type="button"><a href="https://www.google.com/search?q=star+wars&source=hp&ei=20ZAY8XOEIPcptQP8MKkuA4&iflsig=AJiK0e8AAAAAY0BU650z18KjQkbskrrOGHPWEE5AfCaG&ved=0ahUKEwiFqL3JuM76AhUDrokEHXAhCecQ4dUDCAk&uact=5&oq=star+wars&gs_lcp=Cgdnd3Mtd2l6EAMyCAgAEIAEELEDMggIABCABBCxAzIICAAQgAQQsQMyBQgAEIAEMgsILhCABBCxAxCDATILCC4QgAQQsQMQ1AIyCwguEIAEELEDENQCMggILhCABBCxAzILCC4QgAQQsQMQ1AIyCAguEIAEELEDOgsIABCABBCxAxCDAToLCC4QgAQQxwEQ0QM6CAguELEDEIMBOgsILhCxAxCDARDUAjoRCC4QgAQQsQMQgwEQxwEQ0QM6DgguEIAEELEDEMcBENEDOgsIABCABBCxAxDJAzoICAAQsQMQgwE6CwguEIAEEMcBEK8BOg4ILhCABBDHARCvARDUAjoFCC4QgARQAFiICGCMCWgAcAB4AIAB0gGIAbUKkgEFMC43LjGYAQCgAQE&sclient=gws-wiz">Option 2</a></button>
                  <button class="dropdown-option" type="button"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button">Option 3</a></button>
                  <button class="dropdown-option" type="button"><a href="https://www.google.com">Option quatro</a></button>
              </div>
              </div>
          </tr>

          </tbody>
        </table>
      </div>
       <div html-attribute-class="html-attribute-class_value" class="html-attribute-class" id="html-attribute-id"> 
              <button html-attribute-id="html-attribute-id-value" class="dropdown-option" type="button"><a href="https://garnish.netlify.app">HTML Attribute</a></button>
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
        <div>
        <button date-test-id="data-test-id" type="button">Custom HTML attribute</button>
        </div>
        </div>
    </div>
  ); 
}


export default App;
