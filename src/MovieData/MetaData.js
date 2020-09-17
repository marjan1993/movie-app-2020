import React, {useContext} from "react";
import { MovieContext } from "../Contexts";
import "./index.css";

function MetaData() {
  const {Poster, Title, Type, Year} = useContext(MovieContext);//since we only show the MetaData component, if there is in fact something in the MovieContext that mean we don't have to worry about that movieSelected is null or not
  //because we sure that the context is an object here and it's not "null" anymore
  return (
    <div>
      <img src={Poster} alt="Movie Poster" />
      <h3 className="movie-info">{Title}</h3>
      <div className="movie-info">
        <div className="info-section">
          <label>Label</label> 
          <span>{Type}</span>
        </div>
        <div className="info-section">
          <label>Label</label> 
          <span>{Year}</span>
        </div>
      </div>
    </div>
  );
}

export default MetaData;
