import React, { Component } from "react";
import { Player } from "video-react";
import "./topnews.scss";

class Topnews extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="col-md-12 mt-5 mb-3">
          <div className="d-flex  justify-content-between">
            <h2 className="News-heading text-left">Video</h2>
            <span className="see-more">See More</span>
          </div>
        </div>
        <div className="col-md-12">
          <div className="bg-new row">
            <Player
              autoPlay
              playsInline
              // poster="/assets/poster.png"
              src="http://media.w3.org/2010/05/bunny/movie.mp4"
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Topnews;
