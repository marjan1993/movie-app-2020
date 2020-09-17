import React, {useContext} from "react";
import { MovieContext } from "../Contexts";
import "./index.css";
import MetaData from "./MetaData"; 

function MovieData() {
  const value = useContext(MovieContext);//why we used value instead of {movieSelected} ???
  //well in this case we set (in App.js) to useState(null),it's initially null, so if we do that it would be movieSelected of null
  return value ? <MetaData /> : <h2>Please search and select a movie</h2>;
}

export default MovieData;
