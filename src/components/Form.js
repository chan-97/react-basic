import React, { useState } from "react";
import { InputField } from "./InputField";
import "./Form.css";

export function Form({ form, setForm, movies, setMovies }) {
  const [errorMessage, setErrorMessage] = useState({ title: "", year: "" });

  const submitMovie = (e) => {
    e.preventDefault();
    if(validateForm()) {
      setMovies([ ...movies, { ...form, id: Date.now() } ]);
      setForm({ title: "", year: "" });
      setErrorMessage({ title: "", year: "" });
    }
  }

  const validateForm = () => {
    let validated = true;
    setErrorMessage({ title: "", year: "" });
    if(!form.title) {
      validated = false;
      setErrorMessage(prev => {
        return { ...prev, title: "영화제목을 입력하세요!" };
      });
    }
    if(!form.year) {
      validated = false;
      setErrorMessage(prev => {
        return { ...prev, year: "개봉연도를 입력하세요!" };
      });
    }
    return validated;
  }

  const handleChangeInputs = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  return(
    <form 
      onSubmit={submitMovie}
      className="movie-form"
    >
      <InputField 
        name="title"
        onChange={handleChangeInputs}
        value={form.title}
        className="form-title" 
        placeholder="영화제목" 
        type="text"
        error={errorMessage.title}
      />
      <InputField 
        name="year"
        onChange={handleChangeInputs}
        value={form.year}
        className="form-year" 
        placeholder="개봉연도" 
        type="number"
        error={errorMessage.year}
      />
      <button type="submit">Submit</button>
    </form>
  )
}