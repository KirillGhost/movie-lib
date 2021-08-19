import React, { useState, useEffect } from "react";
import classnames from 'classnames';
import MovieItem from "./MovieItem";
import MovieTabs from "./MovieTabs";
import useMovies from "./UseMovies";
import useMoviesWillWatch from "./UseMoviesWillWatch";
import usePageSwitch from "./UsePageSwitch";

function App() {
  const [sortBy, setSortBy] = useState("popularity.desc");

  const {
    movies,
    getMovies,
    deleteMovie,
    total_pages
  } = useMovies();

  const {
    moviesWillWatch,
    addMovieToWillWatch,
    deleteMovieFromWillWatch
  } = useMoviesWillWatch();

  const {
    showPrevPage,
    showNextPage,
    currentPage
  } = usePageSwitch();

  const updateSortBy = value => {
    setSortBy(value);
  }

  useEffect(() => {
    getMovies({ sortBy, currentPage });
    console.log(sortBy);
    return () => {}; // ComponentWillUnmount()
  }, [sortBy, currentPage]);

  return ( 
    <div className="container">
      <div className="row mt-4">
        <div className="col-9">
          <div className="row mb-4">
            <div className="col-12">
              <MovieTabs
                sort_by={sortBy}
                updateSortBy={updateSortBy}
              />
            </div>
          </div>
          <div className="row">
            {movies.map(movie => {
              return (
                <div className="col-6 mb-4" key={movie.id}>
                  <MovieItem
                    data={movie}
                    deleteMovie={deleteMovie}
                    addMovieToWillWatch={addMovieToWillWatch}
                    deleteMovieFromWillWatch={deleteMovieFromWillWatch}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-3">
          <h4>Will Watch: {moviesWillWatch.length} movies</h4>
          <ul className="list-group">
            {moviesWillWatch.map(movie => (
              <li key={movie.id} className="list-group-item">
                <div className="d-flex justify-content-between">
                  <p>{movie.title}</p>
                  <p>{movie.vote_average}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer">
        <button
          type="button"
          className={classnames("btn", { "btn-info": currentPage > 1, "btn-secondary": currentPage === 1 })}
          onClick={showPrevPage}
        >
          Prev Page
        </button>
        <button
          type="button"
          className={classnames("btn", { "btn-info": currentPage < total_pages, "btn-secondary": currentPage === total_pages})}
          onClick={showNextPage}
        >
          Next Page
        </button>
        <div>Page {currentPage} of {total_pages}</div>
      </div>
    </div>
  );
}

export default App;
