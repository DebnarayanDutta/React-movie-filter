import React from 'react';
import './App.css';
import Movielist from './Components/Movielist';
import List from './Components/List';
import Genrefilter from './Components/Genrefilter';

function movie(val){
  return(
    <Movielist
    title={val.title}
    genre={val.genre}
    year={val.year}
    />
  )
}



function App() {
  return (
    <div className="App">
       <h1>Top 15 Movies of All Time</h1>
       <Genrefilter/>
       <br/>
       <br/>
       <div>
        {List.map(movie)}
       </div>
    </div>
  );
}

export default App;
