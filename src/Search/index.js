import React, { useContext } from "react";
import { SearchContext } from '../Contexts';
import SearchList from './SearchList';
import "./index.css";

const SearchBar = () => {
  const { title, handleSearchChange, searching } = useContext(SearchContext);
  return (
    <div className="search">
      <input 
        type="search" 
        name="movie-search" 
        value={title} 
        onChange={e => handleSearchChange(e.target.value)}
      />
      {/*we only show the search list if there is a title*/}
      {title !== '' && searching  && <SearchList /> } 
      {/* if the title it's not empty and we are searching then show the searchList */}
    </div>
  );
};

export default SearchBar;
