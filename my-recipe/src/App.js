import React, {useEffect, useState} from "react";
import './App.css';

const App = () => {

  const APP_ID = 'ea7129ef';
  const APP_KEY = 'f6dce84ce20ee81c796598612db319fe';
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`;
  

  const [counter, setCounter] = useState(0);

  useEffect(() => {
   console.log('Effect has been run'); 
  }, []);


  return (
    <div className='App'>
      <form className='search-form'>
        <input type='text'></input>
        <button className='search-button' type='submit'>search</button>
      </form>
      <h1 onClick={() => setCounter(counter+1)}>{counter}</h1>
    </div>
  ); 
}


export default App;
