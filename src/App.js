import React from "react";
import { MovieProvider,MovieContext } from "./contexts/MovieContext";
import MovieList from './components/MovieList'
import Nav from "./components/Nav";
function App() {
  return (
    <MovieProvider >
      <Nav/>
      <MovieList/>
      
    </MovieProvider>
  );
}

export default App;
