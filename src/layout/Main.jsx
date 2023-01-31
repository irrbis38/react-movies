import { useState, useEffect } from "react";

import { Movies } from "../components/Movies";
import { Search } from "../components/Search";
import { Preloader } from "./../components/Preloader";

const getFetch = (moviesHandler, loadingHandler, str, type) => {
  type = type || "all";
  str = str || "man";
  fetch(
    `http://www.omdbapi.com/?apikey=56f4f48e&s="${str}${
      type !== "all" ? `&type=${type}` : ""
    }"`
  )
    .then((response) => response.json())
    .then((movies) => {
      moviesHandler(movies.Search);
      loadingHandler(false);
    })
    .catch((err) => {
      console.log(err);
      loadingHandler(false);
    });
};

export const Main = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFetch(setMovies, setLoading);
  }, []);

  const clickHandler = (str, type) => {
    getFetch(setMovies, setLoading, str, type);
  };

  return (
    <main className="container">
      <Search clickHandler={clickHandler} />
      {loading ? <Preloader /> : <Movies movies={movies} />}
    </main>
  );
};
