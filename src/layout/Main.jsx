import React from "react";

import { Movies } from "../components/Movies";

export class Main extends React.Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetch('http://www.omdbapi.com/?apikey=56f4f48e&s="girl"')
      .then((response) => response.json())
      .then((movies) => this.setState({ movies: movies.Search }));
  }

  render() {
    return (
      <main className="container">
        {this.state.movies.length === 0 ? (
          "Movies is loading..."
        ) : (
          <Movies movies={this.state.movies} />
        )}
      </main>
    );
  }
}
