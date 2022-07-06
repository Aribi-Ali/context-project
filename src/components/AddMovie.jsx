import React, { useContext, useState } from "react";
import { MovieContext } from "../contexts/MovieContext";
const AddMovie = (props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [movies, setMovies] = useContext(MovieContext);
  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const priceHandler = (e) => {
    setPrice(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setMovies(movies=> [...movies,{id:Math.random,name,price}])
    props.dispatch("info1")
  };
  return (
    <form onSubmit={submitHandler}>
      <input type="text" name="name" value={name} placeholder="name" onChange={nameHandler}/>
      <input type="number" name="price" value={price} placeholder="price" onChange={priceHandler}/>
      <input type="submit" />
    </form>
  );
};
export default AddMovie;