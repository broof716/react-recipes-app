import React from 'react';
import './App.css';

function App() {

  const APP_ID = "4ac4128b";
  const APP_KEY = "aa1e3a0ccfd1223f54df43866747526d";

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default App;
