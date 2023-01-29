import { MoviesItem } from "./MoviesItem";

export const Movies = (props) => {
    const { movies = [] } = props;
    return (
        <div className="content">
            {movies.length ? (
                movies.map((movie) => (
                    <MoviesItem key={movie.imdbID} {...movie} />
                ))
            ) : (
                <h4>Nothing found</h4>
            )}
        </div>
    );
};
