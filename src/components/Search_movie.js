import React, { useState } from "react";

import Movie from "./movie_component";
function Search() {
  const [query, setquery] = useState("");

  const [movie, setmovie] = useState([]);

  const searchMovie = async (e) => {
    e.preventDefault();
    const url = `https://api.themoviedb.org/3/search/movie?api_key=88eef83e5a5f71613bc93307fb2bbb06&language=en-US&query=${query}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
    //   console.log(data);
      setmovie(data.results);
    } catch (e) {
      console.log(e);
    }
  };
  return (
      <>
    <div>
      <form className="form" onSubmit={searchMovie}>
        <label htmlFor="query" className="label">
          {" "}
          Movie
        </label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="search movie"
          value={query}
          onChange={(e) => setquery(e.target.value)}
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>
    </div>
    <div className="card-list">
        {movie.filter(movie=> movie.poster_path).map(movie=> <Movie movie={movie} key={movie.id}/>)}
    </div>
    </>
  );
}
export default Search;
