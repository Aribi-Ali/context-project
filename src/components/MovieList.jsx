import React, { useContext, useReducer } from "react";
import { MovieContext } from "../contexts/MovieContext";
import AddMovie from "./AddMovie";
import Movie from "./Movie";

const MovieList = () => {
  const [info, ddispatch] = useReducer((action)=> {
    if (action == "info1") console.log("action 1");
    else console.log(action );
  }, "hello");

  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div className="">
      <AddMovie dispatch={ddispatch} />
      {movies.map((movie) => (
        <Movie key={movie.id} name={movie.name} price={movie.price} />
      ))}
    </div>
  );
};

export default MovieList;
