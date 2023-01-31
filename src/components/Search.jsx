import { useState } from "react";

export const Search = ({ clickHandler }) => {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("all");

  const inputHandler = (e) => {
    if (e.key === "Enter") {
      clickHandler(search, type);
    }
  };

  const filterHandler = (e) => {
    setType(e.target.dataset.type);
    clickHandler(search, e.target.dataset.type);
  };

  return (
    <div className="row">
      <div className="col s12">
        <div className="input-field search__line">
          <input
            placeholder="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            className="validate search__input"
            onKeyDown={(e) => inputHandler(e)}
          />
          <button
            className="btn search__btn"
            onClick={() => clickHandler(search, type)}
          >
            Search
          </button>
        </div>
      </div>
      <div className="filters">
        <label className="filters__btn">
          <input
            className="with-gap"
            name="group3"
            type="radio"
            data-type="all"
            onChange={filterHandler}
            checked={type === "all"}
          />
          <span>All</span>
        </label>
        <label className="filters__btn">
          <input
            className="with-gap"
            name="group3"
            type="radio"
            data-type="movie"
            onChange={filterHandler}
            checked={type === "movie"}
          />
          <span>Movie</span>
        </label>
        <label className="filters__btn">
          <input
            className="with-gap"
            name="group3"
            type="radio"
            data-type="series"
            onChange={filterHandler}
            checked={type === "series"}
          />
          <span>Series</span>
        </label>
      </div>
    </div>
  );
};
