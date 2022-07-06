import React from "react";
const Movie = ({ name, price, id }) => {
  return ( 
     
    <div className=" font-semibold w-4/12 border-2 border-opacity-70 my-2 p-2 text-start  relative">
      <h2 className="absolute left-0 top-0 m-1">{price} </h2>
      <h1 className="p-2">{name} </h1>
      <h3>{id}</h3>
    </div>
   );
};
export default Movie;
  