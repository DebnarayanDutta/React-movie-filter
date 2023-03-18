import React from "react";
import './Genrefilter.css';

const Genrefilter = () =>{
    return(
        <div>
        <div className="filter_div">
        <h2>Filter by Genre</h2>
        <button onClick={() => console.log('Filtering by Drama')}>Drama</button>
        <button onClick={() => console.log('Filtering by Crime')}>Crime</button>
        <button onClick={() => console.log('Filtering by Action')}>Action</button>
        <button onClick={() => console.log('Filtering by Fantasy')}>Fantasy</button>
        <button onClick={() => console.log('Filtering by Western')}>Western</button>
        <button onClick={() => console.log('Filtering by Science Fiction')}>Science Fiction</button>
        <button onClick={() => console.log('Filtering by Thriller')}>Thriller</button>
        <button onClick={() => console.log('Filtering by War')}>War</button>
        <button onClick={() => console.log('Filtering by Animation')}>Animation</button>
      </div>
      </div>
    )
}

export default Genrefilter;