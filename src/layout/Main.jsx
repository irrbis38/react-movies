import React from "react";

import { Movies } from "../components/Movies";
import { Search } from "../components/Search";
import { Preloader } from "./../components/Preloader";

export class Main extends React.Component {
    state = {
        movies: [],
        loading: true,
    };

    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=56f4f48e&s="man"')
            .then((response) => response.json())
            .then((movies) =>
                this.setState({ movies: movies.Search, loading: false })
            );
    }

    clickHandler = (str, type = "all") => {
        this.setState({ loading: true });
        str = str || "man";
        fetch(
            `http://www.omdbapi.com/?apikey=56f4f48e&s="${str}${
                type !== "all" ? `&type=${type}` : ""
            }"`
        )
            .then((response) => response.json())
            .then((movies) => {
                this.setState({ movies: movies.Search, loading: false });
            });
    };

    render() {
        const { movies, loading } = this.state;
        return (
            <main className="container">
                <Search clickHandler={this.clickHandler} />
                {loading ? <Preloader /> : <Movies movies={movies} />}
            </main>
        );
    }
}
