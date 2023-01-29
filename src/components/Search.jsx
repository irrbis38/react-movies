import React from "react";

export class Search extends React.Component {
    state = {
        search: "",
        type: "all",
    };

    inputHandler = (e) => {
        if (e.key === "Enter") {
            this.props.clickHandler(this.state.search, this.state.type);
        }
    };

    filterHandler = (e) => {
        // console.log(e.target.dataset.type);
        this.setState(
            () => ({ type: e.target.dataset.type }),
            () => {
                this.props.clickHandler(this.state.search, this.state.type);
            }
        );
    };

    render() {
        const { clickHandler } = this.props;

        return (
            <div className="row">
                <div className="col s12">
                    <div className="input-field search__line">
                        <input
                            placeholder="search"
                            value={this.state.search}
                            onChange={(e) =>
                                this.setState({ search: e.target.value })
                            }
                            type="search"
                            className="validate search__input"
                            onKeyDown={(e) => this.inputHandler(e)}
                        />
                        <button
                            className="btn search__btn"
                            onClick={() =>
                                clickHandler(this.state.search, this.state.type)
                            }
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
                            onChange={this.filterHandler}
                            checked={this.state.type === "all"}
                        />
                        <span>All</span>
                    </label>
                    <label className="filters__btn">
                        <input
                            className="with-gap"
                            name="group3"
                            type="radio"
                            data-type="movie"
                            onChange={this.filterHandler}
                            checked={this.state.type === "movie"}
                        />
                        <span>Movie</span>
                    </label>
                    <label className="filters__btn">
                        <input
                            className="with-gap"
                            name="group3"
                            type="radio"
                            data-type="series"
                            onChange={this.filterHandler}
                            checked={this.state.type === "series"}
                        />
                        <span>Series</span>
                    </label>
                </div>
            </div>
        );
    }
}
