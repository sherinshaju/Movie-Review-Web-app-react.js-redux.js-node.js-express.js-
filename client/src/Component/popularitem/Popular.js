import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./popular.scss";
import StarRatingComponent from "react-star-rating-component";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

class Popular extends Component {
  constructor() {
    super();

    this.state = {
      rating: 1
    };
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({ rating: nextValue });
  }
  
  render() {
    const { rating } = this.state;
    return (
      <React.Fragment>
        <div className="col-md-12 mt-5 mb-3">
          <h2 className="font-heading">POPULAR</h2>
        </div>

        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          // autoPlay={this.props.deviceType !== "mobile" ? true : false}
          autoPlay={false}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <div className="px-2 propular-card">
            <div className="card flex-md-row mb-4 box-shadow h-md-250">
              <img
                className="card-img-right flex-auto d-none d-md-block"
                data-src="holder.js/200x250?theme=thumb"
                alt="Thumbnail [200x250]"
                src="image/a5.jpg"
                data-holder-rendered="true"
              />
              <div className="card-body d-flex flex-column align-items-start">
                <h6 className="d-inline-block mb-2 movie">Movie</h6>
                <h4 className="mb-0">
                  <span className="text-dark">Django Unchained</span>
                </h4>
                <div className="mb-1 text-muted mt-3 time">10 min ago</div>
                <p className="card-text compney">C3 Entertement</p>
                <div>
                  <StarRatingComponent
                    name="rate1"
                    starCount={5}
                    value={rating}
                    onStarClick={this.onStarClick.bind(this)}
                  />
                </div>
                <span className="Read-more mt-auto">Read More > </span>
              </div>
            </div>
          </div>

          <div className="px-2 propular-card">
            <div className="card flex-md-row mb-4 box-shadow h-md-250">
              <img
                className="card-img-right flex-auto d-none d-md-block"
                data-src="holder.js/200x250?theme=thumb"
                alt="Thumbnail [200x250]"
                src="image/a1.jpg"
                data-holder-rendered="true"
              />
              <div className="card-body d-flex flex-column align-items-start">
                <h6 className="d-inline-block mb-2 movie">TV Serias</h6>
                <h4 className="mb-0">
                  <span className="text-dark">Harley Quinn</span>
                </h4>
                <div className="mb-1 text-muted mt-3 time">20 min ago</div>
                <p className="card-text  compney">DC Entertement</p>
                <StarRatingComponent
                  name="rate1"
                  starCount={5}
                  value={rating}
                  onStarClick={this.onStarClick.bind(this)}
                />
                <span className="Read-more mt-auto">Read More > </span>
              </div>
            </div>
          </div>

          <div className="px-2 propular-card">
            <div className="card flex-md-row mb-4 box-shadow h-md-250">
              <img
                className="card-img-right flex-auto d-none d-md-block"
                data-src="holder.js/200x250?theme=thumb"
                alt="Thumbnail [200x250]"
                src="image/a2.jpg"
                data-holder-rendered="true"
              />
              <div className="card-body d-flex flex-column align-items-start">
                <h6 className="d-inline-block mb-2 movie">Movie</h6>
                <h4 className="mb-0">
                  <span className="text-dark">Black panther</span>
                </h4>
                <div className="mb-1 text-muted mt-3 time">6 min ago</div>
                <p className="card-text compney">Marvel Comic</p>
                <StarRatingComponent
                  name="rate1"
                  starCount={5}
                  value={rating}
                  onStarClick={this.onStarClick.bind(this)}
                />
                <span className="Read-more mt-auto ">Read More > </span>
              </div>
            </div>
          </div>

          <div className="px-2 propular-card">
            <div className="card flex-md-row mb-4 box-shadow h-md-250">
              <img
                className="card-img-right flex-auto d-none d-md-block"
                data-src="holder.js/200x250?theme=thumb"
                alt="Thumbnail [200x250]"
                src="image/a3.jpg"
                data-holder-rendered="true"
              />
              <div className="card-body d-flex flex-column align-items-start">
                <h6 className="d-inline-block mb-2 movie">Movie</h6>
                <h4 className="mb-0">
                  <span className="text-dark">Iron Man</span>
                </h4>
                <div className="mb-1 text-muted mt-3 time">7 min ago</div>
                <p className="card-text compney">Marvel Comic</p>
                <StarRatingComponent
                  name="rate1"
                  starCount={5}
                  value={rating}
                  onStarClick={this.onStarClick.bind(this)}
                />
                <span className="Read-more mt-auto ">Read More > </span>
              </div>
            </div>
          </div>
        </Carousel>
      </React.Fragment>
    );
  }
}
export default Popular;
