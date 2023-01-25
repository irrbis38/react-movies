import { MoviesItem } from "./MoviesItem";

export const Movies = (props) => {
  const movies = props.movies;
  return (
    <div className="content">
      {movies.map((movie) => (
        <MoviesItem key={movie.imdbID} {...movie} />
      ))}
    </div>
  );
};
