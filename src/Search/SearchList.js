import React, {useContext} from "react";
import { SearchContext } from "../Contexts";
import "./index.css";

const SearchList = () => {
  const { results, handleMovieSelected } = useContext(SearchContext)
  return (
    <ul className="results">
      {results.map((item, i) => {//i is the "index" in the "item"
        return (
          <li key={i} onClick={()=>handleMovieSelected(item)}>
            <img src={item.Poster} alt="movie poster" />
            {item.Title}
          </li>
        );
      })}
    </ul>
  );
};

export default SearchList;
