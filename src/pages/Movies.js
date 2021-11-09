import React, { useState } from "react";
import { MovieItem } from "../components/MovieItem";
import { Form } from "../components/Form";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [form, setForm] = useState({ title: "", year: "" });

  const renderMovies = movies.length ? movies.map((movie) => {
    return <MovieItem key={movie.id} movie={movie} setMovies={setMovies} />
  }) : <div>No Movies</div>

  return(
    <>
      <h1>Movie list</h1>
      <Form 
        form={form} 
        setForm={setForm} 
        movies={movies}
        setMovies={setMovies}
      />
      <ul style={{ padding: 0 }}>
        {renderMovies}
      </ul>
    </>
  )
}