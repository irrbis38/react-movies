import React from "react";

import { Movies } from "../components/Movies";
import { Search } from "../components/Search";
import { Preloader } from "./../components/Preloader";

export class Main extends React.Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetch('http://www.omdbapi.com/?apikey=56f4f48e&s="girl"')
      .then((response) => response.json())
      .then((movies) => this.setState({ movies: movies.Search }));
  }

  clickHandler = (str) => {
    fetch(`http://www.omdbapi.com/?apikey=56f4f48e&s="${str}"`)
      .then((response) => response.json())
      .then((movies) => this.setState({ movies: movies.Search }));
  };

  render() {
    return (
      <main className="container">
        <Search clickHandler={this.clickHandler} />
        {this.state.movies.length === 0 ? (
          <Preloader />
        ) : (
          <Movies movies={this.state.movies} />
        )}
      </main>
    );
  }
}
