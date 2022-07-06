import React,{useContext} from "react";
import { MovieContext } from "../contexts/MovieContext";
const Nav=()=>{
    const[movies]=useContext(MovieContext)
    return (
        <div className="flex justify-around" >
            <h1>Watch New Movies</h1>
            <h2>{movies.length}</h2>
        </div>
    );
}
export default Nav; 