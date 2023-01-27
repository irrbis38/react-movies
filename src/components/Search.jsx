import React from "react";

export class Search extends React.Component {
  state = {
    search: "",
  };

  inputHandler = (e) => {
    if (e.key === "Enter") {
      this.props.clickHandler(this.state.search);
    }
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
              onChange={(e) => this.setState({ search: e.target.value })}
              type="search"
              className="validate search__input"
              onKeyDown={(e) => this.inputHandler(e)}
            />
            <button
              className="btn search__btn"
              onClick={() => clickHandler(this.state.search)}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    );
  }
}
