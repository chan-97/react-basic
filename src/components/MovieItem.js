import React from "react";
import "./MovieItem.css";

export function MovieItem({ movie, setMovies }) {
  const removeMovie = () => {
    setMovies(movielist => {
      return movielist.filter((mov => {
        return mov.id !== movie.id;
      }))
    })
  }

  return(
    <li className="movie-item">
      <div>
        <span className="movie-title">{movie.title}</span>
        <span className="movie-year">({movie.year})</span>
      </div>
      <div onClick={removeMovie} className="delete-btn">Delete</div>
    </li>
  )
}