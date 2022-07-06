import React, { createContext, useState } from "react";

export const MovieContext = createContext([]);

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    { id: 1, name: "Got", price: 10 },
    { id: 2, name: "Peaky Blinders", price: 20 },
    { id: 3, name: "Solo Leavling", price: 99 },
  ]);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
