export const Filters = () => {
    return (
        <div className="filters">
            <label className="filters__btn">
                <input
                    class="with-gap"
                    name="group3"
                    type="radio"
                    data-type="all"
                    checked
                />
                <span>All</span>
            </label>
            <label className="filters__btn">
                <input
                    class="with-gap"
                    name="group3"
                    type="radio"
                    data-type="movie"
                />
                <span>Movies</span>
            </label>
            <label className="filters__btn">
                <input
                    class="with-gap"
                    name="group3"
                    type="radio"
                    data-type="series"
                />
                <span>Series</span>
            </label>
        </div>
    );
};
