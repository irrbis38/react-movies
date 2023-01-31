export const MoviesItem = (props) => {
  // console.log(props);
  const { Title: title, Year: year, Poster: poster } = props;

  return (
    <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src={poster} alt={title} />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {title}
        </span>
        <p>{year}</p>
      </div>
    </div>
  );
};
