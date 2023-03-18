import React from "react";
import './Movielist.css';


function Movielist(props) {
  return (
    <div className="table-div">
    
       <table className="movie_table">
        <tr>
          <td className="table_title">{props.title}</td>
          <td className="table_genre">{props.genre}</td>
          <td className="table_year">{props.year}</td>
        </tr>
       </table>
    </div>
  );
}

export default Movielist;