import React, { Component } from "react";
import "./movies.scss";
import { connect } from "react-redux";
import axios from "axios";
import { withRouter } from "react-router-dom";

class Movies extends Component {
  // componentDidMount =  async() => {
  //   const res = await axios("https://musixmatchcom-musixmatch.p.rapidapi.com/wsr/1.1/artist.search");
  //   const datanew = await res.data;
  //   console.log(datanew);
  // };

  view = id => {
    axios(`/api/view/${id}`, {
      method: "post"
    }).then(res => {
      this.props.dispatch({
        type: "viewMovie",
        payload: res.data
      });
      this.props.history.push("/view");
    });
  };

  render() {
    // console.log(this.props.history);
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-12 mt-5 mb-3">
            <h2 className="font-heading text-center">Movies</h2>
          </div>
        </div>
        <div className="row my-3 d-flex justify-content-start">
          {this.props.movieDetils.map(movies => (
            <div className="col-md-2" key={movies.id}>
              <div className="movie-wrapper">
                <div className="movie-image">
                  <img src={movies.image} />
                  <div className="movie-rating">
                    <div className="d-flex justify-content-between text-white px-3 pb-2">
                      <span
                        className="view-review"
                        onClick={() => this.view(movies.id)}
                      >
                        <i className="fas fa-eye text-white" />
                      </span>
                      <span className="bg-white text-dark px-2 round-rating">
                        {movies.rating}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="movie-name d-flex flex-column mt-3">
                  <span className="movie">{movies.name}</span>
                  <span className="movie-data">{movies.cover}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

function getmovieData(state) {
  return {
    movieDetils: state.counterReducer.movies
  };
}

export default withRouter(connect(getmovieData)(Movies));
