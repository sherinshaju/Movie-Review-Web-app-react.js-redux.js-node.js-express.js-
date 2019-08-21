import React, { Component } from "react";
import "./carousel.scss";

class Carousel extends Component {
  render() {
    return (
      <React.Fragment>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            />
            <li data-target="#carouselExampleIndicators" data-slide-to="1" />
            <li data-target="#carouselExampleIndicators" data-slide-to="2" />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                src="./image/1.jpg"
                alt="First slide"
              />
              <div className="carousel-caption d-none d-md-block custom-btn">
                <h1>How to train your dragon 3</h1>
                <p>The film's plot follows Hiccup seeking a dragon utopia called "The Hidden World" while<br/>
                coming to terms with Toothless' new bond with a female Light Fury. </p>
                 <button className="btn-5">Read More ></button>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="./image/2.jpg"
                alt="Second slide"
              />
               <div className="carousel-caption d-none d-md-block custom-btn">
                <h1>How to train your dragon 3</h1>
                <p>The film's plot follows Hiccup seeking a dragon utopia called "The Hidden World" while<br/>
                coming to terms with Toothless' new bond with a female Light Fury. </p>
                  <button className="btn-5">Read More >></button>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="./image/3.jpg"
                alt="Third slide"
              />
               <div className="carousel-caption d-none d-md-block custom-btn">
                <h1>How to train your dragon 3</h1>
                <p>The film's plot follows Hiccup seeking a dragon utopia called "The Hidden World" while<br/>
                coming to terms with Toothless' new bond with a female Light Fury. </p>
                <button className="btn-5">Read More ></button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Carousel;
