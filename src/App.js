import React, { useState, useEffect } from 'react';
import Recipe from './Recipe';
import './App.css';

function App() {

  const APP_ID = "4ac4128b";
  const APP_KEY = "aa1e3a0ccfd1223f54df43866747526d";

  const [recipes, setRecipes] = useState([]);

  useEffect( () => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
  }

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {recipes.map(recipe => (
        <Recipe 
        key={}
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories} 
        image={recipe.recipe.image}
        />
      ))}
    </div>
  );
}

export default App;
