import React, { useState } from "react";
import SearchBar from './Search';
import MovieData from './MovieData';
import { SearchContext, MovieContext } from './Contexts';
import "./App.css";

function App() {
  const [searchValue, setSearchValue ] = useState("");
  const [results, setResults] = useState([]);
  const [movieSelected, setMovieSelected] = useState(null);
  const [searching, setSearching] = useState(false);//it's false at the beginning
  
  async function handleSearchChange(inputValue) {
    setSearchValue(inputValue);
    const API_KEY = process.env.REACT_APP_API_KEY;
    //console.log("API_KEY", process.env);
    const response = await fetch(//the fetch function returns a promise so we can use then OR await
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputValue}`
    );
    //console.log(response);

    //response object must be in json format to show the movies in searchBar so we use const = data ...
    const data = await response.json();//await it's because .json is return a promise so we need to wait for that too
    setResults(data.Search || []); 
    // without || [], this code  returns an error there is no data.search and app will crash , because the error is "to many result" 
    //so we will set a condition if there is a data.search OR if there isn't so return an empty array
    //in the end we ether have a valid search results or just an empty array
    setSearching(true);//that means that we are searching
  }

  function handleMovieSelected(movieSelected) {
    // console.log("movieSelected: ", movieSelected);
    setMovieSelected(movieSelected);
    setSearching(false);//when the item get selected by user then  disappear the searchList
  }

  const searchContextValue = {//which value that we want the <SearchBar /> to have access to ?? which is handleSearchChange and title
    handleSearchChange,
    handleMovieSelected,
    title: searchValue,
    results,
    searching
  }

  return (
    <div className="App">
      <SearchContext.Provider value={searchContextValue}>
        <SearchBar />
      </SearchContext.Provider>
      <MovieContext.Provider value={movieSelected}>
        <MovieData />
      </MovieContext.Provider>
    </div>
  );
}

export default App;
