import { useState } from "react";
import { API_URL, API_KEY_3 } from "../utils/api";

function useMovies() {
  const [movies, setMovies] = useState([]);
  const [total_pages, setTotalPages] = useState(1);

  const getMovies = ({ sortBy, currentPage }) => {
    fetch(`${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${sortBy}&page=${currentPage}`).then((response) => {
      return response.json()
    }).then((data) => {
      setMovies(data.results);
      setTotalPages(data.total_pages);
    })
  }

  const deleteMovie = movie => {
    const updateMovies = movies.filter(item => item.id !== movie.id);
    setMovies(updateMovies);
  };  

  return {
    movies,
    getMovies,
    deleteMovie,
    total_pages
  }
}

export default useMovies;