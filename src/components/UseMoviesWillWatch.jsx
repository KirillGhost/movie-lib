import { useState } from "react";

function useMoviesWillWatch() {
  const [moviesWillWatch, setMoviesWillWatch] = useState([]);

  const addMovieToWillWatch = movie => {
    setMoviesWillWatch((moviesWillWatch) => [...moviesWillWatch, movie]);
  };

  const deleteMovieFromWillWatch = movie => {
    const updateMoviesWillWatch = moviesWillWatch.filter(
      item => item.id !== movie.id
    );
    setMoviesWillWatch(updateMoviesWillWatch);
  };

  return {
    moviesWillWatch,
    addMovieToWillWatch,
    deleteMovieFromWillWatch
  };
}

export default useMoviesWillWatch;