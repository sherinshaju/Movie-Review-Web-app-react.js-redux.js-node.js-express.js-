import React, { Component } from "react";
import "./news.scss";

class News extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-12 mt-5 mb-3">
            <div className="d-flex  justify-content-between">
              <h2 className="News-heading text-left">Top News</h2>
              <span className="see-more">See More</span>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center card-news mt-3">
          <div className="col-md-5">
            <div className="card mb-4 shadow-lg">
              <img src="image/news.jpg" width="auto" height="250px" />
              <div className="card-body">
                <span className="card-text">
                  <span className="date-uploaded">
                    <i className="far fa-clock text-danger mr-2" />
                    Jan 10 2019
                  </span>
                  <h5 className="mt-2">The-Baby-Boss-Earns 200M</h5>
                  <div className="content">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </div>
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="row side-news no-gutters rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col-auto d-none d-lg-block">
                <img src="image/news-1.jpg" width="130" height="100px" />
              </div>
              <div className="col  pl-3 d-flex flex-column my-auto position-static">
                <span className="date-uploaded">
                  <i className="far fa-clock text-danger mr-2" />
                  Jan 10 2019
                </span>
                <h6 className="card-text mt-3">
                  Anger Birds Gone To Be Super Hit
                </h6>
              </div>
            </div>
            <div className="row side-news no-gutters rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col-auto d-none d-lg-block">
                <img src="image/news-3.jpg" width="130" height="100px" />
              </div>
              <div className="col  pl-3 d-flex flex-column my-auto position-static">
                <span className="date-uploaded">
                  <i className="far fa-clock text-danger mr-2" />
                  Dec 22 2019
                </span>
                <h6 className="card-text mt-3">
                  Gigantic Writer Says To Hero Something Personal.
                </h6>
              </div>
            </div>
            <div className="row side-news no-gutters rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col-auto d-none d-lg-block">
                <img src="image/news-2.jpg" width="130" height="100px" />
              </div>
              <div className="col  pl-3 d-flex flex-column my-auto position-static">
                <span className="date-uploaded">
                  <i className="far fa-clock text-danger mr-2" />
                  Feb 15 2019
                </span>
                <h6 className="card-text mt-3">
                  Tanglen New Trailer 4 Just Released Now
                </h6>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default News;
