import React, { Component } from "react";
import Carousel from "./carousel/Carousel";
import Popular from "./popularitem/Popular";
import Movies from "./movies/Movies";
import News from "./news/News";
import Topnews from "./topday/Topnews";

class Home extends Component {
  render() {
    // console.log(this.props.history.location);
    return (
      <React.Fragment>
        <Carousel />
        <div className="container-fluid">
          <Popular />
        </div>
        <div className="container">
          <Movies />
          <News />
        </div>
        <Topnews />
      </React.Fragment>
    );
  }
}
export default Home;
