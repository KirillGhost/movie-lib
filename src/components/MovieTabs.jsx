import React from "react";

class MovieTabs extends React.Component {
  constructor() {
    super();

    this.sortMovies = this.sortMovies.bind(this);

    this.state = {
      filter: "popularity",
      sortType: "desc",
    };
  }

  sortMovies = curFilter => {
    this.setState({
      filter: curFilter
    });

    this.props.updateSortBy(curFilter+"."+this.state.sortType);
  }

  render() {
    const getClassLink = value => {
      return `nav-link ${sort_by.startsWith(value) ? "active" : ""}`;
    };
    
    const { sort_by } = this.props;
    
    return (
      <ul className="tabs nav nav-pills">
        <li className="nav-item">
          <div
            className={getClassLink("popularity")} 
            onClick={() => this.sortMovies("popularity")}
          >            
            Popularity
          </div>
        </li>
        <li className="nav-item">
          <div
            className={getClassLink("vote_average")}
            onClick={() => this.sortMovies("vote_average")}
          >
            Vote average
          </div>
        </li>        
        <li className="nav-item">
          <div
            className={getClassLink("vote_count")} 
            onClick={() => this.sortMovies("vote_count")}
          >
            Vote count
          </div>
        </li>
        <li className="nav-item">
          <div
            className={getClassLink("title")} 
            onClick={() => this.sortMovies("title")}
          >
            Title
          </div>
        </li>
        <li className="nav-item">
          <div
            className={getClassLink("release_date")}
            onClick={() => this.sortMovies("release_date")}
          >
            Release date
          </div>
        </li>
      </ul>
    );
  }
}

export default MovieTabs;